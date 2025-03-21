const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Importando Axios

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    console.log('Requisição recebida:', req.body);

    const intent = req.body.queryResult.intent.displayName;

    if (intent === 'Buscar CEP') {
        const cep = req.body.queryResult.parameters.cep;

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;

            if (data.erro) {
                res.json({ fulfillmentText: 'CEP inválido. Por favor, tente novamente.' });
            } else {
                const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                res.json({ fulfillmentText: `Endereço encontrado: ${endereco}` });
            }
        } catch (error) {
            console.error('Erro ao consultar o ViaCEP:', error);
            res.json({ fulfillmentText: 'Houve um erro ao buscar o CEP. Tente novamente mais tarde.' });
        }
    } else {
        res.json({ fulfillmentText: 'Intenção não reconhecida pelo webhook.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

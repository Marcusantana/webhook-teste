const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear o corpo da requisição como JSON
app.use(bodyParser.json());

// Rota para testar o webhook do Dialogflow
app.post('/webhook', (req, res) => {
    // Exibir a requisição recebida
    console.log('Requisição recebida: ', req.body);

    // Verifique o nome da intenção enviada do Dialogflow
    const intent = req.body.queryResult.intent.displayName;

    // Responder ao Dialogflow com base na intenção
    let responseText = 'Desculpe, não entendi sua pergunta.';
    if (intent === 'Teste') {
        responseText = 'Olá! Como posso ajudar?';
    } else if (intent === 'Despedida') {
        responseText = 'Até logo!';
    }

    // Enviar resposta para o Dialogflow
    return res.json({
        fulfillmentText: responseText
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

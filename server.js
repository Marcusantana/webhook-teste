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
    var userQuery = req.body.queryResult.queryText.toLowerCase(); // Correção aqui!

    // Responder ao Dialogflow com base na intenção
    let responseText = 'Desculpe, não entendi sua pergunta.';
    
    if (intent === 'ModelosGuitarras') {
        var valor = 0;

        if (userQuery === ("mayones")) {  //MAYONES
            valor = 12999.99;
            responseText = `Ótimo! Como você não espeficou o modelo o seu intrumento, as guitarras da ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)}`;
        }
        
        else if (userQuery.includes("qatsi") || userQuery.includes("duvell") || userQuery.includes("regius")) {  
            valor = 30999.99;
            responseText = `Bela escolha! A guitarra ${userQuery.toUpperCase()} começa com o valor de: ${formatarMoeda(valor)}`;
        }
            
        else if (userQuery.includes("duvell 6")) {  
            valor = 35999.99;
            responseText = `Bela escolha! A guitarra ${userQuery.toUpperCase()} começa com o valor de: ${formatarMoeda(valor)}`;
        }
            
        else if (userQuery.includes("duvell 7")) {  
            valor = 38999.99;
            responseText = `Bela escolha! A guitarra ${userQuery.toUpperCase()} começa com o valor de: ${formatarMoeda(valor)}`;
        }

         else if (userQuery.includes("duvell 6 dirty") || userQuery.includes("duvell 7 dirty")) {  
            valor = 42999.99;
            responseText = `Bela escolha! A guitarra ${userQuery.toUpperCase()} começa com o valor de: ${formatarMoeda(valor)}`;
        }

        else if (userQuery.includes("custom shop")) {  
            valor = 59999.99;
            responseText = `Bela escolha! A guitarra ${userQuery.toUpperCase()} começa com o valor de: ${formatarMoeda(valor)}`;
        }

        
    } else if (intent === 'Despedida') {
        responseText = 'Até logo!';
    }

    // Enviar resposta para o Dialogflow
    return res.json({ fulfillmentText: responseText });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Função para formatar moeda corretamente
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

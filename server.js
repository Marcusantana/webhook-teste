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
    let responseText = 'Não captei.';
    
    if (intent === 'Modelos') {
        var valor = 0;

        if (userQuery === ("mayones")) {  //MAYONES
            valor = 7921.99;
            responseText = `Ótimo! Como você não especificou o modelo, o seu instrumento, as guitarras da ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("standard"))  {  
            valor = 7921.99;
            responseText = `Lindo! As guitarras da ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }
            

        else if (userQuery.includes("qatsi 7")||userQuery.includes("hydra")) {  
            valor = 21157.99;
            responseText = `Boa escolha! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("legend")) {  
            valor = 13999.99;
            responseText = `Perfeito! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("v2")) {  
            valor = 35999.99;
            responseText = `Ótimo! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("custom shop 7")||userQuery.includes("7 custom shop")) {  
            valor = 38999.99;
            responseText = `Sábia escolha! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }
            
        else if (userQuery.includes("7")) {  
            valor = 19999.99;
            responseText = `Ótimo! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("dirty")) {  
            valor = 26505.99;
            responseText = `Ótimo! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("custom shop")) {  
            valor = 38999.99;
            responseText = `A melhorzinha do momento! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }
        
        else if (userQuery.includes("qatsi") || userQuery.includes("duvell") || userQuery.includes("regius")||userQuery.includes("aquila")) {  
            valor = 14544.99;
            responseText = `Aí sim! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }




        if (userQuery === ("strandberg")) {  //STRANDBERG
            valor = 8614.99;
            responseText = `Ótimo! Como você não especificou o modelo, o seu instrumento, as guitarras da ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("boden standard"))  {  
            valor = 16561.99;
            responseText = `Lindo! As guitarras da ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }
            
        else if (userQuery.includes("boden essencial")) {  
            valor = 8614.99;
            responseText = `Boa escolha! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("boden metal")||userQuery.includes("boden original")) {  
            valor = 18584.99;
            responseText = `Perfeito! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("boden j artisan")|| userQuery.includes("boden artisan")) {  
            valor = 79519.99;
            responseText = `Ótimo! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

        else if (userQuery.includes("boden true temperament")) {  
            valor = 33134.99;
            responseText = `Sábia escolha! As guitarras ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
        }

       else if (userQuery.includes("strandberg boden")) {  
            valor = 8614.99;
            responseText = `Ótimo! Como você não especificou o modelo, o seu instrumento, as guitarras da ${userQuery.toUpperCase()} começam com o valor de: ${formatarMoeda(valor)} \nOs valores dos instrumentos estão sujeitos a alteração com os impostos de importação e as mudanças e upgrades no instrumento (tanto standard e os CUSTOM SHOP).`;
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

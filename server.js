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

    if (intentName == "ModelosGuitarras"){

  var valor = 0;
  
  if (userQuery.toLowerCase()===("mayones qatsi")){
    response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 29.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones qatsi 7")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 32.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones qatsi 8")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 37.999.90"})
  }

  
  else if (userQuery.toLowerCase()===("mayones durvell ")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 39.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones durvell 7")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 42.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones durvell 8")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 47.999.90"})
  }
    
  
  else if (userQuery.toLowerCase()===("mayones regius")){
    response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 39.999.90"})
  }
   else if (userQuery.toLowerCase()===("mayones regius 7")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 42.999.90"})
  }
  else if (userQuery.toLowerCase()===("mayones regius 8")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 47.999.90"})
  }
  
  else if (userQuery.toLowerCase()===("mayones custom shop")){
  response.json({"fulfillmentText" : "Ótimo! As guitarras " +userQuery.toUpperCase()+  " começam com o valor de: " + "\n"+ "R$ 59.999.90"})
  }

  
}  });
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

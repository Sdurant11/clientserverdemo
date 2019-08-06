const express = require('express');
const cors = require('cors');
const server = express();

const foods = [{
    "food": "curry",
    "age": "16"
  },
  {
    "food": "pasta",
    "age": "5"
  }];

const names = [{
    "name": "sam"
  },
  {
    "name": "jae"
  }];


server.use( cors() );

server.get('/favfood', function (request, response) {
  console.log(request);
  response.send(foods);
});

server.get('/names', function (request, response) {
  console.log(request);
  response.send(names);
});

server.listen(3001, function(){
  console.log("carrier has arrived");
});

$(document).ready(startApp);

function startApp(){
  getFoodData();
  getNameData();
}

function getNameData (){
  var settings = {
    url: 'http://localhost:3001/names',
    method: 'get',
    dataType: 'json',
    success: handleNameDataFromServer,
  }
  $.ajax(settings);
}

function getFoodData(){
  var settings = {
    url: 'http://localhost:3001/favfood',
    method: 'get',
    dataType: 'json',
    success: handleFoodDataFromServer
  }
  $.ajax(settings);
}

function handleNameDataFromServer(response){
  for (var index = 0; index<response.length; index++){
    var nameDiv = $('<div>').text(response[index].name);
    $('body').append(nameDiv);
  }
}

function handleFoodDataFromServer(response) {
  for (var index = 0; index < response.length; index++) {
    var foodDiv = $('<div>').text(response[index].name);
    $('body').append(foodDiv);
  }
}

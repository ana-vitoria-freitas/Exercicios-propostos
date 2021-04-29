const fetch = require('node-fetch');

function retornaIngredientes(obj){
    let array = [];

    for(let [key,value] of Object.entries(obj.meals[0])){
        if(value && key.search('strIngredient') != -1){
            array.push(value);
        }
    }

    return array;
}

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then(response => response.json())
.then(data =>{
    console.log(`Nome: ${data.meals[0].strMeal}\n\nID: ${data.meals[0].idMeal}\n\nPaís: ${data.meals[0].strArea}\n\nIngredientes: ${retornaIngredientes(data)}\n\nInstruções: ${data.meals[0].strInstructions}\n\n`);

})




const fetch = require('node-fetch');

function retornaComida(data){

    data.meals.forEach((item, index) => {
        if(index <= 9){
            console.log(item.strMeal);

        }
    });

}

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(response => response.json())
.then(data => retornaComida(data));
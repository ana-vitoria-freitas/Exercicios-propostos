let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

let result = (... array) =>{
    return array.reduce((counter, currentValue) =>{
        return counter + currentValue;
    })
}

console.log(result(...array));

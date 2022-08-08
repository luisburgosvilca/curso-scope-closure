//variables

var a;          //declarando
var b = 'b';    // declarando y asignando
b = 'bb';       //reasignar
var a = 'aa';   // redeclaración


//Global Scope
var fruit = 'Apple'; // global

function bestFruit(){
    console.log(fruit);
}

bestFruit();



function countries(){
    country = 'Colombia'; // Global
    console.log(country);
}

countries();
console.log(country);

//tener mucho cuidado con declarar variables globales
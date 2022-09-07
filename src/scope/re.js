//Reasignación y redeclaración
var firtsName; //Undefined

firstName = 'Luis';
console.log(firstName);

var lastName = 'Burgos'; // declarar / asignar
lastName = 'Burgos Vilca'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando / asignado
var secondName = 'Milagros';
console.log(secondName);

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // Reasignar
console.log(fruit);

let fruit = 'Banana'; //no se puede redeclarar un let
console.log(fruit);


// Const
const animal = 'dog';
animal = 'cat';

const animal = 'snake'; // no se puede redeclarar un const
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop(); //elimina el último elemento
console.log(vehicles);
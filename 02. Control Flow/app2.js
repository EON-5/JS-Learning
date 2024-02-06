/* CONDITION STATEMENTS
Evalue des conditions distinctes
if (condition) {
    function to execute
} else if {
    function to execute
} else {
    last function
}
*/

/* SWITCH STATEMENT 
Evalue une condition une seule fois et la compare au différents cas

let jour = "Lundi";

switch (jour) {
    case "Lundi":
        console.log("C'est lundi !");
        break;
    case "Mardi":
        console.log("C'est mardi !");
        break;
    default:
        console.log("C'est un autre jour de la semaine.");
}
*/

/* LOOPS
for (let index, end_condition on index, index++) {
    function
}

while (condition) {
    function
    decrement
}
*/

/* LOGICAL OPERATORS
and (&&)
or (||)
not (!)
*/

/* ARRAYS METHODES
concat : join two or more arrays into one
include : check if an array contains a specific element
push(elements, array) : adds a new element at the end of the array and returns the new length
unshift : adds a new element at the beggining of the array and returns the new length
shift : removes the first item of an array and returns the array
pop() : removes the last item of the array and returns that item
sort() : sorts the element according to the methode passed as argument, sorts by default alphabetically for strings and acendinglingly for arrays
slice() : selects parts of an array and returns the new array
splice() : removes or replace existing elements and/or adds new elements
join("-") : returns a string made of the elements of the array separated by "-"
k
*/

/* OBJECTS
object = {key : value}
we can access, modifie or add a specific values with obj.key or obj['key']
to delete a data : delete obj.key
*/

/* FUNCTIONS
reusable block of code

function name(parameters) {
    return statement
}
call de la function : name(argument)

Fonction declaration : function name(para) {}

Fonction expression : const name(para) {}
On ne appeler une expression de fonction que après l'avoir écrite

Callback function when the argument is a function : function name(fn) {
    const value = 10;
    fn(value)
}
*/

/* SCOPES
Global scopes variable : can be accessed from everywhere in the code
Local variable : can only be access in a block {}
*/

/* METHODES
const name = {
    key: value;
    fn: function () {
        return ...
    }

A methode is a function associated to an object
}

*/

/* JSON
Used to transmit  between severs or storing data 
{
    "name": value (attention "" obligatoire et pas '')
}
Dans js :
const person = {
  "name": "John",
  "age": 30,
  "hobbies": ["readign", "running"],
  "address": {
    "city": "NY",
    "idk": "true"
  }
}
const jsonPerson = JSON.stringify(person)
const jsPerson = JSON.parse(jsonPerson)
*/

/* DATES
// Générer une date
const date = new Date(year, month, day, hours, min, sec, milli)
const currentDate = new Date()
const specificDate(2024, 2, 24, 18)

// Données de date
const year = currentDate.getFullYear()
const mouth = currentDate.getMonth
console.log(`Year :" ${year}`)

// Formats de date :
date.toDateString()
date.toISOString()
date.toLocalString()

// Utilisation de date
date.setDate(date.getDate() + 1)
*/

/* SETS (auto executions)
setInterval(function() {})
const intervalFunc = setInterval(() => console.log("this function will be executed every 2 secondes"), 2000)

setTimeout(function () {
    console.log("this function will be executed after 3s")
}, 3000)

setTimeout(function () {
    clearinterval(intervalFunc);
    console.log("interval stopped")
})
*/

/* TEMPLATE STRINGS
Features that allow to create strings with embeded expressions.
They are denoted by backtics `` instead of single or double quotes.
It provides a more flexible way to construct strings

console.log(`${function}`)
Allows to use dynamic strings : console.log(`My name is ${person.age}`)
*/

/* ARROW FUNCTIONS
Allows to write sotter functions

function name(para) {
    console.log(`hello ${para}`)
}
Is the same as : 
name = (para) => {
    console.log(`hello ${para}`)
}
If only one parameter and one line : 
name = para => console.log(`hello ${para}`)

To store a arrow function into an expression :
const name = para => console.log(`hello ${para}`)
*/

/* ENHANCE OBJECT LITTERALS (ES6)
function user (name, age) {
    return {
        name: name,
        age, age,
        intro: function () {
            console.log(`My name is ${name}`)
        }
    }
}
Is the same as :
function user (name, age) {
    return {
        name,
        age,
        intro: () => console.log(`My name is ${name}`),
    
    }
}
*/

/* DEFAULT FUNCTION PARAMETERS
When arguments are not provided when calling a function, the default ones are used
function (para = 2, boll = true)
*/

/* SPREAD OPERATORS (...)
Used to make copies of js objects by taking iterable (array, ...) and expanding it to individual elements
const arr = [1, 2, 3]
function name(a, b, c) {
    console.log(a, b, c)
}
name(...arr)

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr = [...arr1, ...arr2]
let arr1Copy = [...arr1]

const obj1 = {x: 1, y: 2}
const obj2 = {z: 3}
const obj = {...obj1, ...obj2, w: 4}
*/

/* REST OPERATOR
allow a function to take an infinite amount of parameters.
It must be written at the end of all the other parameters
function name(para1, para2, ...para) {
    console(para)
}

*/

/* DESTRUCTURING
Allows to unpack values from arrays or objects into distinct variable
const arr = [1, 2, 3, 4]
const [a, b] = arr => a=1, b=2;
const [a, b, , d=0, e=0] = arr => a=1, b=2, d=4, e=0;

const obj = {k1: val1, k2: val2}
const {k1} = obj => k1=val1, le paramètre de destructuration doit être la key
It is possible to rename a variable this way : 
const {k1: newName} = obj

rest operator can also be used this way :
let {k1, ...rest} = obj

nested destructuring : const {keyobj: {key1, key2}}
*/

/* TERCIARY CONDITION
let name = () => condition ? true : false

For in loop :
for (let key in obj) {} allow to iterate through the keys of an object
for (let index in arr) {}

For of loop :
for (let value in arr/obj/str/)
*/

/*ITERABLE METHODES
forEach() methode allows to iterate through an array and execute a function for each element and returns nothing
map() methode allows to pass every element of an array through a function and returns an other array
filter() allows to filter the element of an array thanks to a function
find() methode return the first element that satisfy a condition
every() and some() return true if every or some elements satisfy a condition
reduce((accumulator, current_value) => el + current_value, Val_ini) allows to execute a function for every elements of an array an return a single value
*/

ages = [2, 3, 4];

console.log(ages.reduce((prev, current) => current * prev, 2));

/* Map
Built-in data structure that allows to store key-value pairs. It is a constructor.
It is similar to objects except that the keys can be of any data type.
It maintains the insertion order.
C'est une sorte d'objet amélioré
Provides built-in iteration methods.

const map = new Map()

const key1 = "string";
const key2 = function;
const key3 = {};

map.set(key1, "value1")
map.set(key2, "value2");
map.set(key3, "value3");

map.get(key1) donne la value de la key1

map.keys() donne les keys 
map.values() donne les values
map.delete(key) supprime la clé de map
map.size donne la taille

on itère dans une map de la façon suivante:
for (let [key, value] of map) {
    console.log(`${key} ${value}`)
}

for (let key of map.keys())
for (let value of map.values()

*/

/* Set
Built-in data structure than represent a collection of unique values.
Its an array that automatically delete duplicated values.
It goes with quick checkers built-in methods.

initial_values = [1, 2, 2, 2, 3]
const myset = new Set(initial_values) crée un nouveau set qui contient [1, 2, 3]

myset.add(value)
myset.has(value) renvoie un booleen selon l'existence de la value dans le set
myset.delete(value)
myset.clear() supprime tout les éléments du set

for (let item of myset) {}

*/

/* Symbols 
Unique and immutable data that can't be changed or recreated.
It avoids collinding with other property names even if they have the same string representation
They are used as identifier for objects properties
const mysymbol = Symbol("My custom symbol")

const key = Symbol("keyName")

const obj = {}
obj[key] = "value"

*/

/* DOM (Document Object Model)
When a page is loaded, the browser creates à DOM for the page.

*/

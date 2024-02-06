/* ************ DOM SELECTORS ************
Document Object Model

// 1. getElementsByTagName
// console.log(document.getElementsByTagName("h1"));

// 2. getElementById
//console.log(document.getElementById("main"));

// 3. getElementsByClassName
// console.log(document.getElementsByClassName("cls"));

// 4. querySelector
select the first found
document.querySelector("h1");
titles : h1
classe : .cls
id : #id


// 5. querySelectorAll
// Same as the previous but select all of the selector found

// ---------------------------------------
// Storing data in variables
// const h1 = document.querySelector(h1)
// console.log(h1)
*/

/* innerText
const p = document.querySelector('p')
console.log(p.innerText) donne le texte pur contenu dans un element
console.log(p.textContent) donne le contenu textuel pas formaté
console.log(innerHTML) donne tout le contenu de l'élément

p.innerText = "blabla" modifie le text contenu dans l'élément.
*/

/* Classlist
const element = document.querySelector()

element.classList donne toute les classes appliquées à un élément
element.classList.add("newClass") ajoute une classe à un élément
element.classList.remove("classToRemove") retire une classe d'un élément
element.classList.toggle("classe") retire la classe si elle existe et l'ajoute si elle n'existe pas
*/

/* Getting and Setting attributes

// Getting attributes
const a = document.querySelector("a");
console.log(a.href) permet d'accéder à l'attribut href

const input = document.querySelector("input");
console.log(input.value)

input.getAttribute("type")


// Settings attributes
input.value = "value"
input.placeholder = lqjfqdm

input.setAttribute(attrName = "placeholder", value = "onrpznr")
*/

/* Siblings 
const a = document.querySelector('a')
const aParent = a.parentElement
const parentOfParent = a.parentElement.parentElement
Renvoie null si l'élément n'a pas de parent

Same is for children : .children

a.nextElementSibling donne accès à l'élément après a de même type (donc le prochain élément anchor)
a.nextElementSibling.nextElementSibling ...

Same goes for : a.previousElementSibling
*/

/* Styles
a.style donne le style appliqué à l'élément a
a.style.color = "teal"
a.style.backgroundColor = "grey"
*/

/* Creating and appening elements to the DOM
const h1 = document.createElement("h1") permet de créer un élément h1 vide
h1.textContent = "some text" ajoute du texte dans l'élément
h1.classList.add("greetings") ajoute une classe

const body = document.body
body.appendChild("h1") ajout le titre h1 à la fin de l'élément body
insertBefore(what, where) : body.insertBefore(h1, a) ajoute h1 dans le body avant a

body.insertAdjacentElement("beforebegin/afterbegin/beforeend/afterend", a) ajoute l'élément a dans body à la position souhaitée

body.append(a) ajoute a à la fin de body
body.prepend(a, input) ajoute a et input au début de body

body.removeChild(a) supprime a de body
a.remove() supprime a
*/

/* Events
There can be different type of event on a page (loading, updating, user interaction,...)
HTML (A NE PAS UTILISER) : 
<button onclick="alert("not working")">Click me</button>" crée un évènement en html 

BAD WAY TO USE
const btn = document.querySelector("button")
btn.onclick = function() {
    console.log("button clicked");
}

BEST WAY TO USE
btn.addEventListener("click", function() {
    console.log("Hello world")
})

Event Object :
dans l'exemple précédent, la fonction peut contenir un paramètre associé à l'event
function(event) {
    event.preventDefault()
    console.log(event)
}
*/

/* DOM Event 
A explorer
click, dblclick, mousedown (mousebutton), mouseenter, ... 

Usefull properties and methods:
event.charCode
event.code
event.ctrlkey (true or false if ctrl is pressed)

*/

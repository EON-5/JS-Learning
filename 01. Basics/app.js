// I VARIABLES
/*
varible = reserved keyword + name + type of value

keyword : var (never used) / let (editable) / const (not editable)

Le nom d'une variable ne peut pas être un mot clé, ne peut pas commencer par un chiffre et ne peut pas contenir -. Les noms de variable sont par convention écrit en chamel case.
*/

let name = "Nono";
let whatDoYouWantToBecomeWithYourLife = "I have no clue at all";
let gender = "male";

console.log(
  "My name is",
  name,
  whatDoYouWantToBecomeWithYourLife,
  "I am a ",
  gender
);

// II PRIMITIVE TYPES
// numbers
// booleans (flasy values (false, null, undefined, 0, -0, NaN, '', "", ``) / true (else) / Nam= Not a Number)
// Comparison operators (=== : "type + value", !== : "type + value", == "value", != : "value")
// Strings ("", '', ``) / methodes : firstName.concat(secondName) ajoute un espace entre les strings, string.length, string.toLower/UpperCase(), string.slice(start, end-excluded), string.split(splitter: '') : return an array, array.join(separator : ' '), string.includes('') : return boolean, string.trim() : surpprime les espaces au début et à la fin
let firstName = "Coco";
let secondName = "channel";
let fullName = `My full name is ${firstName} ${secondName}`;
console.log(fullName);

// Convert string to number : num = parseInt(str) ou num = Number(money) ou num = parseFloat(str)
// Convert number to string : str = num.toString() ou  str = String(num)

// La différence entre null et undefined est que null peut être imposer à une variable par le programmer alors que undefined l'est par la console
// Pour afficher le type d'une variable, on utilise typeof(variable)

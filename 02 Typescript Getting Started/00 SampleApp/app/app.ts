const name = 'Sivaprabu Ganesan';
console.log(name);

function startGame() {
    // Starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to Game !'
    console.log('Welcome to Game');
}
document.getElementById('startGame').addEventListener("click", startGame);

var a = "Sivaprabu";
console.log(a);
//console.log(b);

//console.log(someString);
let someString = 'Hello World';
console.log(someString);

var x: string = 'I will forever be a string.';
console.log(x);
x = 42;
console.log(x);

var y = 'I will forever be a string.';
console.log(y);
y = 42;
console.log(y);

function getSomeValue() {
    var myName: string = 'Siva';
    return myName;
}

let z:number = getSomeValue();
console.log(z);
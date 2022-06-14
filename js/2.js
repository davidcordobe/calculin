//DOM 

function login() {

let nombre = document.getElementById('nombre').value;
let password = document.getElementById('password').value;

if (nombre == "" || password == "") {
    alert(`ingresa los datos`)
}else{
    window.location = "../pages/sistema.html"
}

console.log(nombre);
console.log(password);

formulario.reset();

}

//scape = Alcance de las variables

console.log(`Mi nombre es: ${nombre} y mi password es: ${password}`);


//FUNCIONES

function Sumar (num1, num2) {
    let resultado = num1 + num2
    console.log(`el resultado es: ${resultado}`);
}

Sumar(10, 20);
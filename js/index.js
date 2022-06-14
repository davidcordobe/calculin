let edad = 19;

if (edad >= 18){
    console.log('podes entrar');
    //alert('podes entrar')
}else{
    console.log('no podes entrar');
    //alert('no podes entrar')
}

let usuario = prompt('nombre de usuario');
let pass = prompt('password');

console.log(usuario);
console.log(pass);


if (usuario == 'user' || pass == '123456') {
    console.log('bienvenido ' + usuario);
    window.location = "../pages/sistema.html"
}else{
    console.log('usuario incorecto');
    //alert('usuario y password incorrectos')
    window.location = "../pages/error.html"
}
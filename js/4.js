function suma() {
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('r').innerHTML = x + y;
};
function resta() {
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('r').innerHTML = x - y;
};
function multiplicacion() {
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('r').innerHTML = x * y;
};
function division() {
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('r').innerHTML = x / y;
};
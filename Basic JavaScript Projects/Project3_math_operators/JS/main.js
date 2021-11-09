//codigo de una funcion matematica (suma)
function Function_suma() {
    var suma = 4 + 5;
    document.getElementById("Math").innerHTML = "4 + 5 = " + suma; 
}

//codigo de una funcion matematica (resta)
function Function_resta() {
    var resta = 9 - 5;
    document.getElementById("Math2").innerHTML = "9 - 5 = " + resta; 
}

//codigo de una funcion matematica (multiplicacion)
function Function_multi() {
    var multi = 4 * 5;
    document.getElementById("Math3").innerHTML = "4 * 5 = " + multi; 
}

//codigo de una funcion matematica (division)
function Function_divi() {
    var divi = 20 / 5;
    document.getElementById("Math4").innerHTML = "20/5 = " + divi; 
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 + 2, multiplicado por 10, dividido entre 2 menos 5  es igual a = " + simple_Math;
    
}

function modulus() {
    var simple_Math2 = 25 % 6 ;
    document.getElementById("Math6").innerHTML = "el resto cuando divides 25 entre 6 es  " + simple_Math2;
    
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}
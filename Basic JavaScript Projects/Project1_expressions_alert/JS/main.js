// variables
var A = "Manuel dijo: \"porque no me sale este ejemplo?\"" + "<br>no lo s\u00E9 t\u00FA dime."
document.write(A); // escribe lo que hay en la variable
//poner varias variables
var partners = "Curso Portland", chief = "\*\* Tapia", developer1 = "\* Cruz Santiago", girl = "Mayra";
//para establecer el color de la fuente de una variable en especifico
var girl = girl.fontcolor("darkpink");
var partners = partners.fontcolor("olivegreen");
var chief = chief.fontcolor("celestblue");
var developer1 = developer1.fontcolor("beige");
//una concatenacion texto mas una variable (concatenar)
document.write("by " + girl + "<br> ");
// imprimir todas las variables con su color en cada una 
document.write("<br> " + partners + "<br> " + chief + "<br> " + developer1 + "<br> " + girl + "<br> ");
//imprimir una expresion (una expresion matematica)
document.write(3 + 3);
document.write("<br>");
//codigo de una funcion (para que con un boton hacer que aparezca texto con un color preestablecido)
function My_first_function() { //aqui se define la funcion y el nombre de la misma
    var str = "Este texto es verde"; //aqui se define la variable y se le da un valor a la cadena
    var result = str.fontcolor("green"); //se usa el metodo foncolor en la variable
    document.getElementById("Green_Text").innerHTML = result; //mandamos pedir se imprima el valor del resultado del elemento con el id
}
document.write("<br>");
//metodo window alert para que salga un aviso emergente
window.alert('hasta aqui los ejemplos de javascript');
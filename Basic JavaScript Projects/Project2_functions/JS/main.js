//codigo de una funcion (para que con un boton hacer que aparezca texto con un color preestablecido)
function My_first_function() { //aqui se define la funcion y el nombre de la misma
    var str = "Este texto es verde"; //aqui se define la variable y se le da un valor a la cadena
    var result = str.fontcolor("green"); //se usa el metodo foncolor en la variable
    document.getElementById("Green_Text").innerHTML = result; //mandamos pedir se imprima el valor del resultado del elemento con el id
}
function Function_Name() {
    var sentence = "yo soy";
    sentence += " Manuel Bejarano";
    document.getElementById("nombre").innerHTML = sentence;
}

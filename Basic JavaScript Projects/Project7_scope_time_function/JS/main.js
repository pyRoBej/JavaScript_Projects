//variables globales y locales
//Variable global
var X = 10;
function add_numbers1() {
    document.write(20 + X + "<br>");
}
function add_numbers2() {
    document.write(X + 100 + "<br>");
}
add_numbers1();
add_numbers2();

//Variable local
function add_numbers3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function add_numbers4() {
    document.write(Y + 100);
}
add_numbers3();
add_numbers4();

// declaraciones If
function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
 // function ontener_edad() {
 //   if (new Date().getHours() < 12) {
 //       document.getElementById("Horario").innerHTML = "es horario matutino";
 //   }
// }

function obtener_edad() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "you are old enough to vote";
    }
    else {
        Vote = "you are NOT old to vote"
    }
    document.getElementById("Edad").innerHTML = Vote;
}

function timeFunct() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "it is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon";
    }
        else {
            Reply = "it is evening time";
        }
        document.getElementById("horario").innerHTML = Reply;
}

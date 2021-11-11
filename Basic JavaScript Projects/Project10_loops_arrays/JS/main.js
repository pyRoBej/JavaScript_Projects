//bucle while
function call_loop() {
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = digit;
}
// bucle for
var instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet","flute"];
var content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_intruments").innerHTML = content;
}

// Matrices
function cat_pics() {
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    cat_picture[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_picture[2] + ".";
}

//uso de let
let car = {
    make: "dodge ",
    model: "viper ",
    year: "2021 ",
    description : function() {
        return "the car is a " + this.year + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();
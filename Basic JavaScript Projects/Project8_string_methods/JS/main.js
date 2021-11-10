//metodo concat
function full_sentence() {
    var part1 = "i have ";
    var part2 = "made this ";
    var part3 = "into a complete sentence.";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("concat").innerHTML = whole_sentence;
}
// metodo slice
function slice_method() {
    var sentence = "All work and no play makes Jhony a dull boy";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}

// metodo string
function string_method() {
    var X =182;
    document.getElementById("numbers_to_string").innerHTML = X.toString();
}

//metodo precision
function precision_method() {
    var X = 12938.30129;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}
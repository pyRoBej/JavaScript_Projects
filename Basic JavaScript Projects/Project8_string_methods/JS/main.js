//metodo concat
function full_sentence() {
    var part1 = "i have ";
    var part2 = "made this ";
    var part3 = "into a complete sentence.";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("concat").innerHTML = whole_sentence;
}
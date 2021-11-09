//codigo de una funcion para hacer un diccionario (clave-valor)
function my_Dictionary() {
    var partners = {
        roble: "Tte. Cor. Roblero",
        tapia: "Tte. Cor. Tapia",
        cap1: "Cap. Ubaldo",
        cap2: "Cap. Engels",
        cap3: "Cap. Aldeco",
        cap4: "Cap. Bejarano",
        tte1: "Tte. Cortes",
        tte2: "Tte. Mayra",
    };
    delete partners.tte2
    document.getElementById("Dictionary").innerHTML = partners.tte2;
}

function logicBol() {
    document.getElementById("Example1").innerHTML = (10 > 2);
}

function logicBol2() {
    document.getElementById("Example2").innerHTML = (10 < 2);
}

function logicBol3() {
    document.getElementById("Example3").innerHTML = (10 == 10);
}

function signosIgual1() {
    var X = 10;
    var Y = 10;
    document.getElementById("example1").innerHTML = (X === Y);
}

function signosIgual2() {
    var X = 10;
    var Y = "11";
    document.getElementById("example2").innerHTML = (X === Y);
}

function signosIgual3() {
    var X = 10;
    var Y = "10";
    document.getElementById("example3").innerHTML = (X === Y);
}

function signosIgual4() {
    var X = "Bejarano";
    var Y = "bejarano";
    document.getElementById("example4").innerHTML = (X === Y);
}

function oper_log1() {
        document.getElementById("ejemplo1").innerHTML = (5 > 2 && 10 > 4);
}

function oper_log2() {
    document.getElementById("ejemplo2").innerHTML = (5 > 10 && 10 > 4);
}

function oper_log3() {
    document.getElementById("ejemplo3").innerHTML = (5 > 10 || 10 > 4);
}

function oper_log4() {
    document.getElementById("ejemplo4").innerHTML = (5 > 10 || 10 > 20);
}

function oper_log5() {
    document.getElementById("ejemplo5").innerHTML = !(5 > 10);
}

function oper_log6() {
    document.getElementById("ejemplo6").innerHTML = !(20 > 10);
}
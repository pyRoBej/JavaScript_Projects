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
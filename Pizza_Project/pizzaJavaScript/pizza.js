function getReceipt(){
    // esto inicializa nuestra cadena para que pueda pasar de
// función para funcionar creciendo línea por línea en un recibo completo
    var text1 = "<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1+ selectedSize+"<br>";
        }
    }
    if (selectedSize === "Filius Flitwick") {
        sizeTotal = 6;
    } else if (selectedSize === "Hermione Granger") {
        sizeTotal = 8;
    } else if (selectedSize === "Lord Voldemort") {
        sizeTotal = 10;
    } else if (selectedSize === "Albus dumbledore") {
        sizeTotal = 14;
    } else if (selectedSize === "Rubeus Hagrig") {
        sizeTotal = 20;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+ sizeTotal+".00");
    console.log("size text1: " + text1);    
    console.log("subtotal: $"+runningTotal+ ".00");
    // estas variables se pasarán a cada función
    getTopping(runningTotal, text1);
    };
    
    function getTopping(runningTotal, text1){
        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");
        for (var j = 0; j< toppingArray.length; j++){
            if ( toppingArray[j].checked){
                selectedTopping.push(toppingArray[j].value);
                console.log("selected topping item: ("+toppingArray[j].value+")");
                text1 = text1+toppingArray[j].value+"<br>";
            }
        }
        var toppingCount = selectedTopping.length;
        if (toppingCount > 1 ) {
            toppingTotal = (toppingCount - 1);
        } else {
            toppingTotal = 0;
        }
        runningTotal = (runningTotal + toppingTotal);
        console.log("total selected topping items: "+toppingCount);
        console.log(toppingCount+ "topping - 1 free topping = "+"$"+toppingTotal+".00");
        console.log("topping text1: "+text1);
        console.log("purchase total: "+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
    }; 

    function getReceipt2(){
        // esto inicializa nuestra cadena para que pueda pasar de
    // función para funcionar creciendo línea por línea en un recibo completo
        var text1 = "<h3> You Ordered:</h3>";
        var runningTotal = 0;
        var sizeTotal = 0;
        var sizeArray = document.getElementsByClassName("size");
        for (var i = 0; i < sizeArray.length; i++) {
            if (sizeArray[i].checked){
                var selectedSize = sizeArray[i].value;
                text1 = text1+ selectedSize+"<br>";
            }
        }
        if (selectedSize === "Filius Flitwick") {
            sizeTotal = 6;
        } else if (selectedSize === "Hermione Granger") {
            sizeTotal = 8;
        } else if (selectedSize === "Lord Voldemort") {
            sizeTotal = 10;
        } else if (selectedSize === "Albus dumbledore") {
            sizeTotal = 14;
        } else if (selectedSize === "Rubeus Hagrig") {
            sizeTotal = 20;
        }
        runningTotal = sizeTotal;
        console.log(selectedSize+" = $"+ sizeTotal+".00");
        console.log("size text1: " + text1);    
        console.log("subtotal: $"+runningTotal+ ".00");
        // estas variables se pasarán a cada función
        getTopping(runningTotal, text1);
        };
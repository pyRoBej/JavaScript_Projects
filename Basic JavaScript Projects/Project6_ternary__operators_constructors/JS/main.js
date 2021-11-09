//Operadores ternarios
function Ride_funct() {
    var Height, Can_ride; 
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"yo are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";  
}

function Ride_funct2() {
    var Edad, Puede_votar; 
    Edad = document.getElementById("Edad").value;
    Puede_votar = (Edad > 18) ? "Usted tiene la edad suficiente":"NO tiene la edad suficiente";
    document.getElementById("votante").innerHTML = Puede_votar + "para votar";  
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "red");
var Emily = new Vehicle("Jeep", "Trail", 2019, "white");
var Erick = new Vehicle("Ford", "Pinto", 1971, "mustard");
function myFunct() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Erick drives in a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year;    
}

function count_Funct() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }    
}
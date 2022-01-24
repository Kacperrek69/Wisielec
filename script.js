var znak ="";
zp1 = false;
var blad = 0;
var punkt = 0;


var hasla = ["drzewo", "kamień", "las", "siedem", "samochod", "klawiatura", "sufit", "jabłoń", "droga", "serce", "lampa", "myszka", "serwer", "język", "reklama", "synonim", "kość", "chrząszcz", "grupa", "sportowiec", "rzut", "pchnięcie", "pies", "kot", "delfin", "programowanie", "informatyka", "matematyka", "plastyka", "sala", "audycja", "szubienica", "wisielec", "autobus", "arena", "piętro", "winda", "kółko", "sójka", "pustułka", "spacja", "wydra", "pieprz", "sól", "talerz", "psychologia", "bal"]


var haslo = hasla[Math.floor(Math.random()*hasla.length)].toUpperCase();

var l_haslo = [];



var p1 = document.getElementById("p1");
var newPole = [];

for(var i = 0; i < haslo.length; i++){
    newPole[i] = document.createTextNode("-");
    p1.appendChild(newPole[i]);

    l_haslo.push(haslo[i]);
}

used_znak = [];

setInterval(() => {
    if(zp1 == true){
        for(var i = 0; i < used_znak.length; i++){
            if(znak == used_znak[i]){
                znak = "0";
            }
        }
        if(znak !== "0"){
            used_znak.push(znak);
        }


        if(haslo.includes(znak)){

            for(var i = 0; i < l_haslo.length; i++){
                if(l_haslo[i] == znak){
                    newPole[i].textContent = znak;
                    punkt += 1;
                }
            };


            if(punkt >= haslo.length){
                var okno = document.createElement('div');
                document.body.appendChild(okno);

                okno.setAttribute("id", "okno_d");
                okno.innerHTML = "<h1>Wygrałeś</h1><h3 style='font-size:1vw; margin-bottom: 5%;'>Poprawne hasło: " + haslo + "</h3><button onclick='window.location.reload(true);'>Restart</button>";
            }
            
        }
        else{
            blad += 1;

            document.getElementById("p2").innerHTML = "<img src='img/img" + (blad + 1) + ".gif'>"

            if(blad == 8){
                var okno = document.createElement('div');
                document.body.appendChild(okno);

                okno.setAttribute("id", "okno_d");
                okno.innerHTML = "<h1>Przegrałeś</h1><h3 style='font-size:1vw; margin-bottom: 5%;'>Poprawne hasło: " + haslo + "</h3><button onclick='window.location.reload(true);'>Restart</button>";
            }
        }

        zp1 = false;
    }
}, 10);









document.getElementById("b1").addEventListener('click', function () { znak = "A"; zp1 = true; },);
document.getElementById("b2").addEventListener('click', function () { znak = "Ą"; zp1 = true; },);
document.getElementById("b3").addEventListener('click', function () { znak = "B"; zp1 = true; },);
document.getElementById("b4").addEventListener('click', function () { znak = "C"; zp1 = true; },);
document.getElementById("b5").addEventListener('click', function () { znak = "Ć"; zp1 = true; },);
document.getElementById("b6").addEventListener('click', function () { znak = "D"; zp1 = true; },);
document.getElementById("b7").addEventListener('click', function () { znak = "E"; zp1 = true; },);
document.getElementById("b8").addEventListener('click', function () { znak = "Ę"; zp1 = true; },);
document.getElementById("b9").addEventListener('click', function () { znak = "F"; zp1 = true; },);
document.getElementById("b10").addEventListener('click', function () { znak = "G"; zp1 = true; },);
document.getElementById("b11").addEventListener('click', function () { znak = "H"; zp1 = true; },);
document.getElementById("b12").addEventListener('click', function () { znak = "I"; zp1 = true; },);
document.getElementById("b13").addEventListener('click', function () { znak = "J"; zp1 = true; },);
document.getElementById("b14").addEventListener('click', function () { znak = "K"; zp1 = true; },);
document.getElementById("b15").addEventListener('click', function () { znak = "L"; zp1 = true; },);
document.getElementById("b16").addEventListener('click', function () { znak = "Ł"; zp1 = true; },);
document.getElementById("b17").addEventListener('click', function () { znak = "M"; zp1 = true; },);
document.getElementById("b18").addEventListener('click', function () { znak = "N"; zp1 = true; },);
document.getElementById("b19").addEventListener('click', function () { znak = "Ń"; zp1 = true; },);
document.getElementById("b20").addEventListener('click', function () { znak = "O"; zp1 = true; },);
document.getElementById("b21").addEventListener('click', function () { znak = "Ó"; zp1 = true; },);
document.getElementById("b22").addEventListener('click', function () { znak = "P"; zp1 = true; },);
document.getElementById("b23").addEventListener('click', function () { znak = "Q"; zp1 = true; },);
document.getElementById("b24").addEventListener('click', function () { znak = "R"; zp1 = true; },);
document.getElementById("b25").addEventListener('click', function () { znak = "S"; zp1 = true; },);
document.getElementById("b26").addEventListener('click', function () { znak = "Ś"; zp1 = true; },);
document.getElementById("b27").addEventListener('click', function () { znak = "T"; zp1 = true; },);
document.getElementById("b28").addEventListener('click', function () { znak = "U"; zp1 = true; },);
document.getElementById("b29").addEventListener('click', function () { znak = "W"; zp1 = true; },);
document.getElementById("b30").addEventListener('click', function () { znak = "Y"; zp1 = true; },);
document.getElementById("b31").addEventListener('click', function () { znak = "Z"; zp1 = true; },);
document.getElementById("b32").addEventListener('click', function () { znak = "Ż"; zp1 = true; },);
document.getElementById("b33").addEventListener('click', function () { znak = "Ź"; zp1 = true; },);

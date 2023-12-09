console.log('test')
function showEkwipunek(){
    console.log('przycisk')
}

function  showEkwipunek(){
    let window_content = document.getElementById("EKWIPUNEK");
    window_content.classList.toggle("show");
}


const arr = ["nazwa","opis","działanie","typ","waga"]

function dodajwiersz(tabelka) {
    tabelka = document.getElementById("tabelka");
    var NowyWiersz = tabelka.insertRow();
       komórka1 = NowyWiersz.insertCell(0);
       komórka2 = NowyWiersz.insertCell(1);
       komórka3 = NowyWiersz.insertCell(2);
       komórka4 = NowyWiersz.insertCell(3);
       komórka5 = NowyWiersz.insertCell(4);    
    }

var tr = require('tr');

function usunwiersz1(tabelka) {
    tabelka = document.getElementById("tabelka");
    var Usunwiersz = document.remove('tr');
    komórka1 = Usunwiersz.removeCell(0);
    komórka2 = Usunwiersz.removeCell(1);
    komórka3 = Usunwiersz.removeCell(2);
    komórka4 = Usunwiersz.removeCell(3);
    komórka5 = Usunwiersz.removeCell(4);
}



console.log('test')
function showEkwipunek(){
    console.log('przycisk')
}

function  showEkwipunek(){
    let window_content = document.getElementById("EKWIPUNEK");
    window_content.classList.toggle("show");
}


const arr = ["Nazwa","Opis","Działanie","Typ","Waga"]

function dodajwiersz() {
    tabelka = document.getElementById("tabelka");
    var NowyWiersz = tabelka.insertRow();
       komórka1 = NowyWiersz.insertCell(0);
       komórka1 = document.createAttribute('Nazwa');
       komórka2 = NowyWiersz.insertCell(1);
       komórka2 = document.createAttribute('Opis');
       komórka3 = NowyWiersz.insertCell(2);
       komórka3 = document.createAttribute('Działanie');
       komórka4 = NowyWiersz.insertCell(3);
       komórka4 = document.createAttribute('Typ');
       komórka5 = NowyWiersz.insertCell(4);  
       komórka5 = document.createAttribute('Waga');  
    }

function usunwiersz1() {
    if (NowyWiersz) {
        "tabelka" - "Nazwa" - "Opis" - "Działanie" - "typ" - "waga"
    }
    else{
        null
    }
}
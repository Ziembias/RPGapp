console.log('test')
function showEkwipunek(){
    console.log('przycisk')
}

function  showEkwipunek(){
    let window_content = document.getElementById("EKWIPUNEK");
    window_content.classList.toggle("show");
}


const arr = ["Nazwa","Opis","Działanie","Typ","Waga"]
let jestTrybUsuwania = false

let tableRows = document.querySelectorAll('#tabelka tr')

for(let row of tableRows){
    row.addEventListener('click', usunwiersz);
}


function dodajwiersz() {
    tabelka = document.getElementById("tabelka");
    tabelka2 = document.getElementById('dodanieprzedmiotu');   
    tabelka.style.display = tabelka.style.display == "none" ? 'block' : 'none' ;
    tabelka2.style.display = tabelka2.style.display == "block" ? 'none' : 'block' ;
    // let NowyWiersz = tabelka.insertRow();
    // for(let i = 0; i < 6; i++){
    //     NowyWiersz.insertCell(i)
    // }
    // NowyWiersz.addEventListener('click', usunwiersz);
}

function przedmiotevent(event) {
    tabelka2 = document.getElementById('dodanieprzedmiotu');
    if(tabelka2.style.display == "block") return 
    // event.currentTarget.
}

function usunwiersz(event) {
    if(!jestTrybUsuwania) return
    event.currentTarget.remove()
}


function zmianaTrybuUsuwania(){
    jestTrybUsuwania = !jestTrybUsuwania;
    document.getElementsByTagName("tr");
    let borders = document.getElementsByTagName("td");
    console.log(borders)
    for(let border of borders ) {
        console.log(border)
        border.style.borderColor = jestTrybUsuwania ? "red" : "Black";
    }
}

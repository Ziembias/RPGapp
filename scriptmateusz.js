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

let tableRows = document.getElementsByTagName('tr')

for(let row of tableRows){
    row.addEventListener('click', usunwiersz);
}


function dodajwiersz() {
    tabelka = document.getElementById("tabelka");
    let NowyWiersz = tabelka.insertRow();
    for(let i = 0; i < 6; i++){
        NowyWiersz.insertCell(i)
    }
    NowyWiersz.addEventListener('click', usunwiersz);
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

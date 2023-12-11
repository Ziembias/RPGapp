function showClassChangePopup(){
    document.getElementById('classChangePopup').classList.toggle('show');
}

function saveClassChange(){
    let temp = document.getElementById('selectSecondaryClassChoice')

    if(!temp.value) {temp.style.borderColor = 'red'; return;}

    temp.style.borderColor = 'black';
    showClassChangePopup();
}

function handleRollUpClick(rollUpId){
    document.getElementById(rollUpId).classList.toggle('show');
}

function handleClassOptionSelect(selectedOption){
    document.getElementsByClassName('classOptionBox-selected')[0]?.classList.remove('classOptionBox-selected')
    selectedOption.classList.add('classOptionBox-selected')

    document.getElementById('classInfoHolder').innerText = 'Lorem Ipsum'
}






let listaUmiejetnosci = [
    { name: 'listwa starego', damage: 'instaKill', type: 'Brutality', cooldown: 3},
    { name: 'luj ogłuszacz', damage: '2k8', type: 'ogłusza no', cooldown: 1},
    { name: 'sratatat', damage: '3k4', type: 'tatatatarsa', cooldown: 10}
]
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
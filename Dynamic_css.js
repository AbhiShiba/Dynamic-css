const coloerBox = document.querySelector('#colorbox');
const colorButton = document.querySelector('#changeColor');
const text = document.querySelector('#text-container');
colorButton.addEventListener('click',Change);

function Change(){
    const textColor = coloerBox.value;
    text.style.color = `#${textColor}`;
}

const bold = document.querySelector('#bold');
bold.addEventListener('click',boldText);
let clickedBold = true;

function boldText() {
    if(clickedBold == true){
    text.style.fontWeight = 'bold';
    clickedBold = false;
    }
    else{
        text.style.fontWeight = 'normal';
        clickedBold = true; 
    }
}

const italic = document.querySelector('#italics');
italic.addEventListener('click', italicText);
let clickeditalic = true;

function  italicText() {
    if(clickeditalic == true){
    text.style.fontStyle = 'italic';
    clickeditalic = false;
    }
    else{
        text.style.fontStyle = 'normal';
        clickeditalic = true; 
    }
}

const underline = document.querySelector('#underline');
underline.addEventListener('click', underlineText);
let clickedUnderline = true;

function  underlineText() {
    if(clickedUnderline == true){
    text.style.textDecoration = 'underline';
    clickedUnderline = false;
    }
    else{
        text.style.textDecoration = 'initial';
        clickedUnderline = true; 
    }
}

const size = document.querySelector('#range');
size.addEventListener('change',changeSize);

function changeSize() {
    const sizeValue = size.value;
    text.style.fontSize = `${sizeValue}px`;
}

const family = document.querySelector('#families');

family.addEventListener('change',changeFamily);

function changeFamily() {
    familyName = family.value;
    text.style.fontFamily = `${familyName}`;
}

const copyButton = document.querySelector('#stylebt');

copyButton.addEventListener('click',copyProperty)

function copyProperty() {
    const copied = text.style;
    console.log(copied);
}
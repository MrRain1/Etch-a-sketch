const DEFAULT_COLUMNSIZE = 16;
const DEFAULT_MODE = "simple";
const SIMPLE_MODE = "simple";
const RANDOM_MODE = "random";
const EREASE_MODE = "erease";

let num=DEFAULT_COLUMNSIZE;
let settedMode = DEFAULT_MODE;

const container = document.querySelector(`.grid-container`);
const clearButton = document.querySelector(`.clearGrid`);
const generateButton = document.querySelector(`.gridGen`);
const randomButton = document.querySelector(`.randomMode`);
const simpleButton = document.querySelector(`.simpleMode`);
const ereaseButton = document.querySelector(`.ereaseMode`);


//initialize the nodelist to attach the eventlisteners
let gridElements = document.querySelectorAll(".gridElement");

//generate the default grid
generateGrid(DEFAULT_COLUMNSIZE**2, DEFAULT_MODE);

//add Event listeners to buttons
clearButton.addEventListener('click', function(){ clearGrid(num**2, settedMode); });
generateButton.addEventListener('click', function(){ textInputCheck(); });
randomButton.addEventListener('click', setMode);
simpleButton.addEventListener('click', setMode);
ereaseButton.addEventListener('click', setMode);

function generateGrid(size, mode){
    let colNumAuto = "";
    
    for(let count = 0; count < size; count++){

        //set the grid column number in a string variable
        if(count < size**(1/2)){
            colNumAuto += "auto ";
        }
        
        const gridElement = document.createElement(`div`);
        container.appendChild(gridElement);
        gridElement.classList.toggle("gridElement");
    }
    
    //set the grid column number in the CSS(inline)
    container.style["grid-template-columns"] = colNumAuto;

    //Call function to link the listener to the cells
    attachListener(mode);
}

function clearGrid(size, mode){
    let colNumAuto = "";

    while(container.childElementCount>0){
        const gridElement = document.querySelector(`.gridElement`);
        container.removeChild(gridElement);
    }
    
    container.style["grid-template-columns"] = colNumAuto;

    generateGrid(size, mode);
}

//function to toggle the css change
function onOver(cellElement, mode){
    if(mode === SIMPLE_MODE) {
        
        if(cellElement.style["background-color"] === `rgba(0, 0, 0, 0.75)`){
            cellElement.style["background-color"] = ``;
        }
        else{
            cellElement.style["background-color"] = `rgba(0, 0, 0, 0.75)`;
        }

    }
    
    if(mode === RANDOM_MODE){
        const colorR = randomColor();
        const colorG = randomColor();
        const colorB = randomColor();
        cellElement.style["background-color"] = `rgb(${colorR}, ${colorG}, ${colorB})`;
    }

    if(mode === EREASE_MODE){
        cellElement.style["background-color"] = ``;
        //cellElement.classList.remove("gridElementHovered");
    }

}

function attachListener(mode){
    gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach(cell => cell.addEventListener("mouseover", function(){onOver(cell, mode)}));
}

function textInputCheck(){
    const textLabel = document.querySelector('.textInput');
    let colNum = parseInt(textLabel.value);

    if(colNum<0){
        colNum = Math.abs(colNum);
    }
    if(isNaN(colNum)){
        num = DEFAULT_COLUMNSIZE;
        clearGrid(num**2, settedMode);
        return;
    }

    if(colNum > 100){
        alert("The maximum generable grid is 100x100");
    }
    else{
        num = colNum;
        clearGrid(num**2, settedMode);
    }
}

function setMode(e){
    const mode = e.srcElement.dataset.mode;

    if(mode === SIMPLE_MODE){
        settedMode = SIMPLE_MODE;
    }

    if(mode === RANDOM_MODE){
        settedMode = RANDOM_MODE;
        
    }

    if(mode === EREASE_MODE){
        settedMode = EREASE_MODE;
    }

    attachListener(mode);
}

function randomColor(){
    const random =parseInt(Math.random()*256)
    return random;
}
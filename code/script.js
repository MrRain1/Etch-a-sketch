const defaultColumnSize = 16;
let num=3;

const container = document.querySelector(`.grid-container`);
const clearButton = document.querySelector(`.clearGrid`);

//initialize the nodelist to attach the eventlisteners
let gridElements = document.querySelectorAll(".gridElement");

//generate the default grid
generateGrid(defaultColumnSize**2);

clearButton.addEventListener('click', function(){clearGrid(num**2)});

function generateGrid(size){
    let colNumAuto = "";
    
    for(let count = 0; count < size; count++){
        if(count < size**(1/2)){
            colNumAuto += "auto ";
        }
        
        const gridElement = document.createElement(`div`);
        container.appendChild(gridElement);
        gridElement.classList.toggle("gridElement");
    }
    container.style["grid-template-columns"] = colNumAuto;

    //Call function to link the listener to the cells
    attachListener();
}

function clearGrid(size){
    let colNumAuto = "";

    while(container.childElementCount>0){
        const gridElement = document.querySelector(`.gridElement`);
        container.removeChild(gridElement);
    }
    
    container.style["grid-template-columns"] = colNumAuto;

    generateGrid(size);
}

//function to toggle the css change
function onOver(cellElement){
    cellElement.classList.toggle("gridElementHovered");
}

function attachListener(){
    gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach(cell => cell.addEventListener("mouseover", function(){onOver(cell)}));
}
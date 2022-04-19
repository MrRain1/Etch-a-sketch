const defaultColumnSize = 16;
let num=3;

const container = document.querySelector(`.grid-container`);
const clearButton = document.querySelector(`.clearGrid`);
generateGrid(defaultColumnSize**2);

clearButton.addEventListener('click', function(){clearGrid(defaultColumnSize**2)});



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
}

function clearGrid(size){
    let colNumAuto = "";
    for(let i=0; i < container.length; i++){
        const gridElement = document.createElement(`div`);
        container.removeChild(gridElement);
    }

    container.style["grid-template-columns"] = colNumAuto;

    generateGrid(size);
}


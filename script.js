

// RETRIEVE TABLE SIZE

function askTableSize() {
    const tableSize = prompt("Insert no. of grid squares (8/16/32/64/128)");
    if(tableSize > 100) {
        return error;
    }
    else {
    return tableSize;
    }
}

const tableContent = document.querySelector("#content");
let tableRow = [];
let tableGrid = [];
// RESET TABLE

function resetTable (){
     tableRow = [];
     tableGrid = [];
     tableContent.innerHTML = "";
}

// CREATE TABLE


function createTable(){
    resetTable();

    const tableSize = askTableSize();
    const TABLEMAXSIZE = 840;
    const gridSize = (TABLEMAXSIZE/tableSize);
    for(i = 0; i < tableSize; i++){
         tableRow[i] = document.createElement("div");
        tableContent.appendChild(tableRow[i]);
        for(n = 0; n < tableSize; n++) {
            tableGrid[n] = document.createElement("div");
            tableGrid[n].classList.add("tableGrid");
            tableGrid[n].style.height = gridSize+'px';
            tableGrid[n].style.width = gridSize+"px";
            tableGrid[n].style.opacity = 1;
            tableGrid[n].addEventListener("mouseover", (event) => {
                
                event.target.style.backgroundColor = `rgb(${ranColor()},${ranColor()},${ranColor()})`;
                event.target.style.opacity -= 0.1;
                })
            tableRow[i].appendChild(tableGrid[n]);
            
        }
        
    }
    
}


// ADD FUNCTIONALITY TO START BUTTON

const startButton = document.querySelector(".startButton");
startButton.addEventListener("click", () => {
    createTable();    
})


// Math random

function ranColor(){

    return Math.floor(Math.random()*255);
}
function createDrawingBoard(width, height)
{
    width = 16
    height = 16
    const drawingBoard = document.querySelector("#drawingBoard")
    drawingBoard.innerHTML = "";
    let i = 0;
    let j = 0;
    let tile;
    console.log(width + " h " + height)
    console.log(drawingBoard)

    while (i < height)
    {
        j = 0;
        //console.log("i " + i)
        while (j < width)
        {
            //console.log("j " + j)
            tile = document.createElement("div")
            tile.className = "drawingSquare"
            tile.addEventListener('mouseover', changeSquareColor)
            drawingBoard.appendChild(tile)
            j++;   
        }
        i++;
        
    }
    //document.getElementsByClassName("drawingSquare").addEventListener(onmouseover, changeSquareColor)
    console.log("done")
}


function createResetButton()
{
    const mainContainer = document.querySelector("#mainContainer")
    console.log("main container")
    console.log(mainContainer)
    let resetButton = document.createElement("div")
    resetButton.textContent = "Change grid size"
    resetButton.className = "resetButton"
    resetButton.addEventListener('click', changeGridSize)
    mainContainer.appendChild(resetButton)
}


function changeGridSize()
{
    const container = document.querySelector(".resetButton")
    console.log("container " +container);
    console.log(container)
    container.innerHTML = ""
    let form = document.createElement("form")
    form.className = "resetButton"
    form.name = "Grid Size"
    form.type = "number"
    form.value = "16";
    container.appendChild(form)
    createDrawingBoard()
}

function changeSquareColor()
{
    console.log('couuuouououuououocouuuuuuuuuu')
    this.className = "changeColor"
}

createResetButton();
createDrawingBoard(16, 16);

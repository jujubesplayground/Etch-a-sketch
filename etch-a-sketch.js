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
        console.log("i " + i)
        while (j < width)
        {
            console.log("j " + j)
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
    let resetButton = document.createElement("div")
    resetButton.textContent = "RESET"
    resetButton.className = "resetButton"
    resetButton.addEventListener('click', createDrawingBoard)
    mainContainer.appendChild(resetButton)
}

function changeSquareColor()
{
    console.log('couuuouououuououocouuuuuuuuuu')
    this.className = "changeColor"
}

createResetButton();
createDrawingBoard(16, 16);

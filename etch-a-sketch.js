function createDrawingBoard(width, height)
{
    const drawingBoard = document.querySelector("#drawingBoard")
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


function changeSquareColor()
{
    console.log('couuuouououuououocouuuuuuuuuu')
    this.className = "changeColor"
}

createDrawingBoard(16, 16)
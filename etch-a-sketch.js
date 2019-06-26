function createDrawingBoard(width, height)
{
    const drawingBoard = document.querySelector("#drawingBoard")
    let i = 0;
    let j = 0;
    let board = [];

    console.log(drawingBoard)

    while (i < height)
    {
        board[i] = [];
        while (j < width)
        {
            board[i][j] = document.createElement("div")
            drawingBoard.appendChild(board[i][j])
            board[i][j].className = "drawingSquare"
            //board[i][j].textContent ="hi"
            j++;
        }
        i++;
    }
    console.log("done")
}

createDrawingBoard(16, 16)
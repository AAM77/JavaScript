var size = 8;
var sizeSquare = (size * size);
var newLineCount = 1;
var positionCount;
var chessBoard = "";

for (positionCount = 1; positionCount < (sizeSquare + 1); positionCount++) {

    if ( (newLineCount % 2) != 0) {
        if (((positionCount % 2) === 0) && ((positionCount % size)) === 0) {
            chessBoard = chessBoard + " " + "\n";
            newLineCount = newLineCount + 1;
        }

        else if ((positionCount % 2) != 0) {
            chessBoard = chessBoard + "#";
        }
        else if ((positionCount % 2) === 0) {
            chessBoard = chessBoard + " ";
        }
    }

    else if ( (newLineCount % 2) === 0) {
        if (((positionCount % 2) === 0) && ((positionCount % size)) === 0) {
            chessBoard = chessBoard + "#" + "\n";
            newLineCount = newLineCount + 1;
        }

        else if ((positionCount % 2) != 0) {
            chessBoard = chessBoard + " ";
        }
        else if ((positionCount % 2) === 0) {
            chessBoard = chessBoard + "#";
        }
    }
}

console.log(chessBoard);
var BoardFunctions = {}
var PieceFunctions = {}



BoardFunctions.setTurn = function(side){
    BoardFunctions.turn = side;
    $('.turn-display h1').text('Turn: '+side)
}


BoardFunctions.sides = ['white', 'black', 'red', 'blue'];

BoardFunctions.changeTurn = function(){

    var tmp, currentSide;

    tmp = BoardFunctions.sides.shift();
    BoardFunctions.sides.push(tmp);

    currentSide = BoardFunctions.sides[0];

    while ( currentSide == 'red' || currentSide == 'blue' || BoardFunctions.hasNoPieces(currentSide) ) {
        console.log('change turns cus no pieces on:' + currentSide)
        
        tmp = BoardFunctions.sides.shift();
        BoardFunctions.sides.push(tmp);

        currentSide = BoardFunctions.sides[0];

        
    }

    BoardFunctions.setTurn(BoardFunctions.sides[0])
}


BoardFunctions.hasNoPieces = function(side){
    $('div.piece.side-'+side).length == 0;
}







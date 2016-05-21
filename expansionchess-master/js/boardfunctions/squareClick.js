BoardFunctions.squareClick = function(e){  
    
    var $square;
    var $target = $(e.target);

    if ( $target.hasClass('square') ){
        $square = $target;
    } else {
        $square = $target.parent('.square');
        if ($square.length != 1){
            throw 'no unique square found on click!'
        }
    }

    var isAWall,
        canGoHere,
        aPieceIsActive,
        aPieceIsHere;

    $occupyingPiece = $square.children('.piece');
    
    aPieceIsHere = $occupyingPiece.length > 0;

    if ($occupyingPiece.length > 1) throw "more than one piece in the clicked square, wtf!"


    isAWall = $occupyingPiece.data('type') == 'wall';

    if (isAWall) {
        console.log('a wall got clicked!')
        return;
    }


    var thisPiecesTurn = BoardFunctions.turn == $occupyingPiece.data('side');
    if(thisPiecesTurn){
        PieceFunctions.activate($occupyingPiece);
        return;
    }



    canGoHere = $square.hasClass('movable') || $square.hasClass('killable');    
    $activePiece = $('.piece-active');

    aPieceIsActive = $activePiece.length > 0;

    if (canGoHere && !aPieceIsActive) throw "something is fucked up";

    if( aPieceIsActive && canGoHere ) {
        PieceFunctions.movePiece($activePiece, $square)
    }

    // if(aPieceIsHere) throw "should have exited by now!"
}
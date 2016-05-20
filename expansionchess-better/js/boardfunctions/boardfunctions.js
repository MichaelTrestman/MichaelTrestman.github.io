var BoardFunctions = {}
var PieceFunctions = {}


BoardFunctions.squareClick = function(e){

	$square = $(e.target);

	console.log($square);

	if ( $square.hasClass('square') && $square.children('.piece').length == 0 ) {
		console.log('empty square clicked!');

	}

  if ($square.hasClass('movable') || $square.hasClass('killable')) {

    $activePiece = $('.piece-active');
    console.log('$activePiece');
    console.log($activePiece);
    var side = $activePiece.data('side');
    var type = $activePiece.data('type');
    console.log('side')
    console.log(side)
    console.log('type')
    console.log(type)
    $activePiece.remove();
    BoardFunctions.placePiece(type, side, $square)
    PieceFunctions.clearActiveSquaresAndPieces();
  };


}

BoardFunctions.turn = 'white';



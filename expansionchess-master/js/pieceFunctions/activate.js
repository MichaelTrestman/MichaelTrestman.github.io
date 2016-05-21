PieceFunctions.activate = function($piece){
	
	console.log('activating piece:')
	console.log($piece);
	
	PieceFunctions.clearActiveSquaresAndPieces();

	PieceFunctions.highlightOnlyHomeSpace($piece);
	$piece.addClass('piece-active');

	var side = $piece.data('side');
	if (!side) throw "no side determined!"

	var type = $piece.data('type');
	if (!type) throw "no type determined!"

	if (!PieceFunctions.highLightAvailableMoves[type].length > 0) throw "no moves available for this type!";

	PieceFunctions.highLightAvailableMoves[type]( $piece );

}
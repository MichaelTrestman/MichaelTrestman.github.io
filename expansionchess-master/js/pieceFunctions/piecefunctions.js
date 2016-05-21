var PieceFunctions = {}

PieceFunctions.getBoardPosition = function($el){


	console.log('getBoardPosition')

	if (!!$el) throw "no piece on board available!"

}

PieceFunctions.clearActiveSquaresAndPieces = function(){
	$('div.active').removeClass('active');
	$('div.piece-active').removeClass('piece-active');
	$('div.active-home-square').removeClass('active-home-square');
	$('div.movable').removeClass('movable');
	$('div.killable').removeClass('killable');
}


PieceFunctions.highlightOnlyHomeSpace = function($piece){
	$piece.parent('.square').addClass('active-home-square')
}



PieceFunctions.friendlyPiece = function($targetPiece){

	console.log($targetPiece)
	$activePiece = $('div.piece.piece-active');

	if ($activePiece.length > 0){
		return $('.piece-active').data('side') == $targetPiece.data('side');
	}

	return false;
}


PieceFunctions.trySquareDirectly = function(targetCoordinates){

	var $targetSquare = $('.square[data-posx="' + (targetCoordinates.x) + '"][data-posy="'+ (targetCoordinates.y) +'"]' );
	var	$targetPiece = $targetSquare.children('.piece');
	if (PieceFunctions.friendlyPiece($targetPiece) ) return null ;
	var targetPiecePresent = !!$targetPiece[0] ;

	if (targetPiecePresent) {
		$targetSquare.addClass('killable')
		return null;
	} else {
		$targetSquare.addClass('movable')
		return $targetSquare;
	}

}

PieceFunctions.trySquare = function($origSquare, $piece, direction, coordinates, killOnly = false, moveOnly = false){

	$targetSquare = BoardFunctions.squareSelector[direction](coordinates);
	if (!$targetSquare) {
		console.log($targetSquare);
		throw 'baaarf'
	}

	$targetPiece = $targetSquare.children('.piece')

	if ( PieceFunctions.friendlyPiece($targetPiece) || $targetPiece.data('type') == 'wall' ) return null ;

	var targetPiecePresent = !!$targetPiece[0] ;


	if (killOnly){
		if (targetPiecePresent) {
			$targetSquare.addClass('killable');
			return $targetSquare;
		}

	} else if (moveOnly) {
		if (!targetPiecePresent) {
			$targetSquare.addClass('movable');
			return $targetSquare;
		}
	} else {

		if (targetPiecePresent) {
			$targetSquare.addClass('killable')
			return null;
		} else {
			$targetSquare.addClass('movable')
			return $targetSquare;
		}
	}

}


PieceFunctions.cardinalDirections = ['NorthOf', 'SouthOf', 'EastOf', 'WestOf'];
PieceFunctions.diagonalDirections = ['NorthEastOf', 'SouthEastOf', 'NorthWestOf', 'SouthWestOf'];

PieceFunctions.highLightAvailableMoves = {

	pawn: function($piece){
		console.log('moving like a pawn!!');

		var coordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $targetSquare;
		var $targetPiece;

		PieceFunctions.cardinalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates, false, true)
		});
		PieceFunctions.diagonalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates, true, false)
		});

	},
	king: function($piece){
		console.log('moving like a king!!');

		var coordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $targetSquare;
		var $targetPiece;

		PieceFunctions.cardinalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates)
		});
		PieceFunctions.diagonalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates)
		});
	},
	knight: function($piece){
		console.log('moving like a knight!!');

		var origCoordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $targetSquare;
		var $targetPiece;
		var x = origCoordinates.x;
		var y = origCoordinates.y;
		var coordinatePairs = [{
			x: x-1,
			y: y+2
		},

		{
			x: x+1,
			y: y+2
		},

		{
			x: x+1,
			y: y-2
		},

		{
			x: x-1,
			y: y-2
		},

		{
			x: x-2,
			y: y+1
		},

		{
			x: x+2,
			y: y+1
		},

		{
			x: x+2,
			y: y-1
		},

		{
			x: x-2,
			y: y-1
		}]


		coordinatePairs.forEach(function(coords){
			PieceFunctions.trySquareDirectly(coords);
		})

	},
	bishop: function($piece){
		console.log('moving like a bishop!!');

		var origCoordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $origSquare;
		var $targetPiece;
		var stillMoving;
		var newCoordinates;

		PieceFunctions.diagonalDirections.forEach(function(direction){
			var $this
			stillMoving = true;

			newCoordinates = origCoordinates;

			while(stillMoving){


				var $targetSquare = PieceFunctions.trySquare(1,1,direction,newCoordinates)||[];


				stillMoving = !!($targetSquare[0])

				console.log('stillMoving')
				console.log($targetSquare)
				console.log(stillMoving)
				console.log(direction)

				if (stillMoving){


					newCoordinates = { x: $targetSquare.data('posx'), y: $targetSquare.data('posy') };
				}
			}
		})

	},
	rook: function($piece){
		console.log('moving like a rook!!');
		var origCoordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $origSquare;
		var $targetPiece;
		var stillMoving;
		var newCoordinates;

		PieceFunctions.cardinalDirections.forEach(function(direction){
			var $this
			stillMoving = true;

			newCoordinates = origCoordinates;

			while(stillMoving){


				var $targetSquare = PieceFunctions.trySquare(1,1,direction,newCoordinates)||[];


				stillMoving = !!($targetSquare[0])

				console.log('stillMoving')
				console.log($targetSquare)
				console.log(stillMoving)
				console.log(direction)

				if (stillMoving){


					newCoordinates = { x: $targetSquare.data('posx'), y: $targetSquare.data('posy') };
				}
			}
		})



	},
	queen: function($piece){
		console.log('moving like a queen!!');
		var origCoordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $origSquare;
		var $targetPiece;
		var stillMoving;
		var newCoordinates;
		var allDirections = PieceFunctions.diagonalDirections.concat(PieceFunctions.cardinalDirections);
		console.log(PieceFunctions.diagonalDirections)
		allDirections.forEach(function(direction){
			var $this
			stillMoving = true;

			newCoordinates = origCoordinates;

			while(stillMoving){


				var $targetSquare = PieceFunctions.trySquare(1,1,direction,newCoordinates)||[];


				stillMoving = !!($targetSquare[0])

				console.log('stillMoving')
				console.log($targetSquare)
				console.log(stillMoving)
				console.log(direction)

				if (stillMoving){


					newCoordinates = { x: $targetSquare.data('posx'), y: $targetSquare.data('posy') };
				}
			}
		})
	}
}


BoardFunctions.squareSelector = {
	NorthOf: function(coordinates){  return $('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y + 1) +'"]' ) },
	SouthOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y - 1) +'"]' ) },
	EastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y) +'"]' ) },
	WestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y) +'"]' )},
	NorthEastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y + 1) +'"]' )},
	SouthEastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y - 1) +'"]' )},
	NorthWestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y + 1) +'"]' )},
	SouthWestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y - 1) +'"]' )}
}


PieceFunctions.movePiece = function($activePiece, $square){
    var side = $activePiece.data('side');
    var type = $activePiece.data('type');

    $activePiece.remove();
    BoardFunctions.placePiece(type, side, $square)
    PieceFunctions.clearActiveSquaresAndPieces();
    BoardFunctions.changeTurn();

}








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


PieceFunctions.pieceSvg = {}

PieceFunctions.pieceSvg.pawn = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80.000000pt" height="80.000000pt" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet"> <g class="piece-path" transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" stroke="none"> <path  d="M353 638 c-28 -13 -46 -58 -37 -91 3 -15 2 -27 -3 -27 -17 0 -43 -58 -43 -97 0 -21 7 -48 15 -61 15 -21 14 -23 -20 -53 -47 -42 -75 -98 -82 -165 l-6 -54 216 0 216 0 -6 37 c-13 95 -65 189 -112 204 -12 4 -11 10 3 31 28 43 22 112 -12 151 -10 11 -15 32 -13 52 2 27 -4 40 -25 60 -29 26 -55 30 -91 13z m75 -40 c7 -7 12 -28 12 -47 0 -20 9 -47 20 -61 22 -29 25 -78 8 -128 -12 -33 -11 -35 26 -69 42 -39 75 -103 76 -145 l0 -28 -180 0 c-165 0 -180 1 -180 18 0 45 25 99 67 143 39 42 44 53 38 76 -18 73 -17 102 4 132 12 16 21 44 21 63 0 41 15 58 50 58 14 0 31 -5 38 -12z"/></g></svg>'

PieceFunctions.pieceSvg.knight = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80.000000pt" height="80.000000pt" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M347 661 c-14 -17 -29 -31 -33 -31 -4 0 -20 12 -35 26 -33 32 -53 23 -46 -20 3 -24 -5 -47 -38 -101 -92 -152 -110 -208 -85 -256 6 -11 21 -19 35 -19 14 0 34 -5 44 -12 17 -10 26 -6 69 33 27 24 72 63 100 87 l52 43 -7 -33 c-9 -48 -30 -86 -78 -137 -50 -55 -65 -81 -65 -115 l0 -26 190 0 190 0 0 88 c0 114 -15 212 -41 273 -26 60 -86 116 -133 125 -41 7 -49 24 -12 24 13 0 45 -15 72 -32 89 -61 134 -181 137 -368 2 -86 5 -110 16 -110 11 0 12 19 7 103 -18 262 -95 393 -249 422 -20 4 -37 13 -37 19 0 7 -6 20 -13 30 -13 17 -15 16 -40 -13z m125 -111 c52 -16 104 -79 118 -144 7 -28 14 -102 17 -163 l6 -113 -162 0 c-188 0 -188 0 -110 86 81 90 111 180 68 207 -17 11 -36 -2 -158 -109 -43 -37 -48 -39 -78 -29 -40 13 -52 24 -20 18 28 -6 50 17 45 48 -2 18 -15 31 -46 46 -5 2 37 81 47 87 5 3 14 -1 21 -9 19 -22 35 -18 64 16 32 38 33 54 1 83 -14 13 -25 31 -25 41 0 17 1 17 18 2 25 -22 45 -21 67 3 18 20 19 20 54 -19 20 -22 53 -44 73 -51z m-192 -8 c0 -10 -6 -27 -14 -38 -11 -15 -17 -16 -27 -7 -9 9 -8 17 5 37 19 30 36 34 36 8z m-104 -183 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"/></g></svg>'

PieceFunctions.pieceSvg.bishop = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80.000000pt" height="80.000000pt" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" class="piece-line" stroke="none"> <path d="M363 696 c-25 -22 -27 -27 -17 -54 11 -29 10 -31 -33 -61 -48 -34 -82 -95 -83 -147 0 -17 11 -48 25 -68 23 -34 24 -39 10 -59 -8 -12 -15 -24 -15 -27 0 -3 68 -5 150 -5 83 0 150 2 150 5 0 3 -7 15 -15 27 -14 20 -13 25 10 59 14 20 25 50 25 67 0 49 -39 116 -85 149 -41 29 -42 31 -31 60 10 27 8 32 -17 54 -15 13 -32 24 -37 24 -5 0 -22 -11 -37 -24z m55 -57 c-2 -34 3 -45 22 -61 87 -67 114 -119 94 -177 -9 -24 -13 -26 -64 -22 -30 1 -57 5 -59 7 -3 2 12 21 32 42 20 21 37 45 37 53 0 8 -18 33 -40 54 l-40 39 -40 -39 c-22 -21 -40 -46 -40 -54 0 -8 17 -32 37 -53 20 -21 35 -39 32 -42 -2 -2 -28 -6 -57 -8 -60 -6 -72 5 -72 64 0 32 41 108 59 108 4 0 22 14 40 30 27 26 30 34 20 51 -14 27 -5 49 21 49 18 0 20 -5 18 -41z m-6 -128 c-3 -19 1 -22 20 -19 15 2 23 -2 23 -12 0 -10 -8 -14 -23 -12 -20 3 -23 0 -20 -20 2 -15 -2 -23 -12 -23 -10 0 -14 8 -12 23 3 20 0 23 -20 20 -15 -2 -23 2 -23 12 0 10 8 14 23 12 18 -3 23 1 22 15 -3 29 -1 35 13 30 6 -2 11 -14 9 -26z m86 -173 c-3 -9 -32 -13 -98 -13 -66 0 -95 4 -97 13 -4 9 20 12 97 12 77 0 101 -3 98 -12z"/><path d="M250 244 c0 -18 33 -41 70 -50 28 -7 15 -10 -72 -14 -95 -4 -109 -8 -132 -29 -46 -43 -22 -51 142 -43 78 4 206 4 284 0 149 -7 181 -1 156 29 -26 32 -68 43 -160 44 -85 1 -90 2 -57 13 20 6 44 17 53 25 37 31 19 36 -134 36 -102 0 -150 -4 -150 -11z m198 -44 c-18 -29 2 -44 70 -51 31 -3 -24 -5 -123 -5 -99 0 -152 2 -118 5 72 7 90 19 74 50 -11 20 -10 21 49 21 57 0 60 -1 48 -20z"/></g></svg>'

PieceFunctions.pieceSvg.rook = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80.000000pt" height="80.000000pt" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M223 652 l-43 -3 0 -51 c0 -43 4 -54 31 -79 l31 -29 -4 -109 c-2 -86 -7 -113 -20 -128 -10 -11 -18 -34 -18 -51 0 -27 -4 -32 -25 -32 -22 0 -25 -4 -25 -40 l0 -40 250 0 250 0 0 40 c0 36 -2 40 -25 40 -21 0 -25 5 -25 32 0 17 -8 40 -17 51 -14 15 -19 42 -21 128 l-4 109 32 30 c28 26 31 34 28 81 l-3 52 -45 0 c-34 0 -46 -4 -48 -16 -5 -23 -59 -23 -64 -1 -2 13 -15 17 -58 17 -43 0 -56 -4 -58 -17 -4 -21 -62 -23 -62 -2 0 20 -7 22 -57 18z m37 -47 c11 -13 8 -15 -19 -15 -21 0 -31 5 -31 15 0 8 8 15 19 15 10 0 24 -7 31 -15z m180 0 c11 -13 5 -15 -40 -15 -45 0 -51 2 -40 15 7 8 25 15 40 15 15 0 33 -7 40 -15z m140 0 c0 -9 -9 -15 -25 -15 -18 0 -23 4 -19 15 4 8 15 15 25 15 10 0 19 -7 19 -15z m30 -55 c0 -6 -77 -10 -210 -10 -133 0 -210 4 -210 10 0 6 77 10 210 10 133 0 210 -4 210 -10z m-55 -40 c4 -7 -50 -10 -155 -10 -105 0 -159 3 -155 10 4 6 67 10 155 10 88 0 151 -4 155 -10z m-25 -120 l0 -70 -130 0 -130 0 0 70 0 70 130 0 130 0 0 -70z m25 -110 c4 -7 -50 -10 -155 -10 -105 0 -159 3 -155 10 4 6 67 10 155 10 88 0 151 -4 155 -10z m25 -40 c0 -6 -67 -10 -180 -10 -113 0 -180 4 -180 10 0 6 67 10 180 10 113 0 180 -4 180 -10z m10 -70 c0 -6 -70 -10 -190 -10 -120 0 -190 4 -190 10 0 6 70 10 190 10 120 0 190 -4 190 -10z"/></g></svg>'


PieceFunctions.pieceSvg.queen = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80.000000pt" height="80.000000pt" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M373 698 c-22 -29 -23 -38 -4 -57 20 -20 20 -20 -2 -131 -11 -60 -25 -110 -29 -110 -4 0 -8 7 -8 15 0 9 -16 55 -35 103 -29 73 -32 88 -20 95 18 10 20 48 3 65 -34 34 -90 -6 -68 -48 6 -11 15 -20 20 -20 6 0 10 -46 10 -111 l0 -112 -51 78 c-41 64 -49 82 -44 107 8 35 -8 58 -41 58 -48 0 -56 -74 -9 -86 24 -6 30 -27 51 -179 3 -27 15 -59 26 -71 16 -18 25 -20 61 -13 54 11 280 11 334 0 36 -7 45 -5 61 13 11 12 23 44 26 71 21 152 27 173 51 179 47 12 39 86 -9 86 -33 0 -49 -23 -41 -58 5 -25 -3 -43 -44 -107 l-51 -78 0 102 c0 88 3 104 20 121 25 25 25 35 0 60 -15 15 -25 17 -42 11 -29 -10 -37 -57 -13 -75 15 -11 14 -16 -9 -65 -14 -30 -31 -74 -38 -98 -7 -23 -15 -43 -18 -43 -3 0 -16 50 -27 110 l-22 111 20 20 c18 18 19 23 6 42 -17 26 -50 33 -64 15z m37 -38 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-150 -15 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m300 -10 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m140 -49 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-286 -128 c4 -24 14 -53 22 -66 13 -20 18 -21 31 -10 9 7 25 33 37 58 l20 45 6 -48 c3 -26 13 -54 22 -63 15 -15 19 -13 47 26 l31 43 0 -29 c0 -16 -4 -45 -10 -64 l-10 -35 -212 1 -213 1 -6 29 c-4 16 -7 45 -8 64 l-1 35 18 -30 c11 -16 26 -36 34 -43 23 -19 48 20 49 78 l1 45 23 -50 c31 -69 48 -82 67 -52 9 12 19 41 23 65 9 54 21 54 29 0z"/><path d="M239 263 c-31 -4 -35 -7 -32 -27 3 -13 -2 -28 -11 -35 -9 -8 -16 -16 -16 -20 0 -3 77 -4 171 -2 166 3 259 -3 259 -17 0 -4 -99 -6 -220 -5 -209 1 -220 0 -220 -18 0 -36 35 -42 239 -42 171 1 196 3 207 17 13 19 5 66 -17 92 -6 8 -9 22 -6 33 4 16 -3 19 -47 25 -53 6 -244 6 -307 -1z m285 -42 c33 -3 61 -11 63 -17 2 -7 -13 -8 -49 -3 -29 4 -91 8 -138 8 -47 0 -109 -4 -138 -8 -36 -5 -51 -4 -49 3 7 20 192 30 311 17z"/></g></svg>'

PieceFunctions.pieceSvg.king = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80.000000pt" height="80.000000pt" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet"><metadata> Created by potrace 1.10, written by Peter Selinger 2001-2011</metadata><g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M390 690 c0 -15 -7 -20 -26 -20 -16 0 -24 -5 -21 -12 2 -7 14 -12 26 -11 32 4 27 -33 -9 -67 -21 -20 -30 -37 -30 -59 l0 -31 -40 20 c-59 30 -112 27 -154 -11 -64 -56 -61 -129 10 -196 28 -28 44 -51 44 -67 0 -24 0 -24 47 -10 27 8 90 14 153 14 63 0 126 -6 153 -14 47 -14 47 -14 47 10 0 13 4 24 9 24 23 0 101 92 107 127 19 100 -103 178 -200 128 -37 -19 -36 -19 -36 11 0 16 -12 37 -30 54 -36 34 -41 71 -9 67 12 -1 24 4 26 11 3 7 -5 12 -21 12 -19 0 -26 5 -26 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z m28 -128 c7 -5 16 -22 21 -39 8 -27 5 -35 -15 -54 l-24 -23 -21 21 c-26 26 -28 72 -3 90 21 15 25 16 42 5z m-123 -76 c28 -13 63 -38 78 -55 l27 -32 32 37 c63 71 156 93 218 52 62 -42 60 -106 -4 -168 -22 -23 -47 -46 -54 -54 -11 -10 -24 -9 -70 7 -70 23 -209 25 -272 3 l-43 -15 -40 37 c-66 62 -81 127 -38 176 36 42 94 46 166 12z"/><path d="M152 460 c-38 -36 -25 -95 30 -139 27 -22 33 -23 85 -12 31 6 71 11 88 11 30 0 32 2 29 32 -11 90 -171 164 -232 108z m127 -30 c22 -11 49 -32 61 -47 l21 -27 -73 -13 c-75 -12 -85 -10 -115 26 -16 19 -17 53 -1 69 18 18 64 15 107 -8z"/><path d="M505 461 c-47 -29 -83 -73 -87 -106 -3 -29 -1 -30 52 -42 30 -6 67 -14 81 -18 38 -10 119 67 119 113 0 64 -97 95 -165 53z m116 -21 c29 -16 23 -49 -15 -85 l-35 -33 -55 13 c-79 18 -82 22 -49 57 47 51 111 70 154 48z"/> <path d="M265 205 c-33 -7 -63 -11 -67 -8 -5 2 -8 -7 -8 -20 l0 -25 43 16 c60 22 268 22 320 -1 37 -16 37 -16 37 6 0 15 -6 23 -17 24 -10 0 -45 6 -78 12 -77 14 -154 13 -230 -4z"/> <path d="M270 149 c-66 -19 -67 -19 -40 -34 39 -21 149 -37 200 -30 25 3 70 13 100 22 l55 16 -35 15 c-43 18 -230 26 -280 11z m157 -29 c-21 -4 -53 -4 -70 0 -24 6 -15 8 38 8 58 0 64 -2 32 -8z"/></g></svg>'
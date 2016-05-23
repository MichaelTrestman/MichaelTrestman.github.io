BoardFunctions.saveBoardToJSON = function(){
  var board={};
  var $domBoard = $('#board')
  var topRow = $domBoard.children('.row')[0]

  board.height = $domBoard.children('.row').length
  board.width = $(topRow).children('.square').length

  var piecesOnBoard = $('.piece:not(.picker-piece)').toArray();

  board.pieces = $.map(piecesOnBoard, function(piece, i){
    return {
      posx: piece.dataset.posx,
      posy: piece.dataset.posy,
      type: piece.dataset.type,
      side: piece.dataset.side
    }
  })

  var $upgradeSquares = $('.square-upgrade');
  board.upgradeSquares = $.map($upgradeSquares, function($square,i){
    return {
      posx: $square[0].dataset.posx,
      posy: $square[0].dataset.posy,
      type: $square[0].dataset.type,
      side: $square[0].dataset.side
    }
  })

  return JSON.stringify(board)
}

BoardFunctions.loadBoardFromJSON = function(boardJSON){
  var board = JSON.parse(boardJSON);
  var pieces = board.pieces;
  var upgradeSpaces = board.upgradeSquares || [];

  BoardFunctions.clearBoard();

  ChessBoard.initialize('board', {
    height: board.height,
    width: board.width
  }).clean();

  pieces.forEach(function(piece){
    var targetSquareSelector = '.square[data-posx="' + piece.posx + '"][data-posy="' + piece.posy +'"]';

    var $targetSquare = $(targetSquareSelector);

    BoardFunctions.placePiece(piece.type, piece.side, $targetSquare);

  })

  upgradeSpaces.forEach(function(upgradeSpace){
        var upgradeSpaceSelector = '.square[data-posx="' + upgradeSpace.posx + '"][data-posy="' + upgradeSpace.posy +'"]';

        $upgradeSquares = $(upgradeSpaceSelector);
        console.log("$upgradeSquares");
        console.log($upgradeSquares);
        $upgradeSquares.addClass('square-upgrade');

  })

}

BoardFunctions.clearBoard = function(){
  $('#board').empty();
}
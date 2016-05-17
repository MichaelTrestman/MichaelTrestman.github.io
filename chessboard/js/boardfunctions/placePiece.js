BoardFunctions.placePiece = function(type, side, $square){

  var piece = $("<div></div>")
    .addClass('piece')
    .addClass('piece-' + type)
    .addClass('side-' + side)
    .attr('draggable', 'true')
    .attr('data-type', type)
    .attr('data-side', side)
    .attr('data-posX', $square[0].dataset.posx)
    .attr('data-posY', $square[0].dataset.posy)
    .on('dragstart', drag);

  if ($square.hasClass('square')) {
    $square.children('.piece').remove();
  } else if ($square.hasClass('pieces-picker')){

  } else {
    throw 'Target is not a square!!!'
  };

  $square.append(piece);
  return piece
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    var pieceData = ev.target.dataset;

    ev.originalEvent.dataTransfer.setData('piece-side', pieceData.side);
    ev.originalEvent.dataTransfer.setData('piece-type', pieceData.type);
    ev.originalEvent.dataTransfer.setData('piece-posX', pieceData.posx);
    ev.originalEvent.dataTransfer.setData('piece-posY', pieceData.posy);
}

function drop(ev) {
    ev.preventDefault();

    var side = ev.originalEvent.dataTransfer.getData('piece-side');

    var type = ev.originalEvent.dataTransfer.getData('piece-type');



    var oldPiecePosX = ev.originalEvent.dataTransfer.getData('piece-posX');
    var oldPiecePosY = ev.originalEvent.dataTransfer.getData('piece-posY');

    var oldPieceSelector = '.piece';
    oldPieceSelector += '[data-posX="' +  oldPiecePosX + '"]';
    oldPieceSelector += '[data-posY="' +  oldPiecePosY + '"]';

    $(oldPieceSelector).remove();

    var $target = $(ev.target);

    if ($target.hasClass('piece')) {
      $target = $target.parent()

    }

    if (!$target.hasClass('square')) {
      throw 'Target is not square!'
    };

    BoardFunctions.placePiece(type, side, $target)
}

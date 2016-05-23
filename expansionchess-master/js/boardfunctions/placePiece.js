BoardFunctions.placePiece = function(type, side, $square){

  var pieceRotation = 'rotate(' + String(0 - BoardFunctions.currentBoardRotation) + 'deg)'


  var $piece = $("<div></div>")
    .addClass('piece')
    .addClass('piece-' + type)
    .addClass('side-' + side)
    .attr('draggable', 'false')
    .attr('data-type', type)
    .attr('data-side', side)
    .attr('data-posX', $square[0].dataset.posx)
    .attr('data-posY', $square[0].dataset.posy)
    .css('transform', pieceRotation);


  var svgText = PieceFunctions.pieceSvg[type];

  var $svg = $(svgText)
    .attr('height', '40px')
    .attr('width', '40px');

  var $paths = $svg.find('path');
  $paths.attr('fill', side)


  $piece.append($svg)



  if ($square.hasClass('square')) {
    $square.children('.piece').remove();
  } else if ($square.hasClass('pieces-picker')){

  } else {
    throw 'Target is not a square!!!'
  };

  $square.append($piece);
}

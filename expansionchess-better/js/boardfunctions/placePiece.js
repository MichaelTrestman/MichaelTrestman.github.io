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
    .css('transform', pieceRotation)
    .on('dragstart', drag);

  if ($square.hasClass('square')) {
    $square.children('.piece').remove();
  } else if ($square.hasClass('pieces-picker')){

  } else {
    throw 'Target is not a square!!!'
  };

  $square.append($piece);


  $piece.click(function(e){


    var $thisPiece = $(e.target);

    var $activePiece = $('.piece-active');

    if ($thisPiece.data('side') == BoardFunctions.turn){
      PieceFunctions.activate( $thisPiece );
    } else if ($activePiece.length > 0){
      drop(e);
    }
  })

  PieceFunctions.clearActiveSquaresAndPieces()
  BoardFunctions.turn = ( side == 'white' ) ? 'black' : 'white';
  return $piece
}




function drop(ev) {


    ev.preventDefault();

    if (!!ev.originalEvent ){

    var side = ev.originalEvent.dataTransfer.getData('piece-side');

    var type = ev.originalEvent.dataTransfer.getData('piece-type');

    var oldPiecePosX = ev.originalEvent.dataTransfer.getData('piece-posX');

    var oldPiecePosY = ev.originalEvent.dataTransfer.getData('piece-posY');

    var oldPieceSelector = '.piece';
    oldPieceSelector += '[data-posX="' +  oldPiecePosX + '"]';
    oldPieceSelector += '[data-posY="' +  oldPiecePosY + '"]';



    }




    var $target = $(ev.target);

    if ($target.hasClass('piece')) {
      $target = $target.parent()
    }

    if (!$target.hasClass('square')) {
      throw 'Target is not square!'
    };

    if ($target.hasClass('movable') || $target.hasClass('killable')) {
    $(oldPieceSelector).remove();
    BoardFunctions.placePiece(type, side, $target)
    };
}



function allowDrop(ev) {
    ev.preventDefault();
}

function isPieceClass(c){
  return c.match(/piece-/);
}

function drag(ev) {

  var $piece = $(ev.target);

  if (!$piece.data('side') == BoardFunctions.turn){
    return null;
  }

  PieceFunctions.activate($piece);

  var pieceData = ev.target.dataset;

  if(!(pieceData.type == 'wall') ) {

    var imgPath = $(ev.target).css('background-image').split('"')[1].split(/http:\/\/|file:\/\/\/|"\)/)[1];


    imgPath = imgPath.split('chessboard_new/')[1]

    console.log(imgPath)

    var img = $("<img></img>").attr('src', imgPath)[0];


    // ev.originalEvent.dataTransfer.setDragImage( $(ev.target).clone().css('border', 'solid 10px pink')[0] ,50,50);

    ev.originalEvent.dataTransfer.setDragImage(img,50,50);

  }



  ev.originalEvent.dataTransfer.setData('piece-side', pieceData.side);
  ev.originalEvent.dataTransfer.setData('piece-type', pieceData.type);
  ev.originalEvent.dataTransfer.setData('piece-posX', pieceData.posx);
  ev.originalEvent.dataTransfer.setData('piece-posY', pieceData.posy);
}


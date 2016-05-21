BoardFunctions.clean = function(args={}){

  $('#board').empty();

  $('.square .piece, .square').remove();

  if (!!args.height) config.height = args.height;
  if (!!args.width) config.width = args.width;


  config = this.config;

  if ( !!args.height && !!args.width){
    config = args
  }

  containerDiv = this.containerDiv;

  var selector = '#' + containerDiv;

  var height = config.height,
  width = config.width,
  board_container = $(selector);

  for (var i = 0; i < height; i++) {

    var thisRowId = 'row-' + String(i)
    var thisRow = $('<div></div>')
      .attr('id', thisRowId)
      .attr('class', 'row')
      .attr('data-row', String(i));

    board_container.append(thisRow);

    var rowMod = i%2

    for (var j = 0; j < width; j++) {
      var squareMod = (j + rowMod)%2;
      var squareColor = squareMod == 0 ? 'dark' : 'light';

      var thisSquareID = 'square-' + String(i) + 'X' + String(j);
      var thisSquareClass = 'square-' + squareColor;

      var thisSquare = $('<div></div>')
        .attr('id', thisSquareID)
        .addClass('square')
        .addClass(thisSquareClass)
        .attr('draggable', 'false')
        .attr('data-posX', j)
        .attr('data-posY', i)
        .on('click', BoardFunctions.squareClick);

      thisRow.append(thisSquare);

    };

    $('.board').css('height', 50 * height)
    $('.board').css('width', 50 * width)

  };

  return this
}

ChessBoard = (function(){

  var board_container = $('#board');
  var turn;
  var containerDiv;
  var config;

  return {

    initialize(containerDiv, config){
      this.containerDiv = containerDiv;
      this.config = config;
      return this;
    },

    clean: BoardFunctions.clean,
    placePiece: BoardFunctions.placePiece,
    setWallsAndPieces: function(wallSetup, pieceSetup){
      console.log('setWallsAndPieces')
      return this
    },

    setWalls: function(){
      console.log('setWalls')
      return this
    },

    setPiecesInteractively: function(){
      console.log('setPiecesInteractively')
      return this
    },

    getTurn: function(){ return turn},

    setTurn: function(side){ turn = side}

  }

})();

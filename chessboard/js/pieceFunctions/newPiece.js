PieceFunctions.newPiece = function (type, side){
  this.side = side;
  this.type = type;
  this.img = PieceFunction.getImage(type, side);
  this.moves = PieceFunction.setPieceMoveFromMoveRules(type);
}
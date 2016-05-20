PieceFunctions.newPiece = function ($el){

  this.functions = PieceFunctions;

  if (!!$el){
  	this.$el = $el;
  	this.side = $el.data('side');
  	this.type = $el.data('type');

  }


  this.getImage = function(){

  }

  this.img = this.getImage(this.type, this.side);

    
  this.$el;








  



















  this.assign$El = function($el){
  	this.$el = $el;
  }


  
  

  return this;

}
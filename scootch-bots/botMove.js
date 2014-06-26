
Bot.prototype.moveLeft = function(){

	if (
			(
			 (this.bodyPos[0] - this.headPos[0] )*(this.bodyPos[0] - this.headPos[0] ) +

			 (this.bodyPos[1] - this.headPos[1] )*(this.bodyPos[1] - this.headPos[1] ) 
			) < (this.length * this.length + 200)){

		this.bodyPos = this.leftAntennaePos;


	} else {
		//this one shortens the length
		this.tailPos = this.bodyPos;
		this.bodyPos = this.leftAntennaePos;
	};
		
	this.headPos = [

						this.bodyPos[0] + ( this.bodyPos[0] - this.tailPos[0] ) ,
						this.bodyPos[1] + ( this.bodyPos[1] - this.tailPos[1] ) ];

	this.centerHeadPos = 

	[
						((this.bodyPos[0] + this.headPos[0]) / 2 ),
						((this.bodyPos[1] + this.headPos[1]) / 2 )
	]

	this.leftAntennaePos = [
						  this.centerHeadPos[0] + (this.bodyPos[1] - this.centerHeadPos[1]),
						  this.centerHeadPos[1] - (this.bodyPos[0] - this.centerHeadPos[0])
	]
	this.rightAntennaePos = [
					  this.centerHeadPos[0] - (this.bodyPos[1] - this.centerHeadPos[1]),
					  this.centerHeadPos[1] + (this.bodyPos[0] - this.centerHeadPos[0])
	]

}


Bot.prototype.moveRight = function(){

	if (
			(
			 (this.bodyPos[0] - this.headPos[0] )*(this.bodyPos[0] - this.headPos[0] ) +

			 (this.bodyPos[1] - this.headPos[1] )*(this.bodyPos[1] - this.headPos[1] ) 
			) < (this.length * this.length + 200)){
		this.bodyPos = this.rightAntennaePos;


	} else {
		//this one shortens the length
		this.tailPos = this.bodyPos;
		this.bodyPos = this.rightAntennaePos;
	};
		
	this.headPos = [

						this.bodyPos[0] + ( this.bodyPos[0] - this.tailPos[0] ) ,
						this.bodyPos[1] + ( this.bodyPos[1] - this.tailPos[1] ) ];

	this.centerHeadPos = 

	[
						((this.bodyPos[0] + this.headPos[0]) / 2 ),
						((this.bodyPos[1] + this.headPos[1]) / 2 )
	]

	this.leftAntennaePos = [
						  this.centerHeadPos[0] + (this.bodyPos[1] - this.centerHeadPos[1]),
						  this.centerHeadPos[1] - (this.bodyPos[0] - this.centerHeadPos[0])
	]
	this.rightAntennaePos = [
					  this.centerHeadPos[0] - (this.bodyPos[1] - this.centerHeadPos[1]),
					  this.centerHeadPos[1] + (this.bodyPos[0] - this.centerHeadPos[0])
	]

}


Bot.prototype.seekTarget = function(target){
	//target is a [x,y]

	var leftDist = (this.leftAntennaePos[0] - target.pos[0])*(this.leftAntennaePos[0] - target.pos[0]) +(this.leftAntennaePos[1] - target.pos[1])*(this.leftAntennaePos[1] - target.pos[1]) ;

	var rightDist = (this.rightAntennaePos[0] - target.pos[0])*(this.rightAntennaePos[0] - target.pos[0])+(this.rightAntennaePos[1] - target.pos[1])*(this.rightAntennaePos[1] - target.pos[1]);

	if (leftDist > rightDist) {
		
		this.moveRight();
	} else {
		
		this.moveLeft();
	};
}

Bot.prototype.avoidThing = function(target){

	console.log('avoiding!');
	var leftDist = (this.leftAntennaePos[0] - target.pos[0])*(this.leftAntennaePos[0] - target.pos[0]) +(this.leftAntennaePos[1] - target.pos[1])*(this.leftAntennaePos[1] - target.pos[1]) ;

	var rightDist = (this.rightAntennaePos[0] - target.pos[0])*(this.rightAntennaePos[0] - target.pos[0])+(this.rightAntennaePos[1] - target.pos[1])*(this.rightAntennaePos[1] - target.pos[1]);

	if (leftDist < rightDist) {
		
		this.moveRight();
	} else {
		
		this.moveLeft();
	};
}


Bot.prototype.flip = function(){
	var q = this.headPos;
	this.headPos = this.tailPos;
	this.tailPos = q;
	var coin = Math.floor(Math.random()*2)
	if (coin) {this.moveLeft();} else {this.moveRight();};
	console.log('flipper')
}


Bot.prototype.flee = function(scaryThing){

	var distScaryBod = Math.sqrt(
            (this.bodyPos[0] - scaryThing.pos[0])*(this.bodyPos[0] - scaryThing.pos[0]) +
            (this.bodyPos[1] - scaryThing.pos[1])*(this.bodyPos[1] - scaryThing.pos[1]) );

  var distScaryTail = Math.sqrt(
					  (this.tailPos[0] - scaryThing.pos[0])*(this.tailPos[0] - scaryThing.pos[0]) +
            (this.tailPos[1] - scaryThing.pos[1])*(this.tailPos[1] - scaryThing.pos[1]) );
	
	//if (  distScaryTail- 10000000 > (distScaryBod + this.length/10) )  { this.flip(); };
	this.avoidThing(scaryThing);
	
}

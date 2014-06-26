function Bot (idNum, startingPos, length){

	this.idNum = idNum;
        this.color = colorS[ Math.floor(Math.random()*colorS.length)];
	this.length = length;
	this.bodyPos = startingPos //as array [x,y]
	this.tailPos = [startingPos[0], (startingPos[1] - length)];
        this.pos = [this.bodyPos[0], this.bodyPos[1]];
	this.headPos = [

						this.bodyPos[0] + ( this.bodyPos[0] - this.tailPos[0] ) ,
						this.bodyPos[1] + ( this.bodyPos[1] - this.tailPos[1] ) ];
	this.centerHeadPos = [
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


Bot.prototype.render = function(){

				//body
				context.beginPath();
        context.arc(this.bodyPos[0], this.bodyPos[1], this.length/4, 0, (2 * Math.PI), false);
        //context.fillStyle = 'red';
        //context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.color
        context.stroke();
        

        
        //tail
        //context.moveTo(this.tailPos[0], this.tailPos[1])
        context.beginPath();
        context.arc(this.tailPos[0], this.tailPos[1], this.length/6, 0, (2 * Math.PI), false);
        //context.fillStyle = 'green';
        //context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.color
        context.stroke();

        //center of head
        context.beginPath();
        context.arc(this.centerHeadPos[0], this.centerHeadPos[1], this.length/6, 0, (2 * Math.PI), false);
        //context.fillStyle = 'green';
        //context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.color
        context.stroke();
        
        //left antennae
        //context.moveTo(this.leftAntennaePos[0], this.leftAntennaePos[1])
        context.beginPath();
        context.arc(this.leftAntennaePos[0], this.leftAntennaePos[1], this.length/6, 0, (2 * Math.PI), false);
        //context.fillStyle = 'yellow';
        //context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.color
        context.stroke();
        
        //right antennae
        //context.moveTo(this.rightAntennaePos[0], this.rightAntennaePos[1])
        context.beginPath();
        context.arc(this.rightAntennaePos[0], this.rightAntennaePos[1], this.length/6, 0, (2 * Math.PI), false);
        //context.fillStyle = 'blue';
        //context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.color
        context.stroke();
        
}
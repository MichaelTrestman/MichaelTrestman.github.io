 
var colorS = [ '#143333', '#5C0000', 'CCCC00', 'B24700', 'brown', 'purple', 'pink']
    
var pC = {
  pos: [ (canvas.width / 2), (canvas.height / 2)],
  color: '#FF0000',
  rate: [0, 0],
  radius: 35,
  moveSpeed: 30,
  circ: [0, (2 * Math.PI)]
}

var pC2 = {
  pos: [ (40 + canvas.width / 2), (canvas.height / 2)],
  color: '#006600',
  rate: [0, 0],
  radius: 35,
  moveSpeed: 30,
  circ: [0, (2 * Math.PI)]
}

var pCGravity = function(thing){
  thing.rate[1] += 1;
}

var pCFriction = function(thing){

  thing.rate[0] = thing.rate[0] * 99/100;
  thing.rate[1] = thing.rate[1] * 99/100;
}


var pCMove = function(thing){ 
  if (thing.pos[0] < 0 || thing.pos[0] > canvas.width ) { thing.rate[0] = -thing.rate[0]};

  if (thing.pos[1] < 0 || thing.pos[1] > canvas.height ) { thing.rate[1] = -thing.rate[1]};
	
  var oldRate = [ thing.rate[0], thing.rate[1] ];
	

  document.addEventListener('keydown', function(event) 
  {
    if(event.keyCode == 37) {
    //left
    	if (oldRate[0] < -1) {
    		thing.rate[1] = 0;
    	 } else {thing.rate[1] = oldRate[1]};
    	
      thing.rate[0] = -thing.moveSpeed;

      //console.log("left" + thing.posX);
      
    } else if(event.keyCode == 39){

    //right
      if (oldRate[0] > 1) {
    		thing.rate[1] = 0;
    	 } else {thing.rate[1] = oldRate[1]};


    	
      thing.rate[0] = thing.moveSpeed;
      //console.log("right" + thing.posX);
    } else if(event.keyCode == 38){
    //up

      if (oldRate[1] < -1) {
    		thing.rate[0] = 0;
    	 } else {thing.rate[0] = oldRate[0]};

      thing.rate[1] = -thing.moveSpeed;
      //console.log("up" + thing.posY);

    } else if(event.keyCode == 40){
    //down
      if (oldRate[1] > 1) {
    		thing.rate[0] = 0;
    	 } else {thing.rate[0] = oldRate[0]};
      thing.rate[1] = thing.moveSpeed;
      //console.log("down" + thing.posY);
    
    } else if(event.keyCode == 32){
      thing.rate[1] = 0;
      thing.rate[0] = 0;
      //console.log("stop" + thing.posY);
    
    

    } else if (event.keyCode == 80){ 
      
      pauseNow = true;

    } else if ( (event.keyCode == 71) && (gravity == false) ){ 
      gravity = true;
    } else if ( (event.keyCode == 84) && (gravity == true) ){ 
      gravity = false;
    } else if ( (event.keyCode == 71) && (gravity == false) ){ 
      gravity = true;
    } else if ( (event.keyCode == 84) && (gravity == true) ){ 
      gravity = false;

    } else if ( event.keyCode == 82 ){ 
      friction = false;
    } else if ( event.keyCode == 70 ){ 
      friction = true;
    } else if ( event.keyCode == 77 ){ 
      mouseControlled = 1;
    } else if ( event.keyCode == 78 ){ 
      mouseControlled = 0;
    } else if ( event.keyCode == 89 ){ 
      trail = true;
    } else if ( event.keyCode == 85 ){ 
      trail = false;
    };
  });

  thing.pos[0] += thing.rate[0];
  thing.pos[1] += thing.rate[1];

};

var pC2Move = function(thing){ 
  if (thing.pos[0] < 0 || thing.pos[0] > canvas.width ) { thing.rate[0] = -thing.rate[0]};

  if (thing.pos[1] < 0 || thing.pos[1] > canvas.height ) { thing.rate[1] = -thing.rate[1]};
  
  var oldRate = [ thing.rate[0], thing.rate[1] ];
  

  document.addEventListener('keydown', function(event) 
  {
    if(event.keyCode == 65) {
    //a
      if (oldRate[0] < -1) {
        thing.rate[1] = 0;
       } else {thing.rate[1] = oldRate[1]};
      
      thing.rate[0] = -thing.moveSpeed;

      //console.log("left" + thing.posX);
      
    } else if(event.keyCode == 68){

    //right
      if (oldRate[0] > 1) {
        thing.rate[1] = 0;
       } else {thing.rate[1] = oldRate[1]};


      
      thing.rate[0] = thing.moveSpeed;
      //console.log("right" + thing.posX);
    } else if(event.keyCode == 87){
    //up

      if (oldRate[1] < -1) {
        thing.rate[0] = 0;
       } else {thing.rate[0] = oldRate[0]};

      thing.rate[1] = -thing.moveSpeed;
      //console.log("up" + thing.posY);

    } else if(event.keyCode == 83){
    //down
      if (oldRate[1] > 1) {
        thing.rate[0] = 0;
       } else {thing.rate[0] = oldRate[0]};
      thing.rate[1] = thing.moveSpeed;
      //console.log("down" + thing.posY);
    
    } else if(event.keyCode == 67){
      thing.rate[1] = 0;
      thing.rate[0] = 0;
      //console.log("stop" + thing.posY);
    
    

    }; 
  }
  );

  thing.pos[0] += thing.rate[0];
  thing.pos[1] += thing.rate[1];

};


var renderPC = function(thing){
        //context.clearRect(0,0,canvas.width,canvas.height)
        context.beginPath();
        context.arc(thing.pos[0], thing.pos[1], thing.radius, thing.circ[0], thing.circ[1], false);
        context.fillStyle = thing.color;
        context.fill();
        context.lineWidth = 25;
        context.strokeStyle = 'black'
        context.stroke();

      }

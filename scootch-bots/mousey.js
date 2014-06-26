function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      // var canvas = document.getElementById('myCanvas');
      // var context = canvas.getContext('2d');

      canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
        //document.getElementById("headLine").innerHTML=message;



        //context.clearRect(0,0,canvas.width,canvas.height)
        //circ: [0, (2 * Math.PI)]

/*
        context.beginPath();
        context.arc(mousePos.x, mousePos.y, 50, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = 'black'
        context.stroke();
*/
        if (mouseControlled == 1){
          pC2.pos = [mousePos.x, mousePos.y];
        } else if (mouseControlled == 0){
          pC.pos = [mousePos.x, mousePos.y];
        }


        
      }, false);






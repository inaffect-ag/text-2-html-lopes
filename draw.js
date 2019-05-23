
function startDraw(userInput) {
  var canvas = document.getElementById('drawCanvas');
  var userInput = document.getElementById('userInput').value;
  if(canvas.getContext) {
    var context = canvas.getContext('2d');
    if(userInput.includes("Rechteck") || userInput.includes("Quadrat")) {
      drawRect(context, userInput);
    }
    if(userInput.includes("Dreieck")) {
      drawTriangle(context, userInput);
    }
    if(userInput.includes("Bild")) {
      getImage(context);
    }
  }


  /*if(canvas.getContext) {
    var context = canvas.getContext('2d');
    if(userInput === "Zeichne ein Rechteck mit 1px Rand") {
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = "black";
      context.rect(25,25,100,100);
      context.stroke();
    } if (userInput === "Zeichne ein Rechteck mit 200px Breite und 300px Hoehe") {
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = "black";
      context.rect(25,25,200,300);
      context.stroke();
    }
  }*/
}

function drawRect(context, textInput) {
  var figureWidth = 100;
  var figureHeight = 100;
  var userLineWidth = 1;
  var background = "white";
  var fillText = "Ich bin ein Rechteck";
  if(textInput.includes("200px Breite")) {
    figureWidth = 200;
  }
  if(textInput.includes("Quadrat") && textInput.includes("200px Breite")) {
    figureWidth = 200;
    figureHeight = 200;
  }
  if(textInput.includes("300px Hoehe")) {
    figureHeight = 300;
  }
  if(textInput.includes("1px Rand")) {
    userLineWidth = 1;
  }
  /**
   * Check if background color
   */
  if(textInput.includes("Hintergrundfarbe")) {
    if(textInput.includes("Rot")) {
      background = "#FF0000";
    }
    if(textInput.includes("Blau")) {
      background = "#0000FF";
    } 
    context.fillStyle = background;
    context.fillRect(25, 25, figureWidth, figureHeight);
    if(textInput.includes("1px Rand")) {
      context.rect(25,25,figureWidth,figureHeight);
      userLineWidth = 1;
      //context.fillStyle = background;
      context.fill();
      context.lineWidth = userLineWidth;
      context.strokeStyle = "black";
      context.stroke();
    }
  }
  else {
    //context.beginPath();
    context.lineWidth = userLineWidth;
    context.strokeStyle = "black";
    context.rect(25,25,figureWidth,figureHeight);
    context.stroke();
  }
  /**
   * Checks if text is needed
   */

  if(textInput.includes("Text")) {
    if(textInput.includes("Lato")) {
      context.font = "Lato";
    }
    if(textInput.includes("Roboto")) {
      context.font = "bold 12px Roboto";
    }
    context.fillText(fillText, 30, 50);
  } 
}

function drawTriangle(context, textInput) {
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 300);
  context.lineTo(300, 100);
  context.closePath();

  context.lineWidth = 1;
  context.stroke();
}

function getImage(context) {
  var backgroundImage = new Image();
  backgroundImage.src ="https://www.inaffect.net/assets/images/portfolio/portfolio_2-2_yoojis.jpg";
  context.drawImage(backgroundImage,0,0);
}

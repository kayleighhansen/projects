const context = document.querySelector("canvas").getContext("2d");

//set the size of the window
context.canvas.height = 400;
context.canvas.width = 800;

let frameCount = 1;
// Set the number of obstacles to match the current "level"
let obCount = frameCount;
// Create a collection to hold the generated x coordinates
const obXCoors = [];

const shoe = {
  height: 32,
  jumping: true,
  width: 32,
  x: 50,
  xVelocity: 0,
  y: 50,
  yVelocity: 0,
  source: 'shoe.png',
  type: 'image'
};

// Create the obstacles for each frame
const nextFrame = () => {
  // increase the frame / "level" count
  frameCount++;
  
  for (let i = 0; i < obCount; i++) {
    // Randomly generate the x coordinate for the top corner start of the triangles
    obXCoor = Math.floor(Math.random() * (750 - 140 + 1) + 140);
    obXCoors.push(obXCoor);
  }
}

const controller = {
  left: false,
  right: false,
  up: false,

  keyListener: function (event) {

    var key_state = (event.type == "keydown") ? true : false;

    switch (event.keyCode) {
      case 37:// left key- LEFT
        controller.left = key_state;
        break;
      case 40:// down key- STOMP
        controller.up = key_state;
        break;
      case 39:// right key- RIGHT
        controller.right = key_state;
        break;
    }
  }
};

const gameLoop = function () {

  if (controller.up && shoe.jumping == false) {
    shoe.yVelocity -= 20;
    shoe.jumping = true;
  }

  if (controller.left) {
    shoe.xVelocity -= 0.5;
  }

  if (controller.right) {
    shoe.xVelocity += 0.5;
  }

  shoe.yVelocity += 1.5;// gravity
  shoe.x += shoe.xVelocity;
  shoe.y += shoe.yVelocity;
  shoe.xVelocity *= 0.9;// friction
  shoe.yVelocity *= 0.9;// friction

  // if shoe is falling below floor line
  if (shoe.y > 386 - 16 - 32) {
    shoe.jumping = false;
    shoe.y = 386 - 16 - 32;
    shoe.yVelocity = 0;
  }

  // if shoe is going off the left of the screen
  if (shoe.x < -20) {
    shoe.x = 800;
  } 
  else if (shoe.x > 800) {// if shoe goes past right boundary
    shoe.x = -20;
    nextFrame();
  }

  // Creates the backdrop for each frame
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, 800, 400); // x, y, width, height


  // Creates and fills the cube for each frame
  context.fillStyle = "#8DAA9D";
  
  context.beginPath();
  context.rect(shoe.x, shoe.y, shoe.width, shoe.height);
  context.fill();


  // Create the obstacles for each frame

  // Set the standard obstacle height
    const height = 200 * Math.cos(Math.PI / 6);

    context.fillStyle = '#c1b09e'; // hex for triangle color
    obXCoors.forEach((obXCoor) => {
    context.beginPath();

    context.moveTo(obXCoor, 385); // x = random, y = coor. on "ground"
    context.lineTo(obXCoor + 20, 385); // x = ^random + 20, y = coor. on "ground"
    context.lineTo(obXCoor + 10, 510 - height); // x = ^random + 10, y = peak of triangle
  
    context.closePath();
    context.fill();
  })

  // Creates the "ground" for each frame
  context.strokeStyle = "#2E2532";
  context.lineWidth = 30;
  context.beginPath();
  context.moveTo(0, 385);
  context.lineTo(1220, 385);
  context.stroke();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(gameLoop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(gameLoop);

   
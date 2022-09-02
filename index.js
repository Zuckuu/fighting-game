const canvas = document.querySelector("canvas"); // getting the canvas from html
const c = canvas.getContext("2d"); // 2d because this is a 2d game

//setting the size of canvas
canvas.width = 1024;
canvas.height = 576;

const gravity = 0.2;

//setting the position
class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  //drawing the sprite
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  //updating the frame
  update() {
    this.draw(); //calling the draw method

    this.position.y += this.velocity.y; //adding the gravity to the sprite's y position

    //this makes it so that sprite dont fall out the screen
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  }
}

const player = new Sprite({
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
});

const player2 = new Sprite({
  position: { x: 900, y: 0 },
  velocity: { x: 0, y: 0 },
});

console.log(player);

//animate loop
function animate() {
  window.requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player2.update();
}

animate();

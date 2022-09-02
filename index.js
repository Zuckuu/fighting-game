const canvas = document.querySelector('canvas'); // getting the canvas from html
const c = canvas.getContext('2d'); // 2d because this is a 2d game


//setting the position
class Sprite {
  constructor(position){
    this.position = position;
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 10, 30)
  }
}

const player = new Sprite({
  x : 0,
  y : 0,
})

player.draw();

console.log(player);
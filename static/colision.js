function dessiner() {
  var ctx = document.getElementById('canvas-background').getContext('2d');

    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(50, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(250, 400);
    ctx.lineTo(300, 400);
    ctx.lineTo(300, 250);
    ctx.lineTo(600, 250);
    ctx.lineTo(600, 200);
    ctx.lineTo(400, 200);
    ctx.lineTo(400, 100);
    ctx.lineTo(500, 100);
    ctx.lineTo(500, 50);
    ctx.lineTo(350, 50);
    ctx.lineTo(350, 200);
    ctx.lineTo(150, 200);
    ctx.lineTo(150, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(100, 200);
    ctx.fill();
    console.log('pouf');
    
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(25, 25, 50, 50);
}

dessiner();

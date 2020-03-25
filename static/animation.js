let zebulon = {
    x: 50,
    y: 200,
    width: 50,
    height: 50,
    canvas: document.getElementById('canvas-slices').getContext('2d')
}

let images = {
    zebulon: './static/zebulon.png'
};

init_gamer_x = 50;
init_gamer_y = 200;
loadImages(images, function(images) {
    zebulon.canvas.drawImage(
        images.zebulon, zebulon.x, zebulon.y, 200, 50
    );
});

document.onkeydown = checkKey;

function move(zebulon, x, y) {
    zebulon.x += x;
    zebulon.y += y;
    if (!is_in_path(colision_path_level_1, zebulon)) {
        zebulon.x -= x;
        zebulon.y -= y;
    }
}

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log('haut');
        move(zebulon, 0, -10);
    }
    else if (e.keyCode == '40') {
        console.log('bas');
        move(zebulon, 0, 10);
    }
    else if (e.keyCode == '37') {
        console.log('gauche');
        move(zebulon, -10, 0);
    }
    else if (e.keyCode == '39') {
        console.log('droite');
        move(zebulon, 10, 0);
    }
    loadImages(images, function(images) {
        zebulon.canvas.clearRect(0, 0, 800, 600);
        zebulon.canvas.drawImage(
            images.zebulon, zebulon.x, zebulon.y, 200, 50
        );
    });
}

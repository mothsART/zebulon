let zebulon = {
    x: 10,
    y: 305,
    width: 36,
    height: 40,
    canvas: document.getElementById('canvas-slices').getContext('2d')
}

let images = {
    zebulon: './static/zebulon.png'
};

let intro_element = document.getElementById('intro');
let game_element = document.getElementById('game');

loadImages(images, function(images) {
    zebulon.canvas.drawImage(
        images.zebulon,
        zebulon.x,
        zebulon.y,
        zebulon.width,
        zebulon.height
    );
});

document.onkeydown = checkKey;

function load_game() {
    intro_element.classList.remove('hidden');
}

function start_game() {
    intro_element.classList.add('hidden');
    game_element.classList.remove('hidden');
}

function move(zebulon, x, y) {
    zebulon.x += x;
    zebulon.y += y;
    if (!is_in_path(colision_path_level_1, zebulon)) {
        zebulon.x -= x;
        zebulon.y -= y;
    }
}

let nb_items = document.getElementById('nb-items');
function increment_score() {
    nb_items.innerText = parseInt(nb_items.innerText) + 1;
}
let catching_items = [];
let is_right = true;
let gate_is_visible = false;

function checkKey(e) {
    e = e || window.event;
    if (
        e.keyCode == '13'
        && !intro_element.classList.contains('hidden')
    ) {
        start_game();
    }
    if (e.keyCode == '38') {
        //console.log('top');
        move(zebulon, 0, -10);
    }
    if (e.keyCode == '40') {
        //console.log('bottom');
        move(zebulon, 0, 10);
    }
    if (e.keyCode == '37') {
        //console.log('left');
        move(zebulon, -10, 0);
        is_right = false;
    }
    if (e.keyCode == '39') {
        //console.log('right');
        move(zebulon, 10, 0);
        is_right = true;
    }
    loadImages(images, function(images) {
        zebulon.canvas.clearRect(0, 0, 800, 600);
        if (is_right) {
            document.getElementById('canvas-slices').classList.remove('invert');
            zebulon.canvas.translate(
                zebulon.x - zebulon.width,
                zebulon.y - zebulon.height
            );
        }
        else {
            document.getElementById('canvas-slices').classList.add('invert');
            zebulon.canvas.translate(
                800 - 2 * zebulon.width - zebulon.x,
                zebulon.y - zebulon.height
            );
        }
        zebulon.canvas.drawImage(
            images.zebulon,
            zebulon.width,
            zebulon.height
        );
        zebulon.canvas.setTransform(1, 0, 0, 1, 0, 0);
    });

    loadImages(items_img, function(items_img) {
        for (item of items) {
            if (item_collision(zebulon, catching_items, item)) {
                increment_score();
                items_canvas.clearRect(
                    20,
                    110,
                    20,
                    31
                );
                items_canvas.clearRect(
                    item.x,
                    item.y,
                    item.width,
                    item.height
                );
            }
        }
    });
    if (!gate_is_visible && catching_items.length === items.length) {
        gate_is_visible = true;
        loadImages(gate_img, function(gate_img) {
            gate_canvas.drawImage(
                gate_img[0],
                gate.x,
                gate.y,
                gate.width,
                gate.height
            );
        });
    }
    if (gate_is_visible && gate_colision(zebulon, gate)) {
        console.log('win!');
    }
}

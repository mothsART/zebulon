const zebulon = {
    canvas: document.getElementById('canvas-slices').getContext('2d'),
    init: function (x, y, debug) {
        this.debug = debug;
        this.is_right = true;
        this.coord = {
            x: x,
            y: y,
            width: 36,
            height: 40,
        };
        loadImages(images, function(images) {
            zebulon.canvas.drawImage(
                images.zebulon,
                zebulon.coord.x,
                zebulon.coord.y,
                zebulon.coord.width,
                zebulon.coord.height
            );
        });
    },
    _move: function (x, y, title) {
        this.coord.x += x;
        this.coord.y += y;
        if (!colision.is_in_path(zebulon.coord)) {
            this.coord.x -= x;
            this.coord.y -= y;
        }
        if (this.debug) {
            console.log(title);
        }
    },
    move_top: function() {
        zebulon._move(0, -10, 'top');
    },
    move_bottom: function() {
        zebulon._move( 0, 10, 'bottom');
    },
    move_right: function() {
        zebulon._move(10, 0, 'right');
        zebulon.is_right = true;
    },
    move_left: function() {
        zebulon._move(-10, 0, 'left');
        zebulon.is_right = false;
    }
}

let images = {
    zebulon: './static/zebulon.png'
};

let intro_element = document.getElementById('intro');
let game_element = document.getElementById('game');
let level_1_el = document.getElementById('level-1');
let level_2_el = document.getElementById('level-2');


let active_level = null;

document.onkeydown = checkKey;

function load_game() {
    intro_element.classList.remove('hidden');
}

function start_game() {
    intro_element.classList.add('hidden');
    game_element.classList.remove('hidden');
    active_level = level_1;
    active_level.start();
}

function checkKey(e) {
    e = e || window.event;
    if (
        e.keyCode == '13'
        && !intro_element.classList.contains('hidden')
    ) {
        start_game();
        return;
    }
    if (e.keyCode == '38') {
        zebulon.move_top();
    }
    if (e.keyCode == '40') {
        zebulon.move_bottom();
    }
    if (e.keyCode == '37') {
        zebulon.move_left();
    }
    if (e.keyCode == '39') {
        zebulon.move_right();
    }
    loadImages(images, function(images) {
        zebulon.canvas.clearRect(0, 0, 800, 600);
        if (zebulon.is_right) {
            document.getElementById('canvas-slices').classList.remove('invert');
            zebulon.canvas.translate(
                zebulon.coord.x - zebulon.coord.width,
                zebulon.coord.y - zebulon.coord.height
            );
        } else {
            document.getElementById('canvas-slices').classList.add('invert');
            zebulon.canvas.translate(
                800 - 2 * zebulon.coord.width - zebulon.coord.x,
                zebulon.coord.y - zebulon.coord.height
            );
        }
        zebulon.canvas.drawImage(
            images.zebulon,
            zebulon.coord.width,
            zebulon.coord.height
        );
        zebulon.canvas.setTransform(1, 0, 0, 1, 0, 0);
    });
    items.refresh();

    if (
        !gate.is_visible
        && colision.catching_items.length === items.items_data.length
    ) {
        gate.show();
    }
    if (gate.is_visible && colision.gate_colision(zebulon.coord, gate.coord)) {
        active_level = active_level.next();
    }
}

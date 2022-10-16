let images = {
    zebulon: './static/zebulon.png'
};

const zebulon = {
    canvas_el: document.getElementById('canvas-slices'),
    canvas: document.getElementById('canvas-slices').getContext('2d'),
    init: function (x, y, debug) {
        this.gravity_id = null;
        this.gravity_first_fall = true;
        this.debug = debug;
        this.is_right = true;
        this.step_indice = 0;
        this.gap = 0;
        this.step = {
            0: 0,
            1: 39,
            2: 78,
            3: 117,
            4: 156,
            5: 194,
            6: 231,
            7: 273
        };
        this.coord = {
            x: x,
            y: y,
            width: 40,
            height: 44,
        };
        this.canvas.clearRect(0, 0, 800, 600);
        loadImages(images, function(images) {
            zebulon.canvas.drawImage(
                images.zebulon,
                zebulon.step[zebulon.step_indice],
                0,
                zebulon.coord.width,
                zebulon.coord.height,
                zebulon.coord.x,
                zebulon.coord.y - 3,
                zebulon.coord.width,
                zebulon.coord.height
            );
        });
    },
    refresh: function (key_code) {
        if (key_code == '38')
            zebulon.move_top();
        if (key_code == '40')
            zebulon.move_bottom();
        if (key_code == '37') {
            zebulon.move_left();
            zebulon.step_indice -= 1;
            if (zebulon.step_indice < 0)
                zebulon.step_indice = 7;
        }
        if (key_code == '39') {
            zebulon.move_right();
            zebulon.step_indice += 1;
            if (zebulon.step_indice >= 8)
                zebulon.step_indice = 0;
        }

        loadImages(images, function(images) {
            zebulon.canvas.clearRect(0, 0, 800, 600);
            if (zebulon.is_right && zebulon.canvas_el.classList.contains('invert')) {
                zebulon.canvas_el.classList.remove('invert');
                zebulon.gap = 0;
            }
            if (!zebulon.is_right && !zebulon.canvas_el.classList.contains('invert')) {
                zebulon.canvas_el.classList.add('invert');
            }
            move_x = zebulon.coord.x;
            if (zebulon.canvas_el.classList.contains('invert'))
                 move_x = 800 - zebulon.coord.width - zebulon.coord.x;

            zebulon.canvas.drawImage(
                images.zebulon,
                zebulon.step[zebulon.step_indice],
                0,
                zebulon.coord.width,
                zebulon.coord.height,
                move_x,
                zebulon.coord.y - 3,
                zebulon.coord.width,
                zebulon.coord.height
            );
            zebulon.canvas.setTransform(1, 0, 0, 1, 0, 0);
        });
    },
    _move: function (x, y, title) {
        this.coord.x += x;
        this.coord.y += y;
        if (!this.gravity_id && colision.is_in_path(zebulon.coord, true)) {
            this.gravity_id = setInterval(this.gravity, 50);
        }
        if (!colision.is_in_path(zebulon.coord)) {
            this.coord.x -= x;
            this.coord.y -= y;
            return;
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
    },
    gravity: function () {
        if (
            !zebulon.gravity_first_fall
            && colision.is_in_path(zebulon.coord)
        ) {
            clearInterval(zebulon.gravity_id);
            zebulon.gravity_id = null;
            zebulon.gravity_first_fall = true;
            return;
        }
        zebulon.coord.y += 10;
        zebulon.refresh();
        zebulon.gravity_first_fall = false;
    }
}

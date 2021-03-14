let ladders_canvas = document.getElementById('canvas-ladders-1').getContext('2d');

let ladders_img = {
    horizontal: document.getElementById("img-ladder-horizontal"),
    vertical: document.getElementById("img-ladder-vertical")
};

const ladders = {
    init: function(ladders_data) {
        ladders_canvas.clearRect(0, 0, 800, 600);
        for (ladder of ladders_data) {
            this._horizontal_tiles(ladders_img.horizontal, ladder, 1, 3, 10);
            this._vertical_tiles(ladders_img.vertical, ladder, 3, 1);
        }
    },
    _horizontal_tiles: function (img, ladder, width, height, space) {
        let increment = ladder.height / space;
        for (let i = 0; i < increment; i++) {
            ladders_canvas.drawImage(
                img,
                ladder.x,
                ladder.y + i * space,
                ladder.width,
                height
            );
        }
    },
    _vertical_tiles: function (img, ladder, width, height) {
        ladders_canvas.drawImage(
            img,
            ladder.x,
            ladder.y,
            width,
            ladder.height
        );
        ladders_canvas.drawImage(
            img,
            ladder.x + ladder.width - width,
            ladder.y,
            width,
            ladder.height
        );
    }
}



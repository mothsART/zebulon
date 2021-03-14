let floor_canvas = document.getElementById('canvas-floor-1').getContext('2d');

let floor_img = document.getElementById("img-floor");

function floor_tiles(img, floor, width) {
    let nb_inc = floor.width / width;
    for (let i = 0; i < nb_inc; i++) {
        floor_canvas.drawImage(
            img,
            floor.x + i * width,
            floor.y,
            width,
            floor.height
        );
    }
}

const floors = {
    init: function (floors_data) {
        floor_canvas.clearRect(0, 0, 800, 600);
        for (floor of floors_data) {
            floor_tiles(floor_img, floor, 50);
        }
    }
}

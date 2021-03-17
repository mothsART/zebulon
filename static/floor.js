let floor_canvas = document.getElementById('canvas-floor').getContext('2d');

function floor_tiles(floor_img_el, floor, width) {
    let nb_inc = floor.width / width;
    for (let i = 0; i < nb_inc; i++) {
        floor_canvas.drawImage(
            floor_img_el,
            floor.x + i * width,
            floor.y,
            width,
            floor.height
        );
    }
}

const floors = {
    init: function (floors_data, floor_img_el) {
        floor_canvas.clearRect(0, 0, 800, 600);
        for (floor of floors_data) {
            floor_tiles(floor_img_el, floor, 50);
        }
    }
}

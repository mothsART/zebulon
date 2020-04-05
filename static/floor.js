let floor_canvas = document.getElementById('canvas-floor').getContext('2d');

let floor_img = document.getElementById("img-floor");

let floors = [
    {
        x: 0,
        y: 90,
        width: 150,
        height: 50
    },
    {
        x: 200,
        y: 90,
        width: 450,
        height: 50
    },
    {
        x: 700,
        y: 90,
        width: 100,
        height: 50
    },

    {
        x: 0,
        y: 190,
        width: 500,
        height: 50
    },
    {
        x: 550,
        y: 190,
        width: 250,
        height: 50
    },
    {
        x: 0,
        y: 340,
        width: 100,
        height: 50
    },
    {
        x: 150,
        y: 340,
        width: 500,
        height: 50
    },
    {
        x: 700,
        y: 340,
        width: 100,
        height: 50
    },
    {
        x: 0,
        y: 440,
        width: 500,
        height: 50
    },
    {
        x: 550,
        y: 440,
        width: 250,
        height: 50
    },
    {
        x: 0,
        y: 540,
        width: 800,
        height: 50
    }
];

function floor_tiles(img, floor, width) {
    let nb_inc = floor.width / width;
    for (let i = 0; i < nb_inc; i++) {
        ladders_canvas.drawImage(
            img,
            floor.x + i * width,
            floor.y,
            width,
            floor.height
        );
    }
}

for (floor of floors) {
    floor_tiles(floor_img, floor, 50);
}

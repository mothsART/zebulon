let ladders_canvas = document.getElementById('canvas-ladders').getContext('2d');

let ladders_img = {
    horizontal: document.getElementById("img-ladder-horizontal"),
    vertical: document.getElementById("img-ladder-vertical")
};

let ladders = [
    {
        x: 150,
        y: 100,
        width: 50,
        height: 100
    },
    {
        x: 650,
        y: 100,
        width: 50,
        height: 100
    },
    {
        x: 500,
        y: 200,
        width: 50,
        height: 150
    },
    {
        x: 100,
        y: 350,
        width: 50,
        height: 100
    },
    {
        x: 650,
        y: 350,
        width: 50,
        height: 100
    },
    {
        x: 500,
        y: 450,
        width: 50,
        height: 100
    }
];

function horizontal_tiles(img, ladder, width, height, space) {
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
}

function vertical_tiles(img, ladder, width, height) {
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

for (ladder of ladders) {
    horizontal_tiles(ladders_img.horizontal, ladder, 1, 3, 10);
    vertical_tiles(ladders_img.vertical, ladder, 3, 1);
}

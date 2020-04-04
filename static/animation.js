let zebulon = {
    x: 10,
    y: 355,
    width: 36,
    height: 40,
    canvas: document.getElementById('canvas-slices').getContext('2d')
}

let images = {
    zebulon: './static/zebulon.png'
};

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

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        //console.log('top');
        move(zebulon, 0, -10);
    }
    else if (e.keyCode == '40') {
        //console.log('bottom');
        move(zebulon, 0, 10);
    }
    else if (e.keyCode == '37') {
        //console.log('left');
        move(zebulon, -10, 0);
    }
    else if (e.keyCode == '39') {
        //console.log('right');
        move(zebulon, 10, 0);
    }
    let catch_item = item_collision(zebulon, catching_items, items[0]);
    loadImages(images, function(images) {
        zebulon.canvas.clearRect(0, 0, 800, 600);
        zebulon.canvas.drawImage(
            images.zebulon,
            zebulon.x,
            zebulon.y,
            zebulon.width,
            zebulon.height
        );
    });
    loadImages(items_img, function(items_img) {
        for (item of items) {
            if (item_collision(zebulon, catching_items, item)) {
                increment_score();
                items_canvas.clearRect(
                    item.x,
                    item.y,
                    item.width,
                    item.height
                );
            }
        }
    });
}

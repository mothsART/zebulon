let items_canvas = document.getElementById('canvas-items-1').getContext('2d');

let items_img = ['./static/ice.png'];

function create_ice_item(x, y) {
    return {
        x: x,
        y: y,
        width: 20,
        height: 31
    };
}

const items = {
    init: function(items_data) {
        this.items_data = items_data;
        items_canvas.clearRect(0, 0, 800, 600);
        loadImages(items_img, function(items_img) {
            for (item of items_data) {
                items_canvas.drawImage(
                    items_img[0],
                    item.x,
                    item.y,
                    item.width,
                    item.height
                );
            }
        });
    },
    refresh: function () {
        loadImages(items_img, function(items_img) {
            for (item of items.items_data) {
                if (colision.item_collision(zebulon.coord, item)) {
                    score.increment();
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
    }
}

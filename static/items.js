let items_canvas = document.getElementById('canvas-items').getContext('2d');

function create_ice_item(x, y) {
    return {
        x: x,
        y: y,
        width: 20,
        height: 31
    };
}

const items = {
    init: function(items_data, item_img) {
        items.items_data = items_data;
        items_canvas.clearRect(0, 0, 800, 600);
        for (item of items_data) {
            items_canvas.drawImage(
                item_img,
                item.x,
                item.y,
                item.width,
                item.height
            );
        }
    },
    refresh: function () {
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
    }
}

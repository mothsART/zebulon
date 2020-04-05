let items_canvas = document.getElementById('canvas-items').getContext('2d');

let items_img = ['./static/ice.png'];

function create_ice_item(x, y) {
    return {
        x: x,
        y: y,
        width: 20,
        height: 31
    };
}

let items = [
    create_ice_item(40, 60),
    create_ice_item(100, 160),
    create_ice_item(350, 160),
    create_ice_item(760, 160),
    create_ice_item(250, 310),
    create_ice_item(760, 310),
    create_ice_item(350, 410),
    create_ice_item(50, 510),
    create_ice_item(350, 510),
    create_ice_item(760, 510)
];

loadImages(items_img, function(items_img) {
    for (item of items) {
        items_canvas.drawImage(
            items_img[0],
            item.x,
            item.y,
            item.width,
            item.height
        );
    }
});

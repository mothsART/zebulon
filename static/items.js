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
    create_ice_item(20, 110),
    create_ice_item(100, 210),
    create_ice_item(350, 210),
    create_ice_item(760, 210),
    create_ice_item(250, 360),
    create_ice_item(760, 360),
    create_ice_item(350, 460),
    create_ice_item(50, 560),
    create_ice_item(350, 560),
    create_ice_item(760, 560)
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

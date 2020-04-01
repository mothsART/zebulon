let items_canvas = document.getElementById('canvas-items').getContext('2d');

let items_img = ['./static/ice.png'];

let items = [
    {
        x: 160,
        y: 210,
        width: 20,
        height: 31
    },
    {
        x: 260,
        y: 210,
        width: 20,
        height: 31
    }
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

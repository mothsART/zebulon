let items_canvas = document.getElementById('canvas-items').getContext('2d');

let items_img = ['./static/ice.png'];

let items = [
    {
        x: 20,
        y: 110,
        width: 20,
        height: 31
    },
    {
        x: 80,
        y: 210,
        width: 20,
        height: 31
    },
    {
        x: 350,
        y: 210,
        width: 20,
        height: 31
    },
    {
        x: 760,
        y: 210,
        width: 20,
        height: 31
    },
    {
        x: 250,
        y: 360,
        width: 20,
        height: 31
    },
    {
        x: 760,
        y: 360,
        width: 20,
        height: 31
    },
    {
        x: 350,
        y: 460,
        width: 20,
        height: 31
    },
    {
        x: 50,
        y: 560,
        width: 20,
        height: 31
    },
    {
        x: 350,
        y: 560,
        width: 20,
        height: 31
    },
    {
        x: 760,
        y: 560,
        width: 20,
        height: 31
    },
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

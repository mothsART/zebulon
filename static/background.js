let backgrounds = {
    bg1: './static/step/bg_level1.png'
};

bg_canvas = document.getElementById('canvas-background').getContext('2d');

loadImages(backgrounds, function(backgrounds) {
    bg_canvas.drawImage(
        backgrounds.bg1,
        0,
        0,
        800,
        600
    );
});

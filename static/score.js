let score_canvas = document.getElementById('canvas-score').getContext('2d');

let score_img = ['./static/ice.png'];


loadImages(score_img, function(score_img) {
    score_canvas.drawImage(
        score_img[0],
        450,
        20,
        20,
        31
    );
});

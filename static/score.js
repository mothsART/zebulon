let score_canvas = document.getElementById('canvas-score').getContext('2d');

let score_img = ['./static/ice.png'];


const nb_items_el = document.getElementById('nb-items');

const score = {
    init: function () {
        loadImages(score_img, function(score_img) {
            score_canvas.drawImage(
                score_img[0],
                460,
                20,
                20,
                31
            );
        });
        this.clear();
    },
    increment: function () {
        nb_items_el.innerText = parseInt(nb_items_el.innerText) + 1;
    },
    clear: function () {
        nb_items_el.innerText = 0;
    }
}

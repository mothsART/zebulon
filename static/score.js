let score_canvas = document.getElementById('canvas-score').getContext('2d');

const nb_items_el = document.getElementById('nb-items');

const score = {
    init: function (score_img_el) {
        score_canvas.clearRect(460, 20, 20, 31);
        score_canvas.drawImage(
            score_img_el,
            460,
            20,
            20,
            31
        );
        score.clear();
    },
    increment: function () {
        nb_items_el.innerText = parseInt(nb_items_el.innerText) + 1;
    },
    clear: function () {
        nb_items_el.innerText = 0;
    }
}

const background = {
    ctx: document.getElementById('canvas-background').getContext('2d'),
    show: function(backgroud_el) {
        background.ctx.clearRect(0, 0, 800, 600);
        background.ctx.drawImage(
            backgroud_el,
            0,
            0,
            800,
            600
        );
    }
};

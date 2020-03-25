const pic = {
    ctx: document.getElementById('canvas-slices').getContext('2d'),
    init: function(src) {
        this.src = src;
    },
    slides: [],
    addSlide: function(x, y, width, height) {
        this.slides.push({
            x: x,
            y: y,
            width: width,
            height: height
        });
    },
    show: function() {
        let img = new Image();
        img.src = this.src;
        _ctx = this.ctx;
        img.onload = function() {
            _ctx.drawImage(
                img, 0, 0, img.width, img.height
            );
        };
        if (this.slides == [])
            return;
        let inc = 100;
        for (key in this.slides) {
            let slide = this.slides[key];
            _img = new Image();
            _img.src = this.src;
            _img.onload = function() {
                _ctx.drawImage(
                     _img,
                    slide.x, slide.y, slide.width, slide.height,
                    0, inc, slide.width, slide.height
                );
                inc += 100;
            };
        }
    }
}

pic.init('./static/zebulon.png');
pic.addSlide(0, 0, 70, 50);
pic.addSlide(75, 0, 70, 50);
pic.addSlide(140, 0, 70, 50);
pic.show();

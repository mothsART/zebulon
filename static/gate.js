let gate_canvas = document.getElementById('canvas-gate').getContext('2d');

let gate_img = ['./static/gate.png'];

const gate = {
    init: function(x, y) {
        this.is_visible = false;
        gate_canvas.clearRect(0, 0, 800, 600);
        this.coord = {
            x: x,
            y: y,
            width: 60,
            height: 70
        };
    },
    show: function() {
        self = this;
        loadImages(gate_img, function(gate_img) {
            gate_canvas.drawImage(
                gate_img[0],
                self.coord.x,
                self.coord.y,
                self.coord.width,
                self.coord.height
            );
        });
        this.is_visible = true;
    }
}

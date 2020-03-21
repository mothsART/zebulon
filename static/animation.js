function loadImage(src, images, sources, loadedImages, numImages, callback) {
    images[src] = new Image();
    images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
    };
    images[src].src = sources[src];
}

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
        loadImage(src, images, sources, loadedImages, numImages, callback);
    }
}

var context = document.getElementById('canvas-slices').getContext('2d');

var images = {
    zebulon: './static/zebulon.png'
};

init_gamer_x = 50;
init_gamer_y = 205;
loadImages(images, function(images) {
    context.drawImage(images.zebulon, init_gamer_x, init_gamer_y, 200, 50);
});

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log('haut');
        init_gamer_y -= 10;
    }
    else if (e.keyCode == '40') {
        console.log('bas');
        init_gamer_y += 10;
    }
    else if (e.keyCode == '37') {
        console.log('gauche');
        init_gamer_x -= 10;
    }
    else if (e.keyCode == '39') {
        console.log('droite');
        init_gamer_x += 10;
    }
    loadImages(images, function(images) {
        context.clearRect(0, 0, 800, 600);
        context.drawImage(images.zebulon, init_gamer_x, init_gamer_y, 200, 50);
    });
}

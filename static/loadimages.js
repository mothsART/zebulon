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

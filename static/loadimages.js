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
    let images = {};
    let loadedImages = 0;
    let numImages = 0;
    // get num of sources
    for(let src in sources) {
      numImages++;
    }
    for(let src in sources) {
        loadImage(src, images, sources, loadedImages, numImages, callback);
    }
}

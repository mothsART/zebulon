let zebulon_start_title = document.getElementById('canvas-intro-title').getContext('2d');
let intro_title_images = {
    title: './static/intro_title.png'
};
loadImages(intro_title_images, function(intro_title_images) {
    zebulon_start_title.drawImage(intro_title_images.title, 0, 0, 104, 51);
});

let zebulon_start = document.getElementById('canvas-intro').getContext('2d');
let intro_images = {
    zebulon: './static/zebulon_start.png'
};
loadImages(intro_images, function(intro_images) {
    zebulon_start.drawImage(intro_images.zebulon, 0, 0, 86, 59);
});

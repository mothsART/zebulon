/*let colision_path_level_1 = [
    [ 50, 200],
    [ 50, 250],
    [ 250, 250],
    [ 250, 400],
    [ 300, 400],
    [ 300, 250],
    [ 600, 250],
    [ 600, 200],
    [ 400, 200],
    [ 400, 100],
    [ 500, 100],
    [ 500, 50],
    [ 350, 50],
    [ 350, 200],
    [ 150, 200],
    [ 150, 100],
    [ 100, 100],
    [ 100, 200]
]*/

let colision_path_level_1 = [
    {
        x: 50,
        y: 200,
        width: 600,
        height: 50
    },
    {
        x: 150,
        y: 100,
        width: 50,
        height: 150
    }
]

function colision_draw(path) {
  let ctx = document.getElementById('canvas-background').getContext('2d');

    ctx.beginPath();
    for (rec of path) {
        ctx.moveTo(rec.x, rec.y);
        ctx.lineTo(rec.x + rec.width, rec.y);
        ctx.lineTo(rec.x + rec.width, rec.y + rec.height);
        ctx.lineTo(rec.x, rec.y + rec.height);
    }
    ctx.fill();
    
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(25, 25, 50, 50);
}

function point_in_rec(x, y, rec_path) {
    if (
        x >= rec_path.x
        && x <= rec_path.x + rec_path.width
        && y >= rec_path.y
        && y <= rec_path.y + rec_path.height
    ) {
        return true;
    }
    return false;
}

function item_collision(rec_player, item) {
    if (
        point_in_rec(
            item.x,
            item.y,
            rec_player
        )
        || point_in_rec(
            item.x + item.width,
            item.y,
            rec_player
        )
        || point_in_rec(
            item.x + item.width,
            item.y + item.height,
            rec_player
        )
        || point_in_rec(
            item.x,
            item.y + item.height,
            rec_player
        )
    ) {
        return true;
    }
    return false;
}

function is_in_rec(rec_player, rec_path) {
    if (
        point_in_rec(
            rec_player.x,
            rec_player.y,
            rec_path
        )
        && point_in_rec(
            rec_player.x + rec_player.width,
            rec_player.y,
            rec_path
        )
        && point_in_rec(
            rec_player.x + rec_player.width,
            rec_player.y + rec_player.height,
            rec_path
        )
        && point_in_rec(
            rec_player.x,
            rec_player.y + rec_player.height,
            rec_path
        )
    ) {
        return true;
    }
    return false;
}

function is_in_path(path, rec_player) {
    for (rec_path of path) {
        if (is_in_rec(rec_player, rec_path)) {
            return true;
        }
    }
    return false;
}

let colision_path_level_1 = [
    // horizontal
    {
        x: 0,
        y: 100,
        width: 800,
        height: 50
    },
    {
        x: 0,
        y: 200,
        width: 800,
        height: 50
    },
    {
        x: 0,
        y: 350,
        width: 800,
        height: 50
    },
    {
        x: 0,
        y: 450,
        width: 800,
        height: 50
    },
    {
        x: 0,
        y: 550,
        width: 800,
        height: 50
    },
    // vertical
    {
        x: 150,
        y: 100,
        width: 50,
        height: 150
    },
    {
        x: 500,
        y: 200,
        width: 50,
        height: 200
    },
    {
        x: 650,
        y: 100,
        width: 50,
        height: 150
    },
    {
        x: 100,
        y: 350,
        width: 50,
        height: 150
    },
    {
        x: 650,
        y: 350,
        width: 50,
        height: 150
    },
    {
        x: 500,
        y: 450,
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

function gate_colision(rec_player, gate) {
    if (
        point_in_rec(
            rec_player.x,
            rec_player.y,
            gate
        )
        || point_in_rec(
            rec_player.x + rec_player.width,
            rec_player.y,
            gate
        )
        || point_in_rec(
            rec_player.x + rec_player.width,
            rec_player.y + rec_player.height,
            gate
        )
        || point_in_rec(
            rec_player.x,
            rec_player.y + rec_player.height,
            gate
        )
    ) {
        return true;
    }
    return false;
}

function item_collision(rec_player, catching_items, item) {
    for (catching_item of catching_items) {
        if (item === catching_item) {
            return false;
        }
    }
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
        catching_items.push(item);
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

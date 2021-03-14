function colision_draw(path) {
    let ctx = document.getElementById('canvas-colision').getContext('2d');
    ctx.beginPath();
    for (rec of path) {
        ctx.moveTo(rec.x, rec.y);
        ctx.lineTo(rec.x + rec.width, rec.y);
        ctx.lineTo(rec.x + rec.width, rec.y + rec.height);
        ctx.lineTo(rec.x, rec.y + rec.height);
    }
    ctx.fillStyle = "pink";
    ctx.fill();
}

const colision = {
    init: function (colision_data) {
        this.catching_items = [];
        this.colision_data = colision_data;
    },

    is_in_path: function (rec_player) {
        for (rec_path of this.colision_data) {
            if (this.is_in_rec(rec_player, rec_path)) {
                return true;
            }
        }
        return false;
    },
    
    point_in_rec: function (x, y, rec_path) {
        if (
            x >= rec_path.x
            && x <= rec_path.x + rec_path.width
            && y >= rec_path.y
            && y <= rec_path.y + rec_path.height
        ) {
            return true;
        }
        return false;
    },

    gate_colision: function (rec_player, gate) {
        if (
            this.point_in_rec(
                rec_player.x,
                rec_player.y,
                gate
            )
            || this.point_in_rec(
                rec_player.x + rec_player.width,
                rec_player.y,
                gate
            )
            || this.point_in_rec(
                rec_player.x + rec_player.width,
                rec_player.y + rec_player.height,
                gate
            )
            || this.point_in_rec(
                rec_player.x,
                rec_player.y + rec_player.height,
                gate
            )
        ) {
            return true;
        }
        return false;
    },

    item_collision: function (rec_player, item) {
        for (catching_item of this.catching_items) {
            if (item === catching_item) {
                return false;
            }
        }
        if (
            this.point_in_rec(
                item.x,
                item.y,
                rec_player
            )
            || this.point_in_rec(
                item.x + item.width,
                item.y,
                rec_player
            )
            || this.point_in_rec(
                item.x + item.width,
                item.y + item.height,
                rec_player
            )
            || this.point_in_rec(
                item.x,
                item.y + item.height,
                rec_player
            )
        ) {
            this.catching_items.push(item);
            return true;
        }
        return false;
    },

    is_in_rec: function (rec_player, rec_path) {
        if (
            this.point_in_rec(
                rec_player.x,
                rec_player.y,
                rec_path
            )
            && this.point_in_rec(
                rec_player.x + rec_player.width,
                rec_player.y,
                rec_path
            )
            && this.point_in_rec(
                rec_player.x + rec_player.width,
                rec_player.y + rec_player.height,
                rec_path
            )
            && this.point_in_rec(
                rec_player.x,
                rec_player.y + rec_player.height,
                rec_path
            )
        ) {
            return true;
        }
        return false;
    }
}


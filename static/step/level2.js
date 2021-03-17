const colision_path_level_2 = [
    // horizontal
    {
        x: 0,
        y: 50,
        width: 800,
        height: 50
    },
    {
        x: 150,
        y: 200,
        width: 350,
        height: 50
    },
    {
        x: 550,
        y: 200,
        width: 250,
        height: 50
    },
    {
        x: 0,
        y: 350,
        width: 300,
        height: 50
    },
    {
        x: 600,
        y: 350,
        width: 200,
        height: 50
    },
    {
        x: 0,
        y: 500,
        width: 800,
        height: 50
    },
    // vertical
    {
        x: 0,
        y: 50,
        width: 50,
        height: 350
    },
    {
        x: 200,
        y: 350,
        width: 50,
        height: 200
    },
    {
        x: 750,
        y: 50,
        width: 50,
        height: 500
    }
];

const ladders_level_2 = [
    {
        x: 0,
        y: 95,
        width: 50,
        height: 310
    },
    {
        x: 200,
        y: 395,
        width: 50,
        height: 150
    },
    {
        x: 750,
        y: 95,
        width: 50,
        height: 455
    }
];

const floors_level_2 = [
    {
        x: 50,
        y: 90,
        width: 200,
        height: 50
    },
    {
        x: 400,
        y: 90,
        width: 350,
        height: 50
    },
    {
        x: 200,
        y: 240,
        width: 250,
        height: 50
    },
    {
        x: 600,
        y: 240,
        width: 150,
        height: 50
    },
    {
        x: 0,
        y: 390,
        width: 200,
        height: 50
    },
    {
        x: 650,
        y: 390,
        width: 100,
        height: 50
    },
    {
        x: 0,
        y: 540,
        width: 800,
        height: 50
    }
];

const gravity_level_2 = [
    {
        x: 250,
        y: 50,
        width: 50,
        height: 50
    },
    {
        x: 350,
        y: 50,
        width: 50,
        height: 50
    },
    {
        x: 150,
        y: 200,
        width: 50,
        height: 50
    },
    {
        x: 450,
        y: 200,
        width: 50,
        height: 50
    },
    {
        x: 550,
        y: 200,
        width: 50,
        height: 50
    },
    {
        x: 250,
        y: 350,
        width: 50,
        height: 50
    },
    {
        x: 600,
        y: 350,
        width: 50,
        height: 50
    }
];

const items_level_2 = [
    create_ice_item(100, 60),
    create_ice_item(450, 60),
    create_ice_item(650, 60),
    create_ice_item(210, 210),
    create_ice_item(420, 210),
    create_ice_item(650, 210),
    create_ice_item(100, 360),
    create_ice_item(700, 360),
    create_ice_item(100, 510),
    create_ice_item(500, 510)
];

let level_2_el = document.getElementById('level-2');
let floor_level_2_el = document.getElementById("img-floor-level-2");
let background_level_2_el = document.getElementById('img-backgroud-level-2');

const level_2 = {
    start: function (debug) {
        background.show(background_level_2_el);
        level_title.show("Niveau 2");
        level_2_el.classList.remove('hidden');
        zebulon.init(10, 505, debug);
        gate.init(160, 25);
        score.init();
        items.init(items_level_2);
        ladders.init(ladders_level_2);
        floors.init(floors_level_2, floor_level_2_el);
        colision.init(colision_path_level_2, gravity_level_2, debug);
    },
    next: function () {
        end.show();
        return this;
    }
}

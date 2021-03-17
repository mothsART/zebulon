const colision_path_level_1 = [
    // horizontal
    {
        x: 0,
        y: 50,
        width: 800,
        height: 50
    },
    {
        x: 0,
        y: 150,
        width: 800,
        height: 50
    },
    {
        x: 0,
        y: 300,
        width: 800,
        height: 50
    },
    {
        x: 0,
        y: 400,
        width: 800,
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
        x: 150,
        y: 50,
        width: 50,
        height: 150
    },
    {
        x: 650,
        y: 50,
        width: 50,
        height: 150
    },
    {
        x: 500,
        y: 150,
        width: 50,
        height: 200
    },
    {
        x: 100,
        y: 300,
        width: 50,
        height: 150
    },
    {
        x: 650,
        y: 300,
        width: 50,
        height: 150
    },
    {
        x: 500,
        y: 400,
        width: 50,
        height: 150
    }
];

const ladders_level_1 = [
    {
        x: 150,
        y: 95,
        width: 50,
        height: 100
    },
    {
        x: 650,
        y: 95,
        width: 50,
        height: 100
    },
    {
        x: 500,
        y: 195,
        width: 50,
        height: 150
    },
    {
        x: 100,
        y: 345,
        width: 50,
        height: 100
    },
    {
        x: 650,
        y: 345,
        width: 50,
        height: 100
    },
    {
        x: 500,
        y: 445,
        width: 50,
        height: 100
    }
];

const floors_level_1 = [
    {
        x: 0,
        y: 90,
        width: 150,
        height: 50
    },
    {
        x: 200,
        y: 90,
        width: 450,
        height: 50
    },
    {
        x: 700,
        y: 90,
        width: 100,
        height: 50
    },

    {
        x: 0,
        y: 190,
        width: 500,
        height: 50
    },
    {
        x: 550,
        y: 190,
        width: 250,
        height: 50
    },
    {
        x: 0,
        y: 340,
        width: 100,
        height: 50
    },
    {
        x: 150,
        y: 340,
        width: 500,
        height: 50
    },
    {
        x: 700,
        y: 340,
        width: 100,
        height: 50
    },
    {
        x: 0,
        y: 440,
        width: 500,
        height: 50
    },
    {
        x: 550,
        y: 440,
        width: 250,
        height: 50
    },
    {
        x: 0,
        y: 540,
        width: 800,
        height: 50
    }
];

const items_level_1 = [
    create_ice_item(40, 60),
    create_ice_item(100, 160),
    create_ice_item(350, 160),
    create_ice_item(760, 160),
    create_ice_item(250, 310),
    create_ice_item(760, 310),
    create_ice_item(350, 410),
    create_ice_item(50, 510),
    create_ice_item(350, 510),
    create_ice_item(760, 510)
];

let floor_level_1_el = document.getElementById("img-floor-level-1");
let background_level_1_el = document.getElementById('img-backgroud-level-1');

const level_1 = {
    start: function (debug) {
        background.show(background_level_1_el);
        level_title.show("Niveau 1");
        level_1_el.classList.remove('hidden');
        zebulon.init(10, 305, debug);
        gate.init(720, 380);
        score.init();
        items.init(items_level_1);
        ladders.init(ladders_level_1);
        floors.init(floors_level_1, floor_level_1_el);
        colision.init(colision_path_level_1, [], debug);
    },
    next: function () {
        level_2.start();
        return level_2;
    }
}

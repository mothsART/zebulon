let colision_path_level_2 = [
    // horizontal
    {
        x: 0,
        y: 50,
        width: 800,
        height: 50
    },
    {
        x: 200,
        y: 200,
        width: 250,
        height: 50
    },
    {
        x: 600,
        y: 200,
        width: 200,
        height: 50
    },
    {
        x: 0,
        y: 350,
        width: 250,
        height: 50
    },
    {
        x: 650,
        y: 350,
        width: 150,
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

let ladders_level_2 = [
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

let floors_level_2 = [
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

let items_level_2 = [
    create_ice_item(100, 60),
    create_ice_item(450, 60),
    create_ice_item(650, 60),
    create_ice_item(350, 210),
    create_ice_item(210, 210),
    create_ice_item(650, 210),
    create_ice_item(150, 360),
    create_ice_item(700, 360),
    create_ice_item(100, 510),
    create_ice_item(300, 510),
    create_ice_item(600, 510)
];

const level_2 = {
    start: function (debug) {
        level_1_el.classList.remove('hidden');
        zebulon.init(10, 505);
        gate.init(100, 25);
        score.init();
        items.init(items_level_2);
        ladders.init(ladders_level_2);
        floors.init(floors_level_2);
        colision.init(colision_path_level_2);
        if(debug) {
            colision_draw(colision_path_level_2);
        }
    },
    next: function () {
        console.log('win !');
        return this;
    }
}

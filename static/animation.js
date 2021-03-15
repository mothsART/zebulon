let intro_element = document.getElementById('intro');
let game_element = document.getElementById('game');
let level_1_el = document.getElementById('level-1');
let level_2_el = document.getElementById('level-2');


let active_level = null;

document.onkeydown = checkKey;

function load_game() {
    intro_element.classList.remove('hidden');
}

function start_game() {
    intro_element.classList.add('hidden');
    game_element.classList.remove('hidden');
    active_level = level_1;
    active_level.start(false);
}

function checkKey(e) {
    e = e || window.event;
    if (
        e.keyCode == '13'
        && !intro_element.classList.contains('hidden')
    ) {
        start_game();
        return;
    }
    zebulon.refresh(e.keyCode);
    items.refresh();

    if (
        !gate.is_visible
        && colision.catching_items.length === items.items_data.length
    ) {
        gate.show();
    }
    if (gate.is_visible && colision.gate_colision(zebulon.coord, gate.coord)) {
        active_level = active_level.next();
    }
}

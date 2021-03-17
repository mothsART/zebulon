let game_element = document.getElementById('game');
let level_1_el = document.getElementById('level-1');
let level_2_el = document.getElementById('level-2');

const level_title = {
    level_title_el: document.getElementById('level-title'),
    level_title_strong_el: document.getElementById('level-title__strong'),
    level_title_font_el: document.getElementById('level-title__font'),
    lock: false,
    show: function(title) {
        level_title.level_title_strong_el.innerText = title;
        level_title.level_title_font_el.innerText = title;
        level_title.level_title_el.classList.add('show');
        level_title.lock = true;
        setTimeout(this.hidden, 1000);
    },
    hidden: function() {
        level_title.lock = false;
        level_title.level_title_el.classList.remove('show');
    }
}

const intro = {
    intro_el: document.getElementById('intro'),
    is_hidden: true,
    show: function() {
        intro.intro_el.classList.remove('hidden');
        intro.is_hidden = false;
    },
    hidden: function() {
        intro.intro_el.classList.add('hidden');
        intro.is_hidden = true;
    }
}

const end = {
    end_el: document.getElementById('end'),
    is_hidden: true,
    show: function() {
        game_element.classList.add('hidden');
        end.end_el.classList.remove('hidden');
        end.is_hidden = false;
    },
    hidden: function() {
        end.end_el.classList.add('hidden');
        end.is_hidden = true;
    }
}

let active_level = null;

document.onkeydown = checkKey;

function load_game() {
    intro.show();
}

function start_game() {
    intro.hidden();
    end.hidden();
    game_element.classList.remove('hidden');
    active_level = level_1;
    active_level.start(false);
    
}

function checkKey(e) {
    if (level_title.lock)
        return;
    e = e || window.event;
    if (
        e.keyCode == '13'
        && (intro.is_hidden || end.is_hidden)
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

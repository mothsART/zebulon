let level_1_el = document.getElementById('level-1');
let level_2_el = document.getElementById('level-2');
let active_level = null;

document.onkeydown = checkKey;

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
    show: function() {
        game.stop();
        intro.intro_el.classList.remove('hidden');
    },
    hidden: function() {
        intro.intro_el.classList.add('hidden');
    }
};

const game = {
    el: document.getElementById('game'),
    is_playing: false,
    start: function() {
        game.el.classList.remove('hidden');
        game.is_playing = true;
    },
    stop: function() {
        game.el.classList.add('hidden');
        game.is_playing = false;
    }
};

const end = {
    end_el: document.getElementById('end'),
    show: function() {
        game.stop();
        end.end_el.classList.remove('hidden');
    },
    hidden: function() {
        end.end_el.classList.add('hidden');
    }
};

function load_game() {
    intro.show();
}

function start_game() {
    if (game.is_playing)
        return;
    intro.hidden();
    end.hidden();
    game.start();
    active_level = level_2;
    active_level.start(false);
    
}

function checkKey(e) {
    if (level_title.lock)
        return;
    e = e || window.event;
    console.log(e.keyCode);
    if (
        e.keyCode == '13' // ENTER
    ) {
        start_game();
        return;
    }
    if (
        e.keyCode == '27' // ECHAP
    ) {
        intro.show();
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

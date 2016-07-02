/**
 * Created by finnb on 6/18/16.
 */
var _fpsMultiplier = 1;
var _fps = 30;

function main() {
    setTimeout(main, 1000 / (_fps * _fpsMultiplier));
    Game.update();
    Game.draw();
}

window.onblur = function() {
    _fpsMultiplier = 0.5;
}

window.onfocus = function() {
    _fpsMultiplier = 1;
}

//window.onload = main;
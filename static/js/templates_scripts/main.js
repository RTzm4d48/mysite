import { MyModules, BoxAnimates } from '/static/js/index/controller_main.js';
import { mediaResponsive, obtenerValorCookie } from '/static/js/utils.js';

function applyResponsiveStyles() {
    if (mediaResponsive()[0].matches) {
        new MyModules(21, 90, 10, 'template');
    } else if (mediaResponsive()[1].matches) {
        new MyModules(7, 90, 17, 'template');
    } else {
        new MyModules(21, 100, 10, 'template');
    }
}

applyResponsiveStyles();

window.onresize = function(event) {
    applyResponsiveStyles();
};

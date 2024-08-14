import { MyModules } from '/static/js/index/controller_main.js';
import { MyModulestemplates } from '/static/js/templates_scripts/controller_main.js';
import { mediaResponsive } from '/static/js/utils.js';

function applyResponsiveStyles() {
    if (mediaResponsive()[0].matches) {
        new MyModules(21, 90, 10, 'template');
        new MyModulestemplates(21, 90, 10, 'template');
    } else if (mediaResponsive()[1].matches) {
        new MyModules(7, 90, 17, 'template');
        new MyModulestemplates(7, 90, 17, 'template');
    } else {
        new MyModules(21, 100, 10, 'template');
        new MyModulestemplates(21, 100, 10, 'template');
    }
}

applyResponsiveStyles();

window.onresize = function(event) {
    applyResponsiveStyles();
};

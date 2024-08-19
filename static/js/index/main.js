import { MyModules, BoxAnimates } from '/static/js/index/controller_main.js';
import { mediaResponsive } from '/static/js/utils.js';

function applyResponsiveStyles() {
    if (mediaResponsive()[0].matches) {
        new MyModules(21, 90, 10, 'index');
    } else if (mediaResponsive()[1].matches) {
        new MyModules(7, 90, 17, 'index');
    } else {
        new MyModules(21, 100, 10, 'index');
    }
}

applyResponsiveStyles();

// window.onresize = function(event) {
//     applyResponsiveStyles();
// };

window.addEventListener('resize', applyResponsiveStyles);

new BoxAnimates();

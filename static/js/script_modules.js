import { screen_modules_size_X } from '/static/js/utils/helpers.js';

class MyModules {
    constructor() {
    this.modules = {};
    this.html_contMoules = document.getElementById('contMoules');
    // this.write_allModules(21, 90, 10);
    
    }
    write_allModules(numModules=21, sizeLimiter=90, nodules_Y=10) {
        let modules_x = '';
        let last_border = '';
        for (let i = 0; i < nodules_Y; i++) {
            if (i == nodules_Y-1) {last_border = `style="border-bottom: 1px solid #33312c80;"`;}
            modules_x += this.write_column(numModules, sizeLimiter, last_border)
        }
        document.getElementById('div_cont').innerHTML += modules_x;
        // this.html_contMoules.innerHTML += modules_x
    }

    write_column(numModules, sizeLimiter, last_border) {

        var html_aside = `<aside ${last_border}>`;

        var width = screen_modules_size_X(numModules, sizeLimiter);
        
        document.getElementById('contBody').style.width = (width*numModules)+'px';

        for (let i = 1; i <= numModules; i++) {
            html_aside = html_aside+`<div class="module_box" style="width: calc(${width}px - 1px); height: ${width}px;">
                <div class="atom_modulesPoint">
                    <span>
                        <div><section></section></div>
                        <div><section></section></div>
                        <div><section></section></div>
                    </span>
                    <span>
                        <div><section></section></div>
                        <div><section></section></div>
                        <div><section></section></div>
                    </span>
                    <span>
                        <div><section></section></div>
                        <div><section></section></div>
                        <div><section></section></div>
                    </span>
                </div>
            </div>`;
            var thehtmla = i == numModules ? html_aside+"</aside>" : '';
        }
        return thehtmla;
    }
}
let instance = new MyModules();

function applyResponsiveStyles() {
    const tabletSize = window.matchMedia("(max-width: 900px) and (min-width: 601px)");
    const mobileSize = window.matchMedia("(max-width: 600px)");
    console.log('tabletSize', tabletSize);
    console.log('mobileSize', mobileSize);
    if (tabletSize.matches) {
        instance.write_allModules(21, 90, 10);
    } else if (mobileSize.matches) {
        instance.write_allModules(7, 90, 17);
    } else {
        instance.write_allModules(21, 100, 10);
    }
}
applyResponsiveStyles();

window.onresize = function(event) {
    applyResponsiveStyles();

};
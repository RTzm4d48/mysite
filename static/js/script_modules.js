import { screen_modules_size_X } from '/static/js/utils/helpers.js';

class MyModules {
    constructor(numModules=21, sizeLimiter=90, nodules_Y=10) {
        this.numModules = numModules;
        this.sizeLimiter = sizeLimiter;
        this.nodules_Y = nodules_Y;
        this.width = screen_modules_size_X(this.numModules, this.sizeLimiter);
        
        this.write_allModules();
        this.responsive_properties();
    }
    write_allModules() {
        let modules_x = '';
        let last_border = '';
        for (let i = 0; i < this.nodules_Y; i++) {
            if (i == this.nodules_Y-1) {last_border = `style="border-bottom: 1px solid #33312c80;"`;}
            modules_x += this.write_column(last_border)
        }
        document.getElementById('div_cont').innerHTML += modules_x;
    }

    write_column(last_border) {
        var html_aside = `<aside ${last_border}>`;

        for (let i = 1; i <= this.numModules; i++) {
            html_aside = html_aside+`<div class="module_box" style="width: calc(${this.width}px - 1px); height: ${this.width}px;">
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
            var thehtmla = i == this.numModules ? html_aside+"</aside>" : '';
        }
        return thehtmla;
    }

    responsive_properties() {
        document.getElementById('contBody').style.width = (this.width*this.numModules)+'px';
        document.getElementById('id_navbar').style.height = this.width+'px';
        if (mediaResponsive()[1].matches) {
            document.getElementById('lobbyCont').style.width = `100%`;

        } else {
            document.getElementById('lobbyCont').style.width = `calc(100% - ${this.width*2}px)`;
        }
    }
}

function applyResponsiveStyles() {
    if (mediaResponsive()[0].matches) {
        new MyModules(21, 90, 10);
    } else if (mediaResponsive()[1].matches) {
        new MyModules(7, 90, 17);
    } else {
        new MyModules(21, 100, 10);
    }
}

function mediaResponsive() {
    const tabletSize = window.matchMedia("(max-width: 900px) and (min-width: 601px)");
    const mobileSize = window.matchMedia("(max-width: 600px)");
    return [tabletSize, mobileSize]
}
applyResponsiveStyles();

window.onresize = function(event) {
    applyResponsiveStyles();
};
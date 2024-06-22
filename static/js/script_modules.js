import { screen_modules_size_X } from '/static/js/utils/helpers.js';

class MyModules {
    constructor(numModules=21, sizeLimiter=90, nodules_Y=10) {
        this.numModules = numModules;
        this.sizeLimiter = sizeLimiter;
        this.nodules_Y = nodules_Y;
        this.width = screen_modules_size_X(this.numModules, this.sizeLimiter);
        
        this.write_allModules();
        this.responsive_properties();
        this.animations();
    }
    write_allModules() {
        let modules_x = '';
        let last_border = '';
        for (let i = 0; i < this.nodules_Y; i++) {
            if (i == this.nodules_Y-1) {last_border = `style="border-bottom: 1px solid #33312c80;"`;}
            modules_x += this.write_column(last_border, i)
        }
        document.getElementById('div_cont').innerHTML += modules_x;
    }
    insert_inModule(id) {
        if (id == '2_3') {
            return `<nav style="background: none; color: black; width: 300%">
            <p style="margin: 0px 10px auto 10px">2018</p>
            <p style="margin: 0px 10px auto 10px"> Beginning of this
            spectacular race
            </p>
            </nav>`;
        }else if (id == '3_3') {
            return `<nav style="background: none; color: black; width: 300%">
            <p style="margin: 0px 10px auto 10px">2023</p>
            <p style="margin: 0px 10px auto 10px">This website has been
            create
            </p>
            </nav>`;
        }else if (id == '5_3') {
            return `<nav style="background: none; color: black; width: 300%">
            <p style="margin: 0px 10px auto 10px">2024</p>
            <p style="margin: 0px 10px auto 10px">Currently programing and developing full backend
            </p>
            </nav>`;
        }else if (id == '1_16') {
            return `<nav style="background: none; color: black; width: 200%">
            <p style="margin: 0px 10px auto 10px">Hello World!</p>
            </nav>`;
        }else if (id == '7_5') {
            return `<nav style="background: none; color: black; width: 200%">
            <p style="margin: auto 10px 0 10px">ID 009.3-3</p>
            </nav>`;
        }else if (id == '6_18') {
            return `<nav id="equis_animate" class="molecule_BoxAnimateLA">
            </nav>`;
        }
        
        else {
            return '';
        }
    }
    write_column(last_border, y) {
        var html_aside = `<aside ${last_border}>`;

        for (let i = 1; i <= this.numModules; i++) {
            html_aside = html_aside+`<div class="module_box" style="width: calc(${this.width}px - 1px); height: ${this.width}px;">
                <div class="atom_modulesPoint">
                    ${this.insert_inModule(`${y}_${i}`)}
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

    animations() {
        // document.getElementById('equis_animate').style.transform = 'rotate(12deg)';
        let total = 6;
        // let
        for (let i = 0; i < 7; i++) {
            let html_exis = '';
            html_exis += `<div class="item_x">`;
            for (let j = 0; j < total; j++) {
                html_exis = html_exis+`<div class="item_y"><img src="static/img/x.png" alt=""></div>`;
                let html_exis2 = j == total-1 ? html_exis+"</div>" : '';
                setTimeout(function() {
                    document.getElementById('equis_animate').innerHTML += html_exis2;
                }, j*50);
            }
            total = total - 1;
        }
        // let equis = `
        // <div class="item_x">
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        
        // </div>
        // <div class="item_x">
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // </div>

        // </div>
        // <div class="item_x">
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // </div>
        // </div>
        // <div class="item_x">
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // </div>
        // </div>
        // <div class="item_x">
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // </div>
        // </div>
        // <div class="item_x">
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // <div class="item_y"><img src="static/img/x.png" alt=""></div>
        // </div>
        // `
        // document.getElementById('equis_animate').innerHTML = equis;
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
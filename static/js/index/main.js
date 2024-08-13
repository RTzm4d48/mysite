import { screen_modules_size_X } from '/static/js/utils.js';

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
            modules_x += this.write_column(last_border, i)
        }
        document.getElementById('div_cont').innerHTML += modules_x;
    }
    insert_inModule(y_i) {
        const html_incorpored = [
            {'row_track': '2_3', 'html': `<nav class="text_code" style="width: 300%"><p>2018</p><p>Beginning of this
                spectacular race</p></nav>`},
            {'row_track': '3_3', 'html': `<nav class="text_code" style="width: 300%"><p>2023</p><p>This website has been
                create</p></nav>`},
            {'row_track': '5_3', 'html': `<nav class="text_code" style="width: 300%;"><p>2024</p><p>Currently programing
                and developing full
                backend</p></nav>`},
            {'row_track': '1_15', 'html': `<nav class="text_code" style="width: 200%"><p>RTzm4d48;</p></nav>`},
            {'row_track': '7_5', 'html': `<nav class="text_code" style="width: 200%"><p>ID 009.3-3</p></nav>`},
            {'row_track': '6_18', 'html': `<nav id="boxAnimate" class="molecule_BoxAnimate"></nav>`},
            {'row_track': '4_17', 'html': `<nav class="text_code" style="width: 500%;"><p id="boxAnimate_2"></p></nav>`},
            {'row_track': '1_7', 'html': `<nav id="boxAnimate_3" class="molecule_boxAnimate_3"></nav>`},
            {'row_track': '2_13', 'html': `<nav id="boxAnimate_4" style="width: 100%;padding: 0 10px;"></nav>`},
            {'row_track': '7_9', 'html': `<nav id="boxAnimate_5" class="molecule_boxAnimate_5"><p>XD</p></nav>`},
            {'row_track': '1_17', 'html': `<nav id="boxCircle" class="molecule_boxCircle"></nav>`},
        ]

        if(html_incorpored.find(x => x.row_track === y_i)) {
            return html_incorpored.find(x => x.row_track === y_i).html;
        } else {
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

class BoxAnimates {
    constructor() {
        this.animations();
        this.animation_escritura();
        this.pinter_svgs();
        this.pinter_circle();
    }

    animations() {
        let total = 6;
        let boxAnimate = document.getElementById('boxAnimate');
        for (let i = 0; i < 7; i++) {
            let html_exis = '';
            html_exis += `<div class="item_x">`;
            for (let j = 0; j < total; j++) {
                html_exis = html_exis+`<div class="item_y"><img src="static/img/icon_f_x.png" alt=""></div>`;
                let html_exis2 = j == total-1 ? html_exis+"</div>" : '';
                boxAnimate.innerHTML += html_exis2;
            }
            total = total - 1;
        }
    }

    animation_escritura() {
        const texto = `import numpy as np, pandas as pd
        data = {'A': np.random.randn(100), 'B': np.random.rand(100)}
        df = pd.DataFrame(data)
        df_filtered = df[(df['A'] > 0) & (df['B'] < 0.5)]
        result = df_filtered.groupby('A').agg({'B': 'mean'}).reset_index()
        print(result)
        `;
        let i = 0;
        function addCharacter() {
            if (i < texto.length) {
                document.getElementById('boxAnimate_2').innerHTML += texto.charAt(i);
                i++;
                setTimeout(addCharacter, 100);
                if(i == texto.length) {
                    document.getElementById('boxAnimate_2').innerHTML = '';
                    i = 0;
                }
            }
        }
        addCharacter();
    }

    pinter_svgs() {
        document.getElementById('boxAnimate_3').innerHTML = this.html_svg_x();
        document.getElementById('boxAnimate_4').innerHTML = this.html_svg_tringle();
        document.getElementById('boxAnimate_5').innerHTML = this.html_svg_x();
    }
    html_svg_x() {
        const svg_html = `
        <svg x="0px" y="0px" width="38.36px" class="artefactos_1" fill:red style="z-index: 2;"
	        height="38.36px"  viewBox="0 0 38.36 38.36" xml:space="preserve">
            <g><rect x="14.84" y="-3.6" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 19.1777 46.299)" width="8.68" height="45.56"/><rect x="14.84" y="-3.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.9437 19.1777)" width="8.68" height="45.56"/></g>
        </svg>
        `;
        return svg_html;
    }

    html_svg_tringle() {
        const svg_html = `
        <svg x="0px" y="0px" width="40px" style="z-index: 2;"
            height="30px" viewBox="0 0 25 15" xml:space="preserve"><defs></defs><polygon class="artefactos_1" points="0,0 0,20 20,20 "/>
        </svg>
        `;
        return svg_html;
    }
    pinter_circle() {
        // NOTE : AGREGAMOS TODOS LOS ELEMENTOS DEL CIRCULOS
        for (let i = 0; i < 12; i++) {
            document.getElementById('boxCircle').innerHTML += this.html_svg_circle(i);
        }
        // NOTE : AGREGAMOS EL EVENTO HOVER
        document.getElementById("circle_hover_options").addEventListener('mouseenter', (event) => {
            for (let i = 0; i < 6; i++) {
                document.getElementsByClassName('hidden')[i].style.opacity = '0';
                document.getElementById('circle_hover_options').style.opacity = '1';
            }
        });
        document.getElementById("circle_hover_options").addEventListener('mouseleave', (event) => {
            for (let i = 0; i < 6; i++) {
                document.getElementsByClassName('hidden')[i].style.opacity = '1';
                document.getElementById('circle_hover_options').style.opacity = '0';

            }

        });

    }

    html_svg_circle(num) {
        const svg_htmls = [
            `<div class="graphic circle_1"><svg viewBox="0 0 274 274"><path d="M113.4,250.16a115.42,115.42,0,0,0,108.42-33.63l5.11,4.82a122.45,122.45,0,0,1-115,35.69Z"/></svg><div>`,
            `<div class="graphic circle_2"><svg viewBox="0 0 274 274"><path d="M158.14,8.93a130,130,0,0,1,108,148.67l-7.36-1.17A122.5,122.5,0,0,0,157,16.29Z"/></svg></div>`,
            `<svg viewBox="0 0 274 274" class="graphic circle_1"><path d="M134.2,240.23a102.91,102.91,0,0,1-84.55-49.7l-2.57,1.55a105.9,105.9,0,0,0,87,51.14Z"/><path d="M134,246.54a109.24,109.24,0,0,1-89.74-52.75L42,195.18a111.9,111.9,0,0,0,91.94,54Z"/><path d="M47.22,186.29a102.9,102.9,0,0,1,0-98.07l-2.63-1.43a105.9,105.9,0,0,0,0,100.93Z"/><path d="M41.66,189.3a109.23,109.23,0,0,1,0-104.09l-2.36-1.28a111.91,111.91,0,0,0,0,106.65Z"/><path d="M49.84,83.7a102.91,102.91,0,0,1,84.74-49.37l-.09-3A105.92,105.92,0,0,0,47.27,82.14Z"/><path d="M44.44,80.42A109.2,109.2,0,0,1,134.38,28l-.08-2.69A111.92,111.92,0,0,0,42.15,79Z"/><path d="M141.12,34.32a102.93,102.93,0,0,1,84.71,49.44l2.56-1.56a105.91,105.91,0,0,0-87.17-50.88Z"/><path d="M141.33,28a109.18,109.18,0,0,1,89.89,52.47l2.3-1.39a111.94,111.94,0,0,0-92.11-53.77Z"/><path d="M228.42,88.26a102.9,102.9,0,0,1,0,98.08l2.64,1.43a105.92,105.92,0,0,0,0-100.94Z"/><path d="M234,85.26a109.23,109.23,0,0,1,0,104.09l2.36,1.28a111.91,111.91,0,0,0,0-106.65Z"/><path d="M225.68,191.06a102.92,102.92,0,0,1-84.86,49.17l.09,3a105.92,105.92,0,0,0,87.33-50.61Z"/><path d="M231.07,194.36A109.25,109.25,0,0,1,141,246.55l.07,2.68a111.92,111.92,0,0,0,92.28-53.47Z"/></svg>`,
            `<div class="hidden graphic circle_4"><svg viewBox="0 0 274 274"><path d="M87.61,187.48a71,71,0,0,0,100.41,0l-11.31-11.31a55,55,0,0,1-77.78,0Z"/><path d="M68.91,157.32a71,71,0,0,1,46.92-88.77l4.72,15.29A55,55,0,0,0,84.2,152.61Z"/><path d="M154.29,84.36a55,55,0,0,1,35.64,69.14l15.24,4.87a71,71,0,0,0-46-89.25Z"/></svg></div>`,
            `<div class="hidden graphic central"><svg viewBox="0 0 274 274"><path d="M163.82,137.28a26,26,0,1,1-26-26A26,26,0,0,1,163.82,137.28Zm-26-22a22,22,0,1,0,22,22A22,22,0,0,0,137.82,115.28Z"/></svg></div>`,
            `<div class="graphic circle_6"><svg viewBox="0 0 274 274"><path d="M247,139.19A109.31,109.31,0,0,1,135.92,246.68l.06-3.31A106,106,0,0,0,243.72,139.13Z"/><path d="M28.5,137.28A109.32,109.32,0,0,1,137.82,28v3.32a106,106,0,0,0-106,106Z"/></svg></div>`,
            `<div class="hidden graphic circle_7"><svg viewBox="0 0 274 274"><polygon points="168.82 136.53 168.82 135.03 183.82 126.78 183.82 129.78 182.82 130.53 182.82 136.53 168.82 136.53"/><polygon points="168.82 138.03 168.82 139.53 183.82 147.78 183.82 144.78 182.82 144.03 182.82 138.03 168.82 138.03"/><polygon points="106.82 136.53 106.82 135.03 91.82 126.78 91.82 129.78 92.82 130.53 92.82 136.53 106.82 136.53"/><polygon points="106.82 138.03 106.82 139.53 91.82 147.78 91.82 144.78 92.82 144.03 92.82 138.03 106.82 138.03"/></svg></div>`,
            `<div class="hidden graphic circle_8"><svg viewBox="0 0 274 274"><path d="M134.82,216.81a79.61,79.61,0,0,0,69.59-35.87l4.05,2.67a84.44,84.44,0,0,1-73.83,38Z"/></svg></div>`,
            `<div class="hidden graphic circle_9"><svg viewBox="0 0 274 274"><path d="M151.85,48.64a89.74,89.74,0,0,1,74.6,102.67l-5.08-.81A84.59,84.59,0,0,0,151,53.73Z"/></svg></div>`,
            `<div class="graphic circle_10"><svg viewBox="0 0 274 274"><path d="M46.23,64.55a116.48,116.48,0,0,0-24.38,57.82,118.2,118.2,0,0,0-.92,18.14l-7.12.2a125.07,125.07,0,0,1,1-19.25A123.42,123.42,0,0,1,40.66,60.13Z"/></svg></div>`,
            `<div class="hidden graphic circle_11"><svg viewBox="0 0 274 274"><path d="M78.11,70.2A89.4,89.4,0,0,0,52,110.73a90.69,90.69,0,0,0-3.1,13.6l-5.41-.79a95.65,95.65,0,0,1,31-57.43Z"/></svg></div>`,
            `<div id="circle_hover_options" class="graphic options"><div class="menu"><a href="/templates/networking.html">NetworkingF</a><a>Porfolio</a><a>Research</a></div></div>`
        ]
        return svg_htmls[num];
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
new BoxAnimates();
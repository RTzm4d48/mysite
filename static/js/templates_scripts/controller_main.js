import {screen_modules_size_X} from '/static/js/utils.js';

export class MyModulestemplates {
    constructor(numModules=21, sizeLimiter=90, nodules_Y=10, page) {
        this.numModules = numModules;
        this.sizeLimiter = sizeLimiter;
        this.nodules_Y = nodules_Y;
        this.width = screen_modules_size_X(this.numModules, this.sizeLimiter);
        this.page = page;
        
        this.responsive_properties();
    }
  
    responsive_properties() {
        let $ = document.querySelector.bind(document);
        document.getElementById('tittleTempalte').style.height = this.width+'px';
        $('#contCuerpo').style.marginTop = this.width+'px';

        document.querySelectorAll('.compa').forEach(element => {
            element.style.width = (this.width * 2)+'px';
            element.style.height = (this.width * 3)+'px';
        });
        let mediowidth = (this.width / 2);
        document.querySelectorAll('.compaL').forEach(element => {
            element.style.margin = `0px ${mediowidth}px 0px ${this.width}px`;
        });
        document.querySelectorAll('.compaR').forEach(element => {
            element.style.margin = `0px ${this.width}px 0px ${mediowidth}px`;
        });
    }
  }



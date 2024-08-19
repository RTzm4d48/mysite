// import { name } from 'file-loader';
import { MyModules } from '/static/js/index/controller_main.js';
import { MyModulestemplates } from '/static/js/templates_scripts/controller_main.js';
import { mediaResponsive } from '/static/js/utils.js';
import { dataSkills, subSkillsData } from './views.js';

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


createTable();
function createTable() {
    let table = document.getElementById('bodyTable');
    let skills = dataSkills();
    table.innerHTML = '';

    for (let i = 0; i < skills.length; i++) {
        let row = table.insertRow(i);
        row.id = `row_${i}`;
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = skills[i].name;
        cell2.innerHTML = skills[i].value;
        cell3.innerHTML = `<div class="skill_p"><div class="projec"><img src="/static/img/porfolio/icon_03.png" alt=""></div>${skills[i].projects}</div>`;
    }
    captureEvent();
}

function captureEvent() {
    
    let skills = document.getElementsByClassName('skill_p');
    for (let i = 0; i < skills.length; i++) {
        skills[i].addEventListener('click', function() {
            let despl = this.querySelector('.despl');
            let value_id = despl.getAttribute('value');
            
            const elemento = document.querySelector('.row_hijo_'+value_id);
            const elementos = document.querySelectorAll('.row_hijo_'+value_id);
            if (elemento) {
                elementos.forEach(elemento => {
                    despl.innerHTML = '<img style="transform: rotate(0deg);" src="/static/img/porfolio/icon_02.png" alt="">';
                    elemento.remove();
                });
            }else {
                despl.innerHTML = '<img style="transform: rotate(90deg);" src="/static/img/porfolio/icon_02.png" alt="">';
                insert_new_rows(value_id);
            }
        });
    }
};

function insert_new_rows(id_row) {
    let subSkills = subSkillsData()[id_row];
    for (let i = 0; i < subSkills.length; i++) {
        let row = document.createElement('tr');
        row.className = 'row_hijo_'+id_row;
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = `<div class="skill_h selec"><div class="hijo"></div>${subSkills[i].name}</div>`;
        cell2.innerHTML = subSkills[i].value;
        cell3.innerHTML = `<div class="skill_p"><div class="projec"><img src="/static/img/porfolio/icon_03.png" alt=""></div>${subSkills[i].projects}</div>`;
    
        document.getElementById('row_'+id_row).insertAdjacentElement("afterend", row);    
    }
}

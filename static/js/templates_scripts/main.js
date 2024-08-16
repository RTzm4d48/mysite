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


// `bodyTable`

function dataSkills() {
    // let skills = [
    //     { name: 'HTML', value: 90 },
    //     { name: 'CSS', value: 80 },
    //     { name: 'Javascript', value: 70 },
    //     { name: 'Python', value: 60 },
    //     { name: 'Django', value: 50 },
    //     { name: 'React', value: 40 },
    //     { name: 'Vue', value: 30 },
    //     { name: 'Angular', value: 20 },
    //     { name: 'Node', value: 10 },
    // ];

    let skills = [
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p"><div class="despl"></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`, value: `Higt`, projects: 12 },
    ];

    return skills;
}

createTable();
function createTable() {
    let table = document.getElementById('bodyTable');
    let skills = dataSkills();

    for (let i = 0; i < skills.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = skills[i].name;
        cell2.innerHTML = skills[i].value;
        cell3.innerHTML = `<div class="skill_p"><div class="projec"><img src="/static/img/porfolio/icon_03.png" alt=""></div>${skills[i].projects}</div>`;

        cell2.style.width = skills[i].value + '%';
    }
}

// document.getElementById('bodyTable').style.backgroundColor = 'red';
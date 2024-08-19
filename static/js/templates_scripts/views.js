export function dataSkills() {
    let skills = [
        { name: `<div class="skill_p selec"><div class="despl" value="0"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Python</div>`,
            value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl" value="1"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Django</div>`,
            value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl" value="2"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Java Script</div>`,
            value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl" value="3"><img src="/static/img/porfolio/icon_02.png" alt=""></div>CSS</div>`,
            value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_empty"><div class="despl"></div>Github</div>`, value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_p selec"><div class="despl" value="5"><img src="/static/img/porfolio/icon_02.png" alt=""></div>Bash</div>`,
            value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_empty"><div class="despl"></div>HTML</div>`, value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_empty"><div class="despl"></div>Apache</div>`, value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
        { name: `<div class="skill_empty"><div class="despl"></div>Nginx</div>`, value: `<div class="control medium"><p>Medium</p></div>`, projects: 12 },
        { name: `<div class="skill_empty"><div class="despl"></div>Postgres</div>`, value: `<div class="control medium"><p>Medium</p></div>`, projects: 12 },
        { name: `<div class="skill_empty"><div class="despl"></div>Sqlite</div>`, value: `<div class="control higt"><p>Higt</p></div>`, projects: 12 },
    ];

    return skills;
}

export function subSkillsData() {
    let skills_python = [
        {name: 'Tkinter', value: `<div class="control medium"><p>Medium</p></div>`, projects: 5},
    ];

    let skills_django = [
        {name: 'django_auth_adfs', value: `<div class="control medium"><p>Medium</p></div>`, projects: 5},
    ];

    let skills_js = [
        {name: 'Lit Element', value: `<div class="control medium"><p>Medium</p></div>`, projects: 5},
        {name: 'Node.js', value: `<div class="control medium"><p>Medium</p></div>`, projects: 5},
        {name: 'Jquery', value: `<div class="control medium"><p>Medium</p></div>`, projects: 5},
    ];
    let skills_css = [
        {name: 'Atom', value: `<div class="control higt"><p>Higt</p></div>`, projects: 5},
        {name: 'Bootstrap', value: `<div class="control medium"><p>Medium</p></div>`, projects: 5},
    ];
    let skills_bash = [
        {name: 'Scripts', value: `<div class="control medium"><p>Medium</p></div>`, projects: 5},
    ];

    return [skills_python, skills_django, skills_js, skills_css, null, skills_bash];
}
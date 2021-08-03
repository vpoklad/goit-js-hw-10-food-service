import './sass/main.scss';
import menues from './menu.json';
import menuesTmplate from './templates/menues_template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
document.body.classList.add(Theme.LIGHT)

chekTheme();


themeSwitchToggle.addEventListener('change', onToggleChange);


const targetList = document.querySelector('.js-menu');
const listMarkup = menuesTmplate(menues);
targetList.insertAdjacentHTML('beforeend', listMarkup);

function onToggleChange(evt) {
    if (evt.target.checked) {
        localStorage.setItem('Theme', 'Dark')
    document.body.classList.replace(Theme.LIGHT, Theme.DARK)
    }
    else {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('Theme', 'Light')
    };
}


function chekTheme() {
    let localTheme = localStorage.getItem('Theme');
    if (localTheme === 'Dark') {
        themeSwitchToggle.checked = true;
        document.body.classList.replace(Theme.LIGHT, Theme.DARK)
    }
}

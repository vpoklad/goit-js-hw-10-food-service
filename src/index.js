import './sass/main.scss';
import menues from './menu.json';
import menuesTmplate from './templates/menues_template.hbs';

const targetList = document.querySelector('.js-menu');
const listMarkup = menuesTmplate(menues);
targetList.insertAdjacentHTML('beforeend', listMarkup);






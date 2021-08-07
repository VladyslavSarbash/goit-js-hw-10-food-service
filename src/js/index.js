import arrayMenu from '../menu.json';
import menuElTpl from '../templates/menu-item.hbs';
const menuItem = document.querySelector('ul');

const arrayItem = arrayMenu.map(menuElTpl).join('');
menuItem.insertAdjacentHTML('beforeend', arrayItem);

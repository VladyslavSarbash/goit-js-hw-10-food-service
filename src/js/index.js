import arrayMenu from '../menu.json';
import menuElTpl from '../templates/menu-item.hbs';
import addClassTheme from './changeTheme.js';
import localStorageTheme from './localStorageTheme';

const menuItem = document.querySelector('ul');
const changeThemeInput = document.querySelector('.theme-switch__toggle');

const arrayItem = arrayMenu.map(menuElTpl).join('');
menuItem.insertAdjacentHTML('beforeend', arrayItem);

changeThemeInput.addEventListener('change', addClassTheme);

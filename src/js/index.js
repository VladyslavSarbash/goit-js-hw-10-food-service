import arrayMenu from '../menu.json';
import menuElTpl from '../templates/menu-item.hbs';
import addClassTheme from './cheangeTheme.js';
import localStorageTheme from './localStorageTheme';
import theme from "../theme.json";

const bodyRef = document.querySelector('body');
const menuItem = document.querySelector('ul');
const changeThemeInput = document.querySelector('.theme-switch__toggle');

const arrayItem = arrayMenu.map(menuElTpl).join('');
menuItem.insertAdjacentHTML('beforeend', arrayItem);

bodyRef.classList.add(theme.LIGHT)
localStorageTheme()

changeThemeInput.addEventListener('click', addClassTheme);

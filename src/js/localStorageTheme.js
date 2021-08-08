const bodyRef = document.querySelector('body');
const changeThemeInput = document.querySelector('.theme-switch__toggle');
import { DARK, LIGHT } from '../theme.json';

export default function localStorageTheme() {
  if (localStorage.getItem('theme') === DARK) {
    changeThemeInput.checked = true;
    bodyRef.classList.remove(LIGHT);
    bodyRef.classList.add(DARK);
  } else {
    changeThemeInput.checked = false;
  }
}

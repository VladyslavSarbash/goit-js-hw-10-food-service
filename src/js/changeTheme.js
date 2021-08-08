const changeThemeInput = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
import { DARK, LIGHT } from '../theme.json';

export default function addClassTheme() {
  if (changeThemeInput.checked) {
    bodyRef.classList.remove(LIGHT);
    bodyRef.classList.add(DARK);
    localStorage.setItem('theme', DARK);
  } else {
    bodyRef.classList.remove(DARK);
    bodyRef.classList.add(LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
}

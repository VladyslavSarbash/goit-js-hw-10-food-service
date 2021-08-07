const changeThemeInput = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
import theme from '../theme.json';

export default function addClassTheme() {
  if (changeThemeInput.checked) {
    bodyRef.classList.remove(theme.LIGHT);
    bodyRef.classList.add(theme.DARK);
    localStorage.setItem('theme', theme.DARK);
  } else {
    bodyRef.classList.remove(theme.DARK);
    bodyRef.classList.add(theme.LIGHT);
    localStorage.setItem('theme', theme.LIGHT);
  }
}

const bodyRef = document.querySelector('body');
const changeThemeInput = document.querySelector('.theme-switch__toggle');
import theme from '../theme.json';

export default function localStorageTheme() {
  if (localStorage.getItem('theme') === theme.DARK) {
    changeThemeInput.checked = true;
    bodyRef.classList.remove(theme.LIGHT);
    bodyRef.classList.add(theme.DARK);
  } else {
    changeThemeInput.checked = false;
  }
}

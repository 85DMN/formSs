import StartPage from './startWar';

document.addEventListener('DOMContentLoaded', () => {
  const widjet = new StartPage();
  window.widget = widjet;
  widjet.bindToDOM();
});
// Este es el punto de entrada de tu aplicacion
import { home } from './lib/view/TemplateHome.js';
import { changeRouter } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(home());     //antes de haber cambios en hash siempre tener el home

  window.addEventListener('hashchange', () => {    //cuando cambie el hash ejecutame:
    changeRouter(window.location.hash);
  });
};
window.addEventListener('load', init);  //ejecutar init cuando cargue pantalla

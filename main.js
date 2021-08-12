import { changeRouter } from './lib/router.js';

const init = () => {
  console.log('main');
  changeRouter(window.location.hash);
  
  //document.getElementById('root').appendChild(home());     //antes de haber cambios en hash siempre tener el home
  window.addEventListener('hashchange', () => {    //cuando cambie el hash ejecutame:
    changeRouter(window.location.hash);
  })
}

window.addEventListener("load", init);

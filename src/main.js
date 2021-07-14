// Este es el punto de entrada de tu aplicacion

import { home } from './lib/view/TemplateHome.js';

home()

const init = () =>{
  document.getElementById('root').appendChild(home());

};
window.addEventListener('load',init);

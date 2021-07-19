import { home } from './lib/view/TemplateHome.js';
import { changeRouter } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(home());     //antes de haber cambios en hash siempre tener el home

  window.addEventListener('hashchange', () => {    //cuando cambie el hash ejecutame:
    changeRouter(window.location.hash);
  });
};

window.addEventListener("load", init);

//var provider = new firebase.auth.GoogleAuthProvider();

//const inicioSesionGoogle = () => {
 // console.log("inicioSesionGoogle");
  //return firebase
    //.auth()
    //.signInWithPopup(provider)
    //.then((result) => {
     // console.log(result);
   // })
    //.catch((error) => {
     // console.log(error);
   // });
//};

setTimeout(() => {
  let buttonGoogle = document.getElementById("google");
console.log('buttonGoogle: ', buttonGoogle)
buttonGoogle.addEventListener("click", inicioSesionGoogle, false);
}, 1000);



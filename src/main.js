// Este es el punto de entrada de tu aplicacion

import { home } from "./lib/view/TemplateHome.js";

const init = () => {
  document.getElementById("root").appendChild(home());
};
window.addEventListener("load", init);

var provider = new firebase.auth.GoogleAuthProvider();

const inicioSesionGoogle = () => {
  console.log("inicioSesionGoogle");
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

setTimeout(() => {
  let buttonGoogle = document.getElementById("google");
console.log('buttonGoogle: ', buttonGoogle)
buttonGoogle.addEventListener("click", inicioSesionGoogle, false);
}, 1000);

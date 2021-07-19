// Este es el punto de entrada de tu aplicacion

import { home } from './lib/view/templateHome.js';

import { myFunction} from './lib/index.js';

myFunction()

document.getElementById("root").innerHTML = home();

/*const facebookButton = document.querySelector('#facebook')
facebookButton.addEventListener('click', e => {
  e.preventDefault();
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
  .then(() => {
    console.log(results);
    console.log('facebook sign in')
  })
  .catch(err => {
    console.log(err)
  })
})*/
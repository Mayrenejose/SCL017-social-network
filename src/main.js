// Este es el punto de entrada de tu aplicacion

import { home } from './lib/view/templateHome.js';

import { myFunction} from './lib/index.js';
import { facebookLogin } from './lib/facebookLogin.js';

myFunction()

document.getElementById("root").innerHTML = home();

const facebookButton = document.getElementById("facebook");
facebookButton.addEventListener("click", facebookLogin);


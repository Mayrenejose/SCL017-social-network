import { facebookLogin } from '../facebookLogin.js';
import { inicioSesionGoogle } from '../googleLogin.js';
export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
    <div class="containerGeneral">
      <div class="containerIconGift">
          <img class="imgGift" src="Assets/regalo (2).png">
      </div>
      <div class="containerLogin">
          <h1>Eluney</h1>
          <h2 class="slogan">No lo utilizo, te lo regalo!</h2>
          <div class= "containerBoxGreen">
            <img class="boxGreen" src="Assets/sostenible (1).png">

          </div>
          <input id="email" spellcheck="false" placeholder="Ingrese E-mail" type="email" name="text">
          <input id="password" spellcheck="false" placeholder="Ingrese contraseña" type="password" name="text">
          <a href="#/Registrate" Regístrate> 
            <button id="registrate" class="Registro"> Regístrate</button>
          </a>
          <a href="#/muro" ingresar> 
            <button id="ingresar" class="ingresa"> Ingresa </button>
          </a>
          <a href="#/muro" Facebook> 
            <button id="facebook" class="IngFacebook"><img class="iconFacebook" src="Assets/facebook.png"></button>
          </a>
          <a href="#/muro" Google> 
            <button id="google" class="IngGoogle"><img class="iconGoogle" src="Assets/google-mas.png"></button>
          </a> 
      </div>

    </div>
    `;
  divHome.innerHTML = viewHome;
  
    let email = divHome.querySelector('#email').value;
    let password = divHome.querySelector('#password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user.user.emailVerified === true) {   //si el mail esta verificado ir al muro
          window.location.href = '#/muro';
        } else {
          alert('Confirma tu correo electronico');
          cleanFormLogin();
        }
      })
      .catch((error) => {
        //errores de formato en el login
        let errorCode = error.code;
        switch (errorCode) {
          case 'auth/user-not-found':
            alert('Usuario no registrado');
            cleanFormLogin();
            break;
          case 'auth/wrong-password':
            alert('Contraseña incorrecta');
            cleanFormLogin();
            break;
          case 'auth/invalid-email':
            alert('Email invalido');
            cleanFormLogin();
            break;
          }  
        });

    //Limpia inputs cuando el login arroje error
    const cleanFormLogin = () => {
      document.querySelector('#email').value = '';
      document.querySelector('#password').value = '';
    };

    const facebookButton = divHome.querySelector('#facebook');
    facebookButton.addEventListener("click", facebookLogin);

    const googleLogin = divHome.querySelector('#google');
    googleLogin.addEventListener("click", inicioSesionGoogle);

      return divHome;
    }

  

import { startSession } from "../loginEmail.js";
import { observer } from "../observador.js";
import { facebookLogin } from "../facebookLogin.js";
import { inicioSesionGoogle } from "../googleLogin.js";

export const home = () => {
  const divHome = document.createElement("div");
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
          
            <button id="ingresar" class="ingresa"> Ingresar </button>
          
          <a href="#/Registrate"> 
            <button id="registrate" class="Registro" > Regístrate</button>
          </a>      
          
          <button id="facebook" class="IngFacebook"><img class="iconFacebook" src="Assets/facebook.png"></button>
                    
          <button id="google" class="IngGoogle"><img class="iconGoogle" src="Assets/google-mas.png"></button>

          
      </div>

    </div>
    `;
  divHome.innerHTML = viewHome;

  //Ingresar con usuario existente
  const login = divHome.querySelector("#ingresar");
  login.addEventListener("click", () => {
    let email = divHome.querySelector("#email").value;
    let password = divHome.querySelector("#password").value;

    startSession(email, password);

    observer();
  });

  const facebookButton = divHome.querySelector("#facebook");
  facebookButton.addEventListener("click", facebookLogin);

  const googleLogin = divHome.querySelector("#google");
  googleLogin.addEventListener("click", inicioSesionGoogle);

  return divHome;
};

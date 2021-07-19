export const home = () =>{
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
            <button id="Registrate" class="Registro"> Regístrate</button>
          </a>
          <a href="#/Ingresa" Ingresa> 
            <button id="Ingresar" class="ingresa"> Ingresa </button>
          </a>
          <a href="#/facebook" Facebook> 
            <button id="facebook" class="IngFacebook"><img class="iconFacebook" src="Assets/facebook.png"></button>
          </a>
          <a href="#/google" Google> 
            <button id="google" class="IngGoogle"><img class="iconGoogle" src="Assets/google-mas.png"></button>
          </a> 
      </div>
    </div>
    `;
  divHome.innerHTML = viewHome;
 return divHome;

};



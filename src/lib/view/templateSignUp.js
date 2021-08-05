import { createUser} from '../signUp.js';


export const templateSignUp = () =>{
    const divSignUp = document.createElement('div');
    const signUp = `
    <div class="containerSignUp">
    <h1>¡Unete a Eluney!</h1>
    <div>
      <img src="./Assets/regaloregistro.png" alt="te lo regalo" class="imgSign">
    </div>
    
    <form class="singUpForm" id="formSignUp" method="POST">
    <label class="fnick" for="fNick">Nombre de usuario</label>
      <input class="pointSignUp" type="text" name="nick" id="nickSignUp" minlength="2" maxlength="25" required>
    <label class="fnick" for="fNick">Email</label>
      <input class="pointSignUp" type="email" name="email" id="emailSignUp"  required>
      <label class="fnick" for="fNick">Contraseña</label>
      <input class="pointSignUp" type="password" name="password" id="passwordSignUp" " minlength="6" maxlength="8" required>
    </form>
    <br>
    <br>
    <div>
    <button type="submit" class="buttonSignUp" id="buttonSignUp">Enviar</button>
  </div>
  <br>
  </div>
  <br>
    <footer class="footerSignUp">
    <p class="texSignUp">¿Ya tienes cuenta? <a href="">Iniciar sesion</a></p>
  </footer>
  </div> `;
    divSignUp.innerHTML = signUp;

    
  //funcionalidad del boton enviar y ejecuta registro firebase
  const register = divSignUp.querySelector('#buttonSignUp');
  register.addEventListener('click', ()=> {
  
    //recupera datos de inputs
    let nickSignUp = divSignUp.querySelector('#nickSignUp').value;
    let emailSignUp = divSignUp.querySelector('#emailSignUp').value;
    let passwordSignUp = divSignUp.querySelector('#passwordSignUp').value;
    
   // match se usa para obtener todas las datos dentro de una cadena y verificar que la contraseña este dentro de los parametros
    if (passwordSignUp.match(/[a-z]/g) && passwordSignUp.match(/[0-9]/g) && passwordSignUp.length >= 6){
      createUser(nickSignUp,emailSignUp,passwordSignUp);
            
    }else{
      alert('La contraseña debe tener entre 6 y 8 caracteres alfanumericos');
                 
    }
    
  })

  return divSignUp;

};



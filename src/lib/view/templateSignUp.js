import { createUser} from '../signUp.js';


export const templateSignUp = () =>{
    const divSignUp = document.createElement('div');
    const signUp = `
    <div class="containerSignUp">
    <h1>¡Unete a Eluney!</h1>

    <form id="formSignUp" method="POST">
      <input class="pointSignUp" type="text" name="nick" id="nickSignUp" minlength="2" maxlength="25" placeholder="Ingresa nick de usuario" required>

      <input class="pointSignUp" type="email" name="email" id="emailSignUp" placeholder="Ingresa correo electronico*" required>

      <input class="pointSignUp" type="password" name="password" id="passwordSignUp" placeholder="Ingresa contraseña*" minlength="6" maxlength="8" required>
    </form>
  </div>

  <div class="buttonSing">
    <button type="submit" class="buttonSignUp" id="buttonSignUp">Enviar</button>
  </div>

  <footer class="footerSignUp">
    <p>¿Ya tienes cuenta?</p> <a href=""><p>Iniciar sesion</p></a>
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



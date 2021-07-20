

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
   
    firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
    .then(() => {
    
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: nickSignUp,
      });

      user.sendEmailVerification();
      alert('Revisa la bandeja de entrada de tu correo electronico');
      window.location.href = '#/Registrate';
      cleanFormSignUp();
      
    })
    .catch((error) => {
     //errores de formato en el registro
      let errorCode = error.code;
      switch (errorCode) {
        case 'auth/weak-password':
          alert('La contraseña debe tener entre 6 y 8 caracteres');
          cleanFormSignUp();
          break;
        case 'auth/invalid-email':
          alert('La dirección de correo electrónico no es correcta');
          cleanFormSignUp();
          break;
        case 'auth/email-already-in-use':
          alert('Este usuario ya existe');
          cleanFormSignUp();
          break;

     }
    });
    //Limpia inputs cuando el registro arroja error
    const cleanFormSignUp = () => {
      document.querySelector('#nickSignUp').value = '';
      document.querySelector('#emailSignUp').value = '';
      document.querySelector('#passwordSignUp').value = '';
    }
  })
    return divSignUp;
};
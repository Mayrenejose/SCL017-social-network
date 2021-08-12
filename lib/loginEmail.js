
export const startSession = (email,password) =>{

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      if (user.user.emailVerified === true) {   //si el mail esta verificado ir al muro
        window.location.href = '#/muro';
        console.log('aqui');
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
      })

  //Limpia inputs cuando el login arroje error
  const cleanFormLogin = () => {
    document.querySelector('#email').value = '';
    document.querySelector('#password').value = '';
  }

};


export const createUser = (nickSignUp,emailSignUp,passwordSignUp) =>{

    firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
    .then(() => {
    
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: nickSignUp,
      });
      //crear coleccion con los datos del usuario reistrado
      const db = firebase.firestore();
      db.collection('profiles').add({
        name : nickSignUp,
        email : emailSignUp,  
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });


      user.sendEmailVerification();
      alert('Revisa la bandeja de entrada de tu correo electronico');
      window.location.href = '#/';
      //cleanFormSignUp();
      
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
}


export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user && user.emailVerified === true) {
      console.log("hola");
    } else {
      console.log("no existe el usuario");
    }
  });
};

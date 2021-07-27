var provider = new firebase.auth.GoogleAuthProvider();

export const inicioSesionGoogle = () => {
  console.log("inicioSesionGoogle");
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      window.location.href = "#/muro";
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

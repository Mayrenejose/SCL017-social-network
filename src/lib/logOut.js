export const logOut = () => {
  return  firebase.auth().signOut().then(() => {
        console.log("cerré sesión");
        window.location.href = '';
      }).catch((error) => {
        // An error happened.
      });
}
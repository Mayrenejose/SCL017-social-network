export const logOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("cerré sesión");
      window.location.href = "";
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};

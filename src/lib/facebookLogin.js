
export const facebookLogin = e=> {
  e.preventDefault();
  console.log(firebase);
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((results) => {
    window.location.href = "#/muro";
    console.log(results);
    console.log('facebook sign in')
  })
  .catch(err => {
   console.log(err);
  });
};
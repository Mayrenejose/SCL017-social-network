
export const facebookLogin = e=> {
  e.preventDefault();
  console.log(firebase);
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((results) => {
    console.log(results);
    console.log('facebook sign in')
  })
  .catch(err => {
   console.log(err);
  });
};
export const facebookButton = viewHome.querySelector('#facebook')
  facebookButton.addEventListener('click', e => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
    .then(() => {
      console.log(results);
      console.log('facebook sign in')
    })
    .catch(err => {
      console.log(err)
    })
  })
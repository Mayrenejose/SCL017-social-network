


//busca nombre de usuario que ingresa
//export const nameUser = () => firebase.auth().currentUser;

//crear publicacion
//export const createPost = () => {
    /*const postComment = document.getElementById('postEluney').value;  //buscar el comentario en el id
    let userPost = firebase.auth().currentUser;    //usuario que esta comentando
    console.log(userPost);
    let userName = userPost.displayName;
    
    if (userName === null) {    
        console.log(userName);            //si no encuentra el nombre de usuario usa el email
        userName = userPost.email;
    }

    let photoUser = user.photoURL;  //configurando foto de usuario
    if (user.photoURL === null) {    //solo toma foto de usuario cuando accede con google o facebook
        photoUser = './src/Assets/user.jpg';  //foto de usuario por defecto
    }

    //agregar comentario a firestore
    //db.collection('comments').add({  //add para que firestore genere id de comentario
        //nombre = userName,      
        //photo = photoUser,
        //comments = postComment,
        //date = new Date(),
        //like = 0,
    //})
        /*.then(() => {
            alert('Publicado');
            console.log('comentario guardado firestone');
        })
        .catch(() => {
            alert('error');
            console.error('error al guardar comentario');
        });
}*/

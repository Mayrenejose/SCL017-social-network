//variable firestone
const db = firebase.firestore();


//crear publicacion
export const createPost = () => {
    const userPost = firebase.auth().currentUser;    //usuario que esta comentando
    const postComment = document.getElementById('postEluney').value;  //buscar el comentario en el id
    const userName = userPost.displayName;
    const userEmail = userPost.email;
    
    if (userPost === null) {     //si no encuentra el nombre de usuario usa el email    
        userName = userPost.email;
    }

    let photoUser = userPost.photoURL;  //foto de usuario
    if (userPost.photoURL === null) {    //solo toma foto de usuario cuando accede con google o facebook
        photoUser = '../Assets/user.png';  //foto de usuario por defecto
    }
    
    //agregar comentario a firestore
    db.collection('comments').add({  //add para que firestore genere id de comentario
        nombre: userName, 
        email: userEmail,             
        postContent: postComment,
        date: new Date(),
        like: [],
        //img: imgURL,
        photo: photoUser,
    })
        .then(() => {
            alert('Publicado');
            window.location.href = '#/muro';
            console.log('comentario guardado firestone');
            cleanFormPost(); 
        })
        .catch(() => {
            alert('error');
            console.error('error al guardar comentario');
        });
}

//agregar imagen
export const getFile = () => {
    const sendFile = document.querySelector('#filePost').file;
    console.log();

};

//funcion que limpia el texterea solo cuando sepublica el comentario
const cleanFormPost = () => {
    document.querySelector('#postEluney').value = '';
}

  //traer los comentarios de la coleccion  
export const getComments = () =>{   
   
    return db.collection("comments").orderBy('date', 'desc').get(); //traer los comentarios de la coleccion
     

}
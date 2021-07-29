
//variable firestone
const db = firebase.firestore();


//funcion de eliminar comentario del post 
export const deletePost = () => {
    db.collection('comments').doc().delete.then(() => {
        const divPost = document.getElementById(`postDiv-${id}`);
        divPost.remove();
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });


}


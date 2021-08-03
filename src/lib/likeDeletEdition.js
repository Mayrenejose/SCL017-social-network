//variable firestone
const db = firebase.firestore();

//eliminar post
export const deletePost = (id) => {
    db.collection('comments').doc(id).delete()
      .then(() => {  
          console.log('eliminado');   
          ;
      })
      .catch(() => {        
      });
  };

//like
const heartBlack =`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>`;      
const heartWhite =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>`;  

const colorAndNumber = (idPost, likeNew, likeOld) => {
    const numberLike = document.getElementById(`numberLik-${idPost}`); //imprimiendo conteo de like
    numberLike.innerHTML = String(likeNew);
    const getLike = document.getElementById(`heardLike-${idPost}`); //cambiando color de corazon
    if (likeNew > likeOld) {
      getLike.innerHTML = heartWhite;
    } else {
      getLike.innerHTML = heartBlack;
    }
  };



export const likePost = (id, emailData) => {
    db.collection('comments').doc(id).get()
        .then((doc) => {       
            const postLike = doc.data();
            const likeOld = postLike.like.length;  //valor actual del array de like
            if (postLike.like.includes(emailData)) {
                for (let i = 0; i < postLike.like.length; i += 1) {  // recorre el array de like y agrega 1
                    if (postLike.like[i] === emailData) {            //verficando que el like del usuario no exista ya
                        postLike.like.splice(i, 1);             //splice elimina elemento del array
                        db.collection('comments').doc(id).update({   //agrega a la coleccion el nuevo like
                            like: postLike.like,
                            
                        });
                        }
                }
            } else {    //para agregar like 
                postLike.like.push(emailData);   //añade like de usuario al array
                db.collection('comments').doc(id).update({   //cargando el like a coleccion
                    like: postLike.like,

                });
            }
            colorAndNumber(id, postLike.like.length, likeOld);
            console.log('like');
        })
        .catch(() => {

        }
        )};//fin de likePost

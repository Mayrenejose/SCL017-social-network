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
const heartBlack =`<svg class="heartIcon" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m256 87.757c-24.713-38.462-67.874-63.943-116.987-63.943-76.743 0-138.955 61.155-138.955 138.954 0 22.323-10.643 153.646 255.942 325.418l20-218.004z" fill="#ff415b"/><path d="m511.942 162.768c0-77.8-62.212-138.955-138.955-138.955-49.113 0-92.274 25.481-116.987 63.943v400.43c266.585-171.772 255.942-303.095 255.942-325.418z" fill="#d10050"/></g><g><path d="m224.133 186.303v37.83h-37.83v63.734h37.83v37.83h31.867l20-69.697-20-69.697z" fill="#fcf2b6"/><path d="m287.867 224.133v-37.83h-31.867v139.394h31.867v-37.83h37.83v-63.734z" fill="#fad17f"/></g></g></svg>`;      
const heartWhite =`<svg class="heartIcon" id="Capa_1" enable-background="new 0 0 512.006 512.006" height="512" viewBox="0 0 512.006 512.006" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m301.003 173.967h-90v35.613h-35.613v90h35.613v35.613h90v-35.613h35.613v-90h-35.613zm5.613 65.614v30h-35.613v35.613h-30v-35.613h-35.613v-30h35.613v-35.613h30v35.613z"/><path d="m511.969 168.949c-.011-.808-.021-1.521-.021-2.138 0-39.333-15.177-76.093-42.735-103.506-27.426-27.282-64.032-42.307-103.077-42.307-42.78 0-82.628 18.453-110.133 50.216-27.505-31.762-67.353-50.215-110.133-50.215-39.045 0-75.651 15.025-103.077 42.307-27.559 27.413-42.735 64.172-42.735 103.506 0 .617-.01 1.33-.021 2.138-.196 14.834-.717 54.237 31.188 110.865 38.946 69.126 111.839 138.42 216.653 205.958l8.125 5.235 8.125-5.235c104.814-67.537 177.707-136.831 216.653-205.958 31.904-56.628 31.384-96.032 31.188-110.866zm-57.326 96.14c-35.537 63.076-102.338 127.028-198.641 190.183-96.302-63.155-163.103-127.107-198.64-190.183-27.938-49.587-27.495-83.12-27.328-95.743.013-.958.023-1.803.023-2.534 0-31.291 12.036-60.496 33.893-82.237 21.766-21.652 50.858-33.576 81.92-33.576 39.613 0 76.067 19.927 97.514 53.305l12.619 19.641 12.619-19.641c21.446-33.378 57.9-53.305 97.514-53.305 31.062 0 60.154 11.924 81.92 33.576 21.856 21.741 33.893 50.947 33.893 82.237 0 .731.011 1.577.023 2.534.167 12.623.61 46.156-27.329 95.743z"/></g></svg>`;  

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

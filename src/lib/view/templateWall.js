import { logOut } from './../logOut.js';
import { getComments } from '../post.js'; 
import { likePost } from '../likeDeletEdition.js';


export const wall = (e) => {
  const wallHome = document.createElement("div");
  const viewWall = `
    <div class="header">
        <h1>Barra superior</h1>
        <button id="logOut">Cerrar Sesión </button>
        </div>
    
    <div class="wallContainer">
     <div class="postFull" id='postFull'></div>     
    </div>
    <a href="#/post"> Postear mensaje     
    </a>
    
    `;

  wallHome.innerHTML = viewWall;

  // cierre de sesion
  const buttonLogOut = wallHome.querySelector("#logOut");
  buttonLogOut.addEventListener("click", logOut);

  //llama a coleccion y devuelve promesa
  getComments().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postDiv = wallHome.querySelector("#postFull");
      const userPost = firebase.auth().currentUser; 
      const emailData = userPost.email;
      console.log(emailData);
      console.log(userPost);


      const heartBlack =`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>`;      
      const heartWhite =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>`;      
      const threePoint = `<img src="./Assets/mas-boton-de-tres-puntos.png" class="option" id="threPoint-${doc.id}" ></img>`
      //const imgPost = `<img src="${doc.data().imgURL}" class="ImgPostId"></img>`
      postDiv.innerHTML += `<div class='divComments' id='divComments-${doc.id}'>
      <div class="containerId">
        <div class="idPost">
          <img class="photoId" src="${doc.data().photo}" alt="photoUser">
          <p class="nameId">${doc.data().nombre}</p>
          <div id="dateId-${doc.id}" class="dateId">${doc.data().date.toDate().toLocaleString('es-CL')}</div>
        </div>
      </div>
      <div class="postOpcions" id="postOpcions">
        <div class="pointThree">
          ${doc.data().email === emailData ? threePoint : ''}
            <div id="windowContent-${doc.id}" class="windowContent">
                <p id="openEdit-${doc.id}" class="editPost">Editar</p>
                <p id="openDelete-${doc.id}" class="delete">Eliminar</p>
              </div>
            
      <p class="postId" id='contentPost-${doc.id}'> <br> ${doc.data().comments}</p>

      <div class='likesId'> 
      <span id="heardLike-${doc.id}">${doc.data().like.includes(emailData) ? heartWhite : heartBlack}</span>
      <p class="numberLike" id="numberLik-${doc.id}">${doc.data().like.length}</p> 
        <div class='commentId'>           
        <img src="./Assets/burbuja-de-dialogo.png" alt="comentar" id="comentarPost-${doc.id}" class="comentarPost">
        </div> 
      </div>
      
    </div>
   `;
  

      /*<div class="postImage">
      ${doc.data().imgURL === undefined ? '' : imgPost}
      </div>*/     
      console.log(doc.data().comments);

     
    });

    querySnapshot.forEach((doc) =>{
      const userPost = firebase.auth().currentUser; 
      const emailData = userPost.email;
      const likeBtn = document.getElementById(`heardLike-${doc.id}`);//corazon like
      

      //evento del corazon like      
      likeBtn.addEventListener('click', () =>{
        console.log('escuchando');
        likePost(doc.id, emailData);
        console.log(emailData);
      });
    

      /*if (doc.data().email === emailData) {
        const btnOpcion = document.querySelector(`#threePoint-${doc.id}`); // boton de las opciones
        btnOpcion.addEventListener('click', () => {
          document.getElementById('windowContent-${doc.id}').classList.toggle('openOption');
        })
        }*/

    }); 
 



  
    });//cierre de doc

    
  return wallHome;
};
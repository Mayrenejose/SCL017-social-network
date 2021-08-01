import { logOut } from './../logOut.js';
import { getComments } from '../post.js'; // const que se trae los comentarios de la coleccion
import { deletePost } from '../likeDeletEdition.js';


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
      const currentUserData = firebase.auth().currentUser;
      const emailData = currentUserData.email;
      
      const threePoint = `<img src="./Assets/mas-boton-de-tres-puntos.png" class="option" id="threPoint-${doc.id}" ></img>`
      const imgPost = `<img src="${doc.data().imgURL}" class="ImgPostId"></img>`
      postDiv.innerHTML += `<div class='divComments' id='divComments-${doc.id}'>
      <div class="containerId">
        <div class="idPost">
          <img class="photoId" src="${doc.data().photo}" alt="photoUser">
          <p class="nameId">${doc.data().nombre}</p>
          <div id="dateId-${doc.id}" class="dateId">${doc.data().date.toDate().toLocaleDateString('es-CL')}</div>
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
        
        <p class="numberLike" id="numberLike-${doc.id}">${doc.data().like.length}</p>  
        <div class='commentId'>           
        <img src="./Assets/burbuja-de-dialogo.png" alt="comentar" id="comentarPost-${doc.id}" class="comentarPost">
        </div> 
      </div>
      
    </div>
   `;
      //<span id="heartColor-${doc.id}">${doc.data().like.includes(emailData) ? heartBlue : heartWhite}</span>
      /*<div class="postImage">
      ${doc.data().imgURL === undefined ? '' : imgPost}
      </div>*/     
      console.log(doc.data().comments);
    });

    /*querySnapshot.forEach((doc) =>{
      const currentUserData = firebase.auth().currentUser;
      const emailData = currentUserData.email;

      if (doc.data().email === emailData) {
        const btnOpcion = document.querySelector(`#threePoint-${doc.id}`); // boton de las opciones
        btnOpcion.addEventListener('click', () => {
          document.getElementById('windowContent-${doc.id}').classList.toggle('openOption');
        })
        }*/

    //})
 




    });

    
  return wallHome;
};

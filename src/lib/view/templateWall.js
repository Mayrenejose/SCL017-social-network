import { logOut } from './../logOut.js';
import { getComments } from '../post.js'; // const que se trae los comentarios de la coleccion

export const wall = e => {

  const wallHome = document.createElement('div');
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
  const buttonLogOut = wallHome.querySelector('#logOut');
  buttonLogOut.addEventListener("click", logOut);
 
 
  //const insertComments = ( postDiv, data) =>{
   
   
  
    let backCard = document.createElement('img');
    backCard.className = 'backCard';
    backCard.src = './Assets/user.jpg';
    document.body.appendChild(backCard);


  //}

  //llama a coleccion y devuelve promesa
  getComments()
    .then(querySnapshot => {
     
      querySnapshot.forEach((doc) => {
        const postDiv = wallHome.querySelector('#postFull');
        postDiv.innerHTML += 
        `
        <div id="divPrincipal-${doc.id}" class="divPrincipal"> ${doc.data().nombre} ${doc.data().comments} </div><hr>
        `;

        console.log(doc.data());
        //postDiv.innerHTML//
        //insertComments(postDiv, doc.data());

        // aqui crear elementos 
        //console.log('hola may');
        //console.log(doc.data().comments);
      });

    })

  return wallHome;

}


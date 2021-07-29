import { logOut } from './../logOut.js';
import { getComments } from '../post.js'; // const que se trae los comentarios de la coleccion
import { navBar } from '../Navigation.js'; // se inserta barra de navegacion
export const wall = e => {

  const wallContainer = document.createElement('div');
  const wallHome = document.createElement('div');
  const viewWall = `
      
    <div class="wallContainer">
     <div class="postFull" id='postFull'></div>     
    </div>
    <a href="#/post"> Postear mensaje     
    </a>    
    `;

  wallHome.innerHTML = viewWall;
  navBar().innerHTML = 'Ya llegué'
  wallContainer.appendChild(navBar());
  console.log(wallContainer);
  wallContainer.appendChild(wallHome);
  
  // cierre de sesion
  /*const buttonLogOut = wallHome.querySelector('#logOut');
  buttonLogOut.addEventListener("click", logOut);*/
  

  const insertComments = ( postDiv, data) =>{
    postDiv.innerHTML += data.comments;
    console.log(data);


  }

  //llama a coleccion y devuelve promesa
  getComments()
    .then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        const postDiv = wallHome.querySelector('#postFull');
        /*postDiv.innerHTML = '';
        postDiv.innerHTML*/
        insertComments(postDiv, doc.data());

        // aqui crear elementos 
        console.log('hola may');
        console.log(doc.data().comments);
      });

    })

  return wallContainer;

}
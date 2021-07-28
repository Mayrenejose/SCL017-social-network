
import { logOut } from './../logOut.js';
import { publishGet } from '../post.js'; // const que se trae los comentarios de la coleccion


export const wall = (e) => {
const wallHome = document.createElement("div");
  const viewWall = `
    <div class="header">
        <h2>Eluney</h2>
        <h3>No lo utilizo, te lo regalo!</h3>
        <div class= "containerBoxGreenOne">
        <img class="boxGreenOne" src="Assets/sostenible (1).png">

         </div>
         <div class= "containerButton">
        <button class ="buttonLogOut" id="logOut">Cerrar Sesión </button>
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

  //llama a coleccion y devuelve promesa
  publishGet()
    .then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        const postDiv = wallHome.querySelector('#postFull');
        postDiv.innerHTML = '';
        postDiv.innerHTML +=

        // aqui crear elementos 
        console.log('hola may');
        console.log(doc.id, " => ", doc.data());
      });

    })

  return wallHome;

}


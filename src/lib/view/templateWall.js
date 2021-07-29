import { logOut } from "./../logOut.js";
import { getComments } from "../post.js"; // const que se trae los comentarios de la coleccion

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

  const insertComments = (postDiv, data) => {
    //postDiv.innerHTML += data.comments;


    postDiv.innerHTML += "<div class='divComments' id='divComments' >" + "<button id='edit' class='buttonEdit'>Editar</button>" + "<button id='delete' class='buttonDelete'>Borrar</button>" + "<button id='like' class='buttonLike'>Like</button>" + "<div id='photo' class='photoProfile'> <img class='IconoProfile' src='Assets/user.jpg'></div>"
      + data.nombre + " " + data.comments + " " + data.date.toDate() + "</div>"
  };


  //llama a coleccion y devuelve promesa
  getComments().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postDiv = wallHome.querySelector("#postFull");
      //postDiv.innerHTML +=`<div class='divComments' id='divComments-${doc.id}'> ${doc.data().nombre} </div>`

      insertComments(postDiv, doc.data());


      console.log("hola may");
      console.log(doc.data().comments);
    });
  });

  return wallHome;
};

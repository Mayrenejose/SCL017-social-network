import { logOut } from './../logOut.js';
import { getComments } from '../post.js'; // const que se trae los comentarios de la coleccion

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

  //Imprimiendo comentarios en pantalla
  const insertComments = (postDiv, data) => {
    const date = new Date(data.date.toDate())
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute= date.getMinutes();
    postDiv.innerHTML +=
      "<div class='divComments'>" +
      "<button id='edit' class='buttonEdit'>Editar</button>" +
      "<button id='delete' class='buttonDelete'>Borrar</button>" +
      "<button id='like' class='buttonLike'>Like</button>" +
      "<div id='photo' class='photoProfile'> <img class='IconoProfile' src='Assets/iconoUsuario.png'></div>" +
      data.nombre +
      " " +
      data.comments +
      " " +
     (year + "-" + month + "-" + day + " " + hour+":"+minute) +
      "</div>";
    console.log(data);
  };

  //llama a coleccion y devuelve promesa
  getComments().then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
      const postDiv = wallHome.querySelector("#postFull");
 
      insertComments(postDiv, doc.data());
  
        /*postDiv.innerHTML = 
        `
        <div id="divPrincipal-${doc.nombre}" class="divPrincipal"> ${doc.nombre} </div>
        `;*/
           
      console.log("hola may");
      console.log(doc.data().comments);
    });
  });

  return wallHome;
};

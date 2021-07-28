import { logOut } from "./../logOut.js";

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
     <div class="postOne">¿Qué Regalas?</div>
     
    </div>
    <a href="#/post"> Postear mensaje     
    </a>
    <div id='postFull'></div>
    `;

  wallHome.innerHTML = viewWall;

  const buttonLogOut = wallHome.querySelector("#logOut");
  buttonLogOut.addEventListener("click", logOut);

  return wallHome;
};

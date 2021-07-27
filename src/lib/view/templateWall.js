export const wall = e => {

    const wallHome = document.createElement('div');
    const viewWall = `
    <div class="header">
        <h1>Barra de Navegacion</h1>
        <button class="goToPost" placeholder= "Quiero Postear"></button>
    </div>
    
    <div class="wallContainer">
     <div class="postOne">¿Qué Regalas?</div>
     <div class="postTwo">¿Qué Regalas?</div>
    </div>
    
    <div>
    <a href="#/post"> Postear mensaje     
    </a>
  </div>
    `;

    wallHome.innerHTML = viewWall;

    return wallHome;
    }
    

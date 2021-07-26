export const wall = e => {
    const wallHome = document.createElement('div');
    const viewWall = `
    <div class="header">
        <h1>Barra superior</h1></div>
    
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
    

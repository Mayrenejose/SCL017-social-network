import { createPost } from '../post.js'

export const templatePost = () => {

  const divPost = document.createElement('div');
  const viewPost = `
  
    <div class="containerPost" id="containerPost">
      <p class="queDeseasRegalar">¿Que deseas regalar?</p>
      <div id="containerTextarea">  
      <form id="formPost" method="POST">
      
      <textarea name="postEluney" id="postEluney" class="postEluney" cols="30" rows="10" placeholder="No lo necesito, Te lo regalo!" required></textarea> <br>
     
    </div>
    <div class="buttonPost">
      <button class="buttonPostOne" id="publicButton" type="submit">Publicar</button>
      <button class="buttonCancel" id="cancelButton">Cancelar</button>
     <div> <img class="cajaHojaVerde" src="../Assets/sostenible (1).png"> </div>
    </div>    
  </form>
 </div>
`;
  divPost.innerHTML = viewPost;
  const btnpost = divPost.querySelector('#publicButton'); //boton publicar llamado
  btnpost.addEventListener('click', () => {
    createPost();
  });

  const btnCancel = divPost.querySelector('#cancelButton'); //boton cancelar te lleva de vuelta al muro
  btnCancel.addEventListener('click', () => {
    window.location.href = '#/muro';
  });

  return divPost;

};



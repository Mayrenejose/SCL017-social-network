import { createPost } from '../post.js'

export const templatePost = () => {

  const divPost = document.createElement('div');
  const viewPost = `
    <div class="containerPost" id="containerPost">
  <p>¿Que estas pensando?</p>
  <div id="containerTextarea">  
  <form id="formPost" method="POST">
      <textarea name="postEluney" id="postEluney" class="postEluney" cols="30" rows="10" placeholder="No lo necesito, Te lo regalo!" required></textarea>
    <input type="file" id="filePost" accept="image/png, .jpeg, .jpg, image/gif" required />
    </div>
    <div class="buttonPost">
      <button class="buttonPost" id="publicButton" type="submit">Publicar</button>
      <button class="buttonPost" id="cancelButton">Cancelar</button>
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
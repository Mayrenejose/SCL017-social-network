import { templateSignUp } from './view/templateSignUp.js'// se importan todas las const para pintar en la interfaz
import { home } from './view/templateHome.js';

export const changeRouter = (hash) => {     //exportar const que ira cambiando las rutas
    if (hash === '#/') {
        return templateView(hash)
    } else if (hash === '#/Registrate') {
        return templateView(hash)
    } else {
        return templateView(hash)
    }
}

const templateView = (hash) => {  //const que va pintando interfaz dependiendo el hash
    const rootView = document.getElementById('root'); //llamar a root 
    rootView.innerHTML = ''; //cada vez que se recarge pagina se cargara el home

    switch (hash) {      //switch evalua los hash y presenta el correspondiente
        case '':
            rootView.appendChild(home());
            break;
        case '#/Registrate':
            rootView.appendChild(templateSignUp());
            break;
        default:
            rootView.innerHTML = `<p>Error</p>`; //enchufar templateDefault
    };
};
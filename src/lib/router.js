import { templateSignUp } from './view/templateSignUp.js';// se importan todas las const para pintar en la interfaz
import { home } from './view/TemplateHome.js';
import { wall } from '../lib/view/templateWall.js';
//import {  } from './view/templateDefault.js'; 


export const changeRouter = (hash) => {     //exportar const que ira cambiando las rutas
    if (hash === '#/') {        
        return templateView(hash)
    }if (hash === '#/Registrate') {
        return templateView(hash)
    }if (hash === '#/muro') {
        return templateView(hash)
    } else {
        return templateView(hash)
    }
}

const templateView = (hash) => {  //const que va pintando interfaz dependiendo el hash
   
    const rootView = document.getElementById('root'); //llamar a root 
    rootView.innerHTML = home(); //cada vez que se recarge pagina se cargara el home

    switch (hash) {      //switch evalua los hash y presenta el correspondiente
        
        case '#/':
                rootView.appendChild(home());
                break;
        case '#/Registrate':
            rootView.appendChild(templateSignUp());
            break;
        case '#/muro':
            rootView.appendChild(wall());
        case '':
                rootView.appendChild(home());
                break;
        default:
            rootView.innerHTML = `<p>Error</p>`; //enchufar templateDefault
    }
};


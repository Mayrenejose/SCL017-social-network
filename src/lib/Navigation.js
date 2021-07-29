export const navBar = () => {
    const navigation = document.createElement('div');
    const viewNavigation = `
    <div class='Bar'>
    <img class='basicIcon' src='.Assets/sostenible (1).png'></img>
    <h3 class='wallTitle'>Eluney</h3>
    </div>
    <div class="functions">
        <a>¿Quieres postear?</a>
        <a>Mi Perfil</a>
        <button id="logOut">Cerrar Sesión</button>
    </div>
    `;
    navigation.innerhtml = viewNavigation;
    return navigation;
};


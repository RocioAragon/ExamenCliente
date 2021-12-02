window.onload = function() {
    // Entorno
    /*ARRAY CON LAS IMÉGENES QUE SE PASAN*/
    const IMAGENES = [
        'img/MariaLuisa1.jpg',
        'img/CostaBallena1.jpeg',
        'img/MariaLuisa2.jpg',
        'img/CostaBallena2.jpg'
    ];
    //TIEMPO DURANTE EL CUAL SE PASA CADA IMAGEN
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    var posicionActual = 0;
    var imagen = document.getElementById('imagen');
    var intervalo;

    //Algoritmo:
    //Funciones
    /**Funcion que cambia la foto en la siguiente posicion*/
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        } //FinSi
        renderizarImagen();
    } //FinFuncion

    /**Funcion que actualiza la imagen de imagen dependiendo de posicionActual*/
    function renderizarImagen() {
        imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    } //FinFuncion

    /**Activa el autoplay de la imagen*/
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    } //FinFuncion

    renderizarImagen();
    playIntervalo();
}
//Funciones:

//FUNCIÓN QUE ABRE EL CONTENIDO DE LAS FOTOS
//Obtiene el atibuto por el id y le pone un css para que se muestre como un bloque.
function abrirContenido() {
    document.getElementById("miContenido").style.display = "block";
} //FinFuncion

//FUNCIÓN QUE CIERRA EL CONTENIDO DE LAS FOTOS
//Obtiene el atibuto por el id y le pone un css para que se no se muestre.
function cerrarContenido() {
    document.getElementById("miContenido").style.display = "none";
} //FinFuncion

//ÍNDICE DE LA FOTO
var iFoto = 1;
mostrarFotos(iFoto);

//FUNCIÓN QUE PASA A MOSTRAR FOTOS LA FOTO ACTUAL.
function fotoActual(n) {
    mostrarFotos(iFoto = n);
} //FinFuncion

//Acomulador para pasar la foto, sumandole n.
function masFotos(n) {
    mostrarFotos(iFoto += n);
} //FinFuncion

//FUNCIÓN QUE MUESTRA LAS FOTOS.
function mostrarFotos(n) {
    var i;
    //Array de fotos
    var fotos = document.getElementsByClassName("misFotos");

    //Si llega al final el siguiente elemento es el 1
    if (n > fotos.length) {
        iFoto = 1
    } //FinSi

    //Si llega al 1 el siguiente elemento es final si vas para atras.
    if (n < 1) {
        iFoto = fotos.length
    } //FinSi

    //Recorre el array de fotos
    for (i = 0; i < fotos.length; i++) {
        //Para que no se muestren.
        fotos[i].style.display = "none";
    } //FinPara

    //Muestra la del índice ifoto.
    fotos[iFoto - 1].style.display = "block";
} //FinFuncion
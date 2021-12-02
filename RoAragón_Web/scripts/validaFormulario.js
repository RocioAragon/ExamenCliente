window.onload = function() {
    //Entorno:
    var eNombre = document.getElementById("nombre");
    var eApellidos = document.getElementById("apellidos");
    var eEmail = document.getElementById("email");
    var eTelefono = document.getElementById("telefono");
    var eTexto = document.getElementById("texto");
    var eForm = document.getElementById("enviar");
    //Funciones:

    //Funcion que valida nombre y apellidos.
    function validarNombre() {
        //Entorno:
        var msg = "";
        var validada = false;
        //Algoritmo:
        if (eNombre.value == "") {
            msg += " Debes escribir contenido en el campo Nombre.<br>";
            eNombre.focus();
        } else {
            if (!isNaN(eNombre.value)) {
                msg += "No ha introducido un valor correcto, introduca un nombre.<br>";
                eNombre.focus();
            } else {
                validada = true;
            } //FinSi
        } //FinSi
        return validada;
    } //FinFuncion

    //Funcion que valida apellidos.
    function validarApes() {
        //Entorno:
        var msg = "";
        var validada = false;
        //Algoritmo:
        if (eApellidos.value == "") {
            msg += "Debes escribir contenido en el campo Apellidos.<br>";
            eApellidos.focus();
        } else {
            if (!isNaN(eApellidos.value)) {
                msg += "No ha introducido un valor correcto, introduca unos apellidos.<br>";
                eApellidos.focus();
            } else {
                validada = true;
            } //FinSi
        } //FinSi

        document.getElementById("errores").innerHTML = msg;
        return validada;
    } //FinFuncion

    //Funcion que valida el email.
    function validarMail() {
        //Entorno:
        var validada = false;
        var msg = "";
        var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //Algoritmo:
        if (eEmail.value == "") {
            msg += " Debes escribir contenido en el campo email.<br>";
            eEmail.focus();
        } else {
            if (!expEmail.test(eEmail.value)) {
                msg += "No ha introducido un valor correcto, introduzca un email válido.<br>";
                eEmail.focus();
            } else {
                validada = true;
            } //FinSi
        } //FinSi

        document.getElementById("errores").innerHTML = msg;
        return validada;
    } //FinFuncion

    //Funcion que valida el teléfono.
    function validaTelefono() {
        //Entorno:
        var msg = "";
        var expTelefono = /^\d{9}$/;
        var validada = false;
        //Algoritmo:
        if (eTelefono.value == "") {
            msg += " Debes escribir contenido en el campo Teléfono.<br>";
        } else {
            if (!expTelefono.test(eTelefono.value)) {
                msg += "No ha introducido un valor correcto, introduzca un Teléfono válido (9 cifras).<br>";
            } else {
                validada = true;
            } //FinSi
        } //FinSiw

        document.getElementById("errores").innerHTML = msg;
        return validada;
    } //FinFuncion

    function validaTexto() {
        //Entorno:
        var msg = "";
        var validada = false;
        //Algoritmo:
        if (eTexto.value == "") {
            msg += " Debes escribir contenido en el campo de Texto.<br>";
            eTexto.focus();
        } else {
            validada = true;
        } //FinSi
        return validada;
    } //FinFuncion

    function validarEnvio(evento) {
        //Entorno:
        var bEnviarFormulario;
        //Algoritmo: 
        if (validarNombre() && validarApes() && validarMail() && validaTelefono() && validaHora() && validaTexto() && Confirm("¿Desea enviar el formulario?")) {
            bEnviarFormulario = true;
        } else {
            evento.preventDefault();
            bEnviarFormulario = false;
        } //FinSi

        return bEnviarFormulario;
    } //FinFuncion

    //Algoritmo:
    eNombre.addEventListener('focusout', validarNombre, false);
    eApellidos.addEventListener('focusout', validarApes, false);
    eEmail.addEventListener('focusout', validarMail, false);
    eTelefono.addEventListener('focusout', validaTelefono, false);
    eTexto.addEventListener('focusout', validaTexto, false);
    eForm.addEventListener('click', validarEnvio);
}
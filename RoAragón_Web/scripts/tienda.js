window.onload = function() {
    //Entorno:
    var eCarrito = document.getElementById("carrito");
    var arrayEBtnComprar = document.getElementsByName("btnComprar");
    var arrayProductos = new Array();
    var i;
    var carrito = new Carrito();

    //MÉTODOS CONTRUCTORES:

    //Clase producto/Función constructora
    function Producto(id, titulo, descripcion, precio, foto) {
        //Atributos:
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.foto = foto;
        //Métodos:
        this.imprimeProducto = imprimeProducto;
    } //FinClase

    //Clase Item/Función constructora
    function Item(id, descripcion, precio, cantidad) {
        //Atributos:
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        //Metodos:
        this.imprimeItem = imprimeItem;
    } //FinClase

    //Clase Carrito/Función constructora
    function Carrito() {
        //Atributos:
        this.arrayCarrito = new Array();
        this.total = 0;
        //Métodos:
        this.aniadirAlCarrito = aniadirAlCarrito;
        this.imprimeCarrito = imprimeCarrito;
    } //FinMétodo

    //FUNCIONES:

    //Función que imprime la tabla de los los productos.
    function imprimeProducto() {
        var cadenaHTML = "<table class=\"tablaproductos\" name=\"producto\"id=\"" + this.id + "\"><td><tr><td class=\"td\"><p class=\"info\"><span id=\"titulo-" + this.id + "\"><h4>" + this.titulo + "</h4></span> <span id=\"desc-" + this.id + "\">" + this.descripcion + "</span> <br> <br> <span id=\"precio-" + this.id + "\"><b>" + this.precio + " €</b></span></p></td><td><img class=\"muestra\" src=\"" + this.foto + "\"></td></tr><tr><td> <button name=\"btnComprar\" id=\"btnComprar-" + this.id + "\" class=\"boton\"> Comprar</button></td></tr></td></table>";
        return cadenaHTML;
    } //FinFuncion

    //Función que imprime cada item.
    function imprimeItem() {
        var total = this.cantidad * this.precio;
        var cadenaHTML = "<tr><td><p>" + this.descripcion + "</p></td><td><p>" + this.precio + " €</p></td><td><p>" + this.cantidad + "</p></td><td><p>" + total + " €</p></td><td><button class=\"botonCarrito\"name=\"btnQuitar\" id=\"btnQuitar-" + this.id + "\">Quitar</button></td></tr>";
        return cadenaHTML;
    } //FinFuncion

    //Función que añade al carrito cada el ítem que queremos.
    function aniadirAlCarrito(item) {
        //Entorno:
        var itemActual;
        var i;
        var encontrado = false;
        //Algoritmo:
        if (this.arrayCarrito.length > 0) {
            i = 0;
            while (i < this.arrayCarrito.length && !encontrado) {
                itemActual = this.arrayCarrito[i];
                if (itemActual.descripcion == item.descripcion) {
                    encontrado = true;
                    itemActual.cantidad++;
                    this.arrayCarrito[i] = itemActual;
                } //FinSi
                i++;
            } //FinMientras
            if (!encontrado) {
                this.arrayCarrito.push(item);
            } //FinSi
        } else {
            this.arrayCarrito.push(item);
        } //FinSi
    } //FinFuncion

    //Función que imprime el carrito.
    function imprimeCarrito() {
        //Entorno:
        var i;
        var itemActual;
        var carritoHTML = "<table class=\"carrito\"><tr class=\"carrito\"><th class=\"carritoth\"> Item</th><th class=\"carritoth\"> Precio</th><th class=\"carritoth\"> Cantidad</th><th class=\"carritoth\"> Total Item</th> <th class=\"carritoth\"> </th></tr>";
        this.total = 0;
        var arrayEBtnQuitar;
        //Algoritmo:
        console.log(this.arrayCarrito);
        for (i = 0; i < this.arrayCarrito.length; i++) {
            itemActual = this.arrayCarrito[i];
            itemActual.id = i;
            carritoHTML = carritoHTML + itemActual.imprimeItem();
            this.total = this.total + (itemActual.cantidad * itemActual.precio);
        } //FinPara
        carritoHTML = carritoHTML + "<tr class=\"carrito\"><th colspan=\"3\" class=\"carrito\">Total</th><th id=\"total\" class=\"carrito\">" + this.total + " €</th><td><button id=\"btnQuitarTodo\" class=\"botonCarrito\">Quitar Todo</button></td></tr> </table>";
        carritoHTML = carritoHTML + "</br> <button class=\"botonCarritoComprar\"> Comprar </button>"
        eCarrito.innerHTML = carritoHTML;
        arrayEBtnQuitar = document.getElementsByName("btnQuitar");
        for (i = 0; i < arrayEBtnQuitar.length; i++) {
            arrayEBtnQuitar[i].addEventListener('click', borrarItem);
        } //FinPara
        document.getElementById("btnQuitarTodo").addEventListener('click', borrarTodo);
        document.getElementsByClassName("tituloCarrito")[0].style.visibility = "visible";
        eCarrito.style.visibility = "visible";
    } //FinFuncion

    //Función que borra cada item.
    function borrarItem(evento) {
        var id = evento.srcElement.id;
        //Sacar el número del atributodel botón del producto.
        var indice = id.substr(id.length - 1);
        console.log(indice);
        carrito.arrayCarrito.splice(indice, 1);
        carrito.imprimeCarrito();
    } //FinFuncion

    //Obtiene el prodcuto que se quiere comrpar, crea un item a partir de ese producto, lo añade al carrito e imprime el carrito.
    function comprar(evento) {
        var id = evento.srcElement.id;
        //Sacar el número del atributo del botón del producto.
        var indice = id.substr(id.length - 1) - 1;
        var producto = arrayProductos[indice];
        var item = new Item(0, producto.descripcion, producto.precio, 1);
        carrito.aniadirAlCarrito(item);
        carrito.imprimeCarrito();
    } //FinFuncion

    //Función que borra todo.
    function borrarTodo() {
        carrito = new Carrito();
        document.getElementsByClassName("tituloCarrito")[0].style.visibility = "hidden";
        eCarrito.style.visibility = "hidden";
    } //FinFuncion

    //Algoritmo:

    //SE GUARDAN EN VARIABLES LOS VALORES QUE VAN A TENR CADA UNO DE LOS OBJETOS.
    var producto1 = new Producto("producto1", "Sesión 10 fotos:", "10 fotografías en formato digital", 15, "../img/fotos,jpg.jpg");
    var producto2 = new Producto("producto2", "Sesión 20 fotos:", "20 fotografías en formato digital", 25, "../img/fotos,jpg.jpg");
    var producto3 = new Producto("producto3", "Sesión 30 fotos:", "30 fotografías en formato digital", 35, "../img/fotos,jpg.jpg");
    var producto4 = new Producto("producto4", "Sesión 30 fotos + impresión:", "Fotografías en formato digital e impresas. (Impresión: 30 €)", 60, "../img/fotos,jpg.jpg");
    var producto5 = new Producto("producto5", "Sesión en pareja:", "20 fotografías en formato digital, impresión a petición. (Impresión: 30 €)", 50, "../img/pareja.JPG");
    var producto6 = new Producto("producto6", "Sesión a niños:", "15 fotografías en digital,impresión a petición. (Impresión: 30 €)", 40, "../img/niños.jpeg");

    //Añdimos al array de productos los productos.
    arrayProductos.push(producto1);
    arrayProductos.push(producto2);
    arrayProductos.push(producto3);
    arrayProductos.push(producto4);
    arrayProductos.push(producto5);
    arrayProductos.push(producto6);

    //Fila primera de articulos.
    document.getElementById("tienda1").innerHTML = producto1.imprimeProducto();
    document.getElementById("tienda1").innerHTML = document.getElementById("tienda1").innerHTML + producto2.imprimeProducto();
    document.getElementById("tienda1").innerHTML = document.getElementById("tienda1").innerHTML + producto3.imprimeProducto();
    //Fila segunda de articulos.
    document.getElementById("tienda2").innerHTML = document.getElementById("tienda2").innerHTML + producto4.imprimeProducto();
    document.getElementById("tienda2").innerHTML = document.getElementById("tienda2").innerHTML + producto5.imprimeProducto();
    document.getElementById("tienda2").innerHTML = document.getElementById("tienda2").innerHTML + producto6.imprimeProducto();

    //Añade elemento comprar a todos los elementos boton comprar.
    for (i = 0; i < arrayEBtnComprar.length; i++) {
        arrayEBtnComprar[i].addEventListener('click', comprar);
    } //FinPara
}
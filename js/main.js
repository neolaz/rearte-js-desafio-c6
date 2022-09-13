let opcionMenu = 0;
let tipoDocumento;
let producto;
let precio;
let cantidad;
let impuesto;
let total;
let numeroDocumento;
let documentoCreado = '';
let listaDocumentos = '';
let numeradorFactura = 0;
let numeradorNotaDeCredito = 0;
let numeradorNotaDeDebito = 0;
let iterador = true;
let asd;

// Bucle principal
while (iterador){
    gestionarMenu();
    if (opcionMenu == 1) crearDocumento();
    if (opcionMenu == 2) mostrarListaDocumentos();
    if (opcionMenu == 3) iterador = false;
}

function gestionarMenu(){
    opcionMenu = prompt('Bienvenido a Coder Facturación! Ingrese:\n1 - Para crear un Documento.\n2 - Para mostrar los Documentos creados.\n3 - Para salir.');
    validarInputMenu();
}

function validarInputMenu(){
    while(!(opcionMenu == '1' || opcionMenu == '2' || opcionMenu == '3')){

        opcionMenu = prompt('Opción inválida. Ingrese:\n1 - Para crear un Documento.\n2 - Para mostrar los Documentos creados.\n3 - Para salir.');
    }
}

function crearDocumento(){
    seleccionarTipoDocumento();
    ingresarProducto();
    ingresarPrecio();
    ingresarCantidad();
    seleccionarImpuesto();
    calcularTotal();
    asignarNumero();
    mostrarDocumento();
    cargarDocumento();
}

function seleccionarTipoDocumento(){
    inputTipoDocumento = prompt('Seleccione el Tipo de Documento que desea crear! Ingrese:\n1 - Factura.\n2 - Nota de Crédito.\n3 - Nota de Débito.');
    validarInputTipoDocumento(inputTipoDocumento);
}

function validarInputTipoDocumento(inputTipoDocumento){
    while(!(inputTipoDocumento == '1' || inputTipoDocumento == '2' || inputTipoDocumento == '3')){
        inputTipoDocumento = prompt('Opción inválida. Ingrese:\n1 - Factura.\n2 - Nota de Crédito.\n3 - Nota de Débito.');
    }  
    if (inputTipoDocumento == '1') tipoDocumento = 'Factura';
    if (inputTipoDocumento == '2') tipoDocumento = 'Nota de Crédito';
    if (inputTipoDocumento == '3') tipoDocumento = 'Nota de Débito';
}

function ingresarProducto(){
    producto = prompt('Ingrese el producto que desea facturar.');
}

function ingresarPrecio(){
    precio = prompt('Ingrese el precio del producto.');
    validarInputPrecio();
}

function validarInputPrecio(){
    while(precio < 1){
        precio = prompt('El precio debe ser mayor que 0, ingréselo nuevamente.');
    }  
}

function ingresarCantidad(){
    cantidad = prompt('Ingrese la cantidad del producto.');
    validarInputCantidad();
}

function validarInputCantidad(){
    while(cantidad < 1){
        cantidad = prompt('La cantidad debe ser mayor que 0, ingrésela nuevamente.');
    }  
}

function seleccionarImpuesto(){
    inputImpuesto = prompt('Seleccione el impuesto correspondiente para el producto! Ingrese:\n1 - 0%\n2 - 10.5%.\n3 - 21%.\n4 - 27%.');
    validarInputImpuesto(inputImpuesto);
}

function validarInputImpuesto(inputImpuesto){
    while(!(inputImpuesto == '1' || inputImpuesto == '2' || inputImpuesto == '3' || inputImpuesto == '4')){
        inputImpuesto = prompt('Opción inválida. Ingrese:\n1 - 0%\n2 - 10.5%.\n3 - 21%.\n4 - 27%.');
    }  
    if (inputImpuesto == '1') impuesto = 1;
    if (inputImpuesto == '2') impuesto = 1.105;
    if (inputImpuesto == '3') impuesto = 1.21;
    if (inputImpuesto == '4') impuesto = 1.27;
}

function calcularTotal(){
    total = precio * cantidad * impuesto;
}

function asignarNumero(){
    if (tipoDocumento == 'Factura') {
        numeradorFactura++;
        numeroDocumento = numeradorFactura
    }
    if (tipoDocumento == 'Nota de Crédito') {
        numeradorNotaDeCredito++;
        numeroDocumento = numeradorNotaDeCredito
    }
    if (tipoDocumento == 'Nota de Débito') {
        numeradorNotaDeDebito++;
        numeroDocumento = numeradorNotaDeDebito
    }
}

function mostrarDocumento(){
    documento = `${tipoDocumento} número ${numeroDocumento} por la venta de ${producto} por ${cantidad} unidades, con un precio unitario de ${precio}. El total es de ${total}, incluyéndo impuestos.`;
    alert(`Se creó correctamente la ${documento}`)
}

function cargarDocumento(){
    listaDocumentos == '' ? listaDocumentos += documento : listaDocumentos += '\n\n' + documento
}

function mostrarListaDocumentos(){
    if(listaDocumentos == ''){
        alert("Todavía no hay documentos creados.");
        return;
    }
    alert(listaDocumentos);
}
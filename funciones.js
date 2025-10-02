
var indice = 0;
resguardoPUnitario = [];
resguardoPTotal = [];
montoTotalFinal = 0;
var totalConDescuento = 0;



/* Borrar cosas que no son necesarias imprimir */
function onClickButton (action) {
    console.log("action: ", action);

    if (action === "IMPRIMIR") {
      if(window.print ) {
          if (todoOk()[0]) {
              console.log("indice vale: " + indice);
              // Reiniciamos 
                  resguardoPUnitario = [];
                  resguardoPTotal = [];
              
              document.getElementById("buttonImprimir").style.visibility = "hidden";
              //document.getElementById("buttonGenerarArchivo").style.visibility = "hidden";
              //document.getElementById("buttonEnviarPorEmail").style.visibility = "hidden";
              //document.getElementById("buttonEnviarPorWhatsapp").style.visibility = "hidden";
              document.getElementById("buttonAgregarFila").style.visibility = "hidden";
              document.getElementById("btn-descuento").style.visibility = "hidden";
              document.getElementById("btn-Quitardescuento").style.visibility = "hidden";
              document.getElementById("btn-volver").style.visibility = "hidden";

              var elems = document.getElementsByClassName('borrar');
              $("td").addClass("sin-border");
              
              for(var i = 0; i != elems.length; ++i){
                  elems[i].style.visibility = "hidden"; // hidden has to be a string
              }

              // Almacenamos Precio Unitario en formato aceptable para WEB y convertimos para Imprimir
            for(var i = 0; i<indice; ++i) {
                  console.log("paso aca1 :  i" + i);
                  var pUnit = document.getElementById('pUnitario'+i).innerHTML;
                  resguardoPUnitario[i] = pUnit;
                  console.log("Precio unitario : " + parseFloat(pUnit).toLocaleString('de-DE'));
                  console.log("paso aca2");
                  document.getElementById('pUnitario'+i).innerHTML =  agregameUnCero(parseFloat(pUnit).toLocaleString('de-DE'));
              
              }

              // Almacenamos Precio Total en formato aceptable para WEB y convertimos para Imprimir
              for(var i = 0; i<indice; ++i) {
                  console.log("paso aca3");
                  var pTotal = document.getElementById('pTotal'+i).innerHTML;
                  resguardoPTotal[i] = pTotal;
                  console.log("Precio total : " + parseFloat(pTotal).toLocaleString('de-DE'));
                  console.log("paso aca4");
                  document.getElementById('pTotal'+i).innerHTML =  agregameUnCero(parseFloat(pTotal).toLocaleString('de-DE'));
          
              }
              
              window.print();

              // Volemos a mostrar los items
              document.getElementById("buttonImprimir").style.visibility = "visible";
              //document.getElementById("buttonGenerarArchivo").style.visibility = "visible";
              //document.getElementById("buttonEnviarPorEmail").style.visibility = "visible";
              //document.getElementById("buttonEnviarPorWhatsapp").style.visibility = "visible";
              document.getElementById("buttonAgregarFila").style.visibility = "visible";
              document.getElementById("btn-descuento").style.visibility = "visible";
              document.getElementById("btn-Quitardescuento").style.visibility = "visible";
              document.getElementById("btn-volver").style.visibility = "visible";

              var elems = document.getElementsByClassName('borrar');
              $("td").removeClass("sin-border");

              for(var i = 0; i != elems.length; ++i) {
                  elems[i].style.visibility = "visible";
              }

              // Volvemos a cargar el formato aceptable para WEB 
              for(var i = 0; i<indice; ++i) {
                  document.getElementById('pUnitario'+i).innerHTML = resguardoPUnitario[i];
                  document.getElementById('pTotal'+i).innerHTML = resguardoPTotal[i];
              }

          }else {
              alert(todoOk()[1]);
          }
      } else {
              alert("Lo siento, tu navegador debe ser actualizado para poder imprimir");
      }
    }

    if (action === "EMAIL") {
      if(window.print ) {
        if (todoOk()[0]) {
            console.log("indice vale: " + indice);
            // Reiniciamos 
                resguardoPUnitario = [];
                resguardoPTotal = [];
            
            document.getElementById("buttonImprimir").style.visibility = "hidden";
            //document.getElementById("buttonGenerarArchivo").style.visibility = "hidden";
            //document.getElementById("buttonEnviarPorEmail").style.visibility = "hidden";
            //document.getElementById("buttonEnviarPorWhatsapp").style.visibility = "hidden";
            document.getElementById("buttonAgregarFila").style.visibility = "hidden";
            document.getElementById("btn-descuento").style.visibility = "hidden";
            document.getElementById("btn-Quitardescuento").style.visibility = "hidden";
            document.getElementById("btn-volver").style.visibility = "hidden";

            var elems = document.getElementsByClassName('borrar');
            $("td").addClass("sin-border");
            
            for(var i = 0; i != elems.length; ++i){
                elems[i].style.visibility = "hidden"; // hidden has to be a string
            }

            // Almacenamos Precio Unitario en formato aceptable para WEB y convertimos para Imprimir
          for(var i = 0; i<indice; ++i) {
                console.log("paso aca1 :  i" + i);
                var pUnit = document.getElementById('pUnitario'+i).innerHTML;
                resguardoPUnitario[i] = pUnit;
                console.log("Precio unitario : " + parseFloat(pUnit).toLocaleString('de-DE'));
                console.log("paso aca2");
                document.getElementById('pUnitario'+i).innerHTML =  agregameUnCero(parseFloat(pUnit).toLocaleString('de-DE'));
            
            }

            // Almacenamos Precio Total en formato aceptable para WEB y convertimos para Imprimir
            for(var i = 0; i<indice; ++i) {
                console.log("paso aca3");
                var pTotal = document.getElementById('pTotal'+i).innerHTML;
                resguardoPTotal[i] = pTotal;
                console.log("Precio total : " + parseFloat(pTotal).toLocaleString('de-DE'));
                console.log("paso aca4");
                document.getElementById('pTotal'+i).innerHTML =  agregameUnCero(parseFloat(pTotal).toLocaleString('de-DE'));
        
            }

            generarPDF();
            

        }else {
            alert(todoOk()[1]);
        }
      } else {
              alert("Lo siento, tu navegador debe ser actualizado para poder imprimir");
      }
    } 
  }

const fileName = "Prespupuesto"+obtenerFechaYHoraFormateada()+".pdf";

function obtenerFechaYHoraFormateada() {
  var fechaYHora = new Date();
  var dia = agregarCerosIzquierda(fechaYHora.getDate(), 2);
  var mes = agregarCerosIzquierda(fechaYHora.getMonth() + 1, 2); // Los meses en JavaScript comienzan desde 0
  var anio = fechaYHora.getFullYear();
  var horas = agregarCerosIzquierda(fechaYHora.getHours(), 2);
  var minutos = agregarCerosIzquierda(fechaYHora.getMinutes(), 2);
  var segundos = agregarCerosIzquierda(fechaYHora.getSeconds(), 2);

  var fechaYHoraFormateada = dia + '_' + mes + '_' + anio + '__' + horas + '_' + minutos + '_' + segundos;
  return fechaYHoraFormateada;
}

function agregarCerosIzquierda(numero, longitud) {
  var numeroString = numero.toString();
  while (numeroString.length < longitud) {
    numeroString = '0' + numeroString;
  }
  return numeroString;
}

function generarPDF(){

      // Convert the DOM element to a drawing using kendo.drawing.drawDOM
      var $contentWrapper = $("#body").filter(":visible");
          
      kendo.drawing.drawDOM($contentWrapper)
          .then(function(group) {
              // Render the result as a PDF file
              return kendo.drawing.exportPDF(group, {
                  paperSize: "auto",
                  margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" }
              });
          })
          .done(function(data) {
              // Save the PDF file
              kendo.saveAs({
                  dataURI: data,
                  fileName: fileName,
                  proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
              });

              // Volemos a mostrar los items
              document.getElementById("buttonImprimir").style.visibility = "visible";
              //document.getElementById("buttonGenerarArchivo").style.visibility = "visible";
              //document.getElementById("buttonEnviarPorEmail").style.visibility = "visible";
              //document.getElementById("buttonEnviarPorWhatsapp").style.visibility = "visible";
              document.getElementById("buttonAgregarFila").style.visibility = "visible";
              document.getElementById("btn-descuento").style.visibility = "visible";
              document.getElementById("btn-Quitardescuento").style.visibility = "visible";
              document.getElementById("btn-volver").style.visibility = "visible";

              var elems = document.getElementsByClassName('borrar');
              $("td").removeClass("sin-border");

              for (var i = 0; i != elems.length; ++i) {
                  elems[i].style.visibility = "visible";
              }

              // Volvemos a cargar el formato aceptable para WEB
              for (var i = 0; i < indice; ++i) {
                  document.getElementById('pUnitario' + i).innerHTML = resguardoPUnitario[i];
                  document.getElementById('pTotal' + i).innerHTML = resguardoPTotal[i];
              }
          });
      }



/* Agregar nueva fila a tabla de articulos */
function agregarFila(){
  var row = $("<tr class='sumable'>");

  row.append($('<td class="right" contenteditable="true" onkeypress="return validaNumericos(event)" onkeyup="calcular()">0</td>'))
    .append($('<td class="pt-3-half" contenteditable="true"></td>'))
    .append($('<td class="descripcion_item" contenteditable="true"></td>'))
    .append($('<td id="pUnitario'+indice+'" class="right" contenteditable="true" onkeypress="return validaNumericosConComa(event)" onkeyup="calcular()">0.0</td>'))
    .append($('<td id="pTotal'+indice+'" class="right noeditable"></td>'))
    .append($('<td><input type="button" class="btn btn-danger borrar" value="X" /></td></tr>'));

  $("#table tbody").append(row);
  indice++;
  calcular();
};


/* funcion para agregar cero si es decimal con un digito */
function agregameUnCero(numero) {

    // Si tiene decimales
    if (numero.indexOf(",") != -1) {
        console.log ("numero.split: " + numero.split(",")[1]);
        var decimales = numero.split(",")[1];
        console.log("decimales.length: " + decimales.length);
        if (decimales.length == 1) {
            numero = numero + "0";
        }
    
    } else {

        numero = numero + ",00";
    }

    return numero;
}


/* Eliminar fila seleccionada */
$(document).on('click', '.borrar', function (event) {
  /* Removemos la fila */
  event.preventDefault();

  $(this).closest('tr').toggle();
  $(this).closest('tr').removeClass('sumable');

  calcular();

});



/* Realizar calculo para totales */
function calcular() {
  // obtenemos todas las filas del tbody
  var filas=document.querySelectorAll("#table tbody tr.sumable");

  var total=0;



  // recorremos cada una de las filas
    filas.forEach(function(e) {

        // obtenemos las columnas de cada fila
        var columnas=e.querySelectorAll("td");

        // obtenemos los valores de la cantidad y importe
        var cantidad = parseFloat(columnas[0].textContent);
        var importe = parseFloat(columnas[3].textContent);

        // mostramos el total por fila
        columnas[4].textContent=(cantidad*importe).toFixed(2);

        total+=cantidad*importe;
    });

    calculoTotal();
}



function calculoTotal() {
  // obtenemos todas las filas del tbody
  var filas=document.querySelectorAll("#table tbody tr.sumable");

  var totales=0;
  // recorremos cada una de las filas
  filas.forEach(function(e) {

    // obtenemos las columnas de cada fila
    var columnas=e.querySelectorAll("td");

    // Sumamos los totales
    totales = totales + parseFloat(columnas[4].textContent);
    console.log("numero_ " +totales.toLocaleString());
    
    document.getElementById('totales1').innerHTML = agregameUnCero(totales.toLocaleString('de-DE'));
    document.getElementById('totales2').innerHTML = agregameUnCero(totales.toLocaleString('de-DE'));

    montoTotalFinal = totales;
  }); 

  // Convertimos el monto a texto
  var numeroConvertidoATexto = numeroALetras(totales, {
    plural: "PESOS",
    singular: "PESO",
    centPlural: "CENTAVOS",
    centSingular: "CENTAVO"
  });

  document.getElementById('numeroEnLetras').innerHTML = numeroConvertidoATexto;


  // Calcular Dcto si corresponde
  if ($('#btn-Quitardescuento').is(':visible') ) {
    document.getElementById('numeroEnLetras').innerHTML="";
    aplicarDcto();


  }

}


/* Campos numericos solo acepta numeros */
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
    }
    return false;        
}



 /* Campos numericos solo acepta numeros con decimales */
 function validaNumericosConComa(event) {
   
    if( (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46){
      return true;
    }
    return false;        
}


/* Chequeo de errores antes de imprimir*/
function todoOk() {

  var okImprimir = true;
  var error = "";

  // obtenemos todas las filas del tbody
  var filas=document.querySelectorAll("#table tbody tr.sumable");

  // recorremos cada una de las filas
    filas.forEach(function(e) {

        // obtenemos las columnas de cada fila
        var columnas=e.querySelectorAll("td");

        // verificamos vacios

        if ( columnas[0].textContent == '' || columnas[3].textContent == '' ||
            columnas[0].textContent == '0' || columnas[3].textContent == '0.0') {
          okImprimir = false;
          error = error + "\n * Debe completar CANTIDAD y P. UNITARIO para todos los items *";
        }
    });
    
    var fecha = document.getElementById("input_fecha").value;
    var fecha_ref = document.getElementById("input_fecha_refrigeracion").value;
    if(fecha == "" && $('#subencabezadoElectricidad').is(':visible') ||
      fecha_ref == "" && $('#subencabezadoRefrigeracion').is(':visible')) {
      okImprimir = false;
      error = error + "\n * Debe completar Fecha del Presupuesto *";
    }
    
    var nropresupuesto = document.getElementById("input_npresupuesto").value;
    var nropresupuesto_ref = document.getElementById("input_npresupuesto_refrigeracion").value;
    if(nropresupuesto == "" && $('#subencabezadoElectricidad').is(':visible') ||
      nropresupuesto_ref == "" && $('#subencabezadoRefrigeracion').is(':visible')) {
      okImprimir = false;
      error = error + "\n * Debe completar Nro. del Presupuesto *";
    }


    return [okImprimir, error];
   
  }


function mostrarPanel( panel ) {
  
  // Ocultamos Menu
  $('#menuPrincipal').addClass('oculto');

  // Mostramos boton volver
  $('#btn-volver').removeClass('oculto');

  // << Mostramos panel comun a todos los presupuestos completo >>
  if (panel != "sub_menuElectricidad")
    $('#panelPrincipal').removeClass('oculto');

  if (panel == "sub_menuElectricidad") 
    $('#sub_menuElectricidad').removeClass('oculto');

  // << Mostramos panel electricidad Loisotto >>
  if(panel == "electricidad") {

    // Componentes a ocultar
    $('#sub_menuElectricidad').addClass('oculto'); // El que tiene las opc para las dos casas
    $('#encabezadoRefrigeracion').addClass('oculto');
    $('#subencabezadoRefrigeracion').addClass('oculto');
    $("#mensajeInformativo").addClass('oculto');
    $('#encabezadoElectricidad_electroplast').addClass('oculto');
    $('#subencabezadoElectricidad_electroplast').addClass('oculto');
    $('#mensajeInformativo_electroplat').addClass('oculto');

    // Componentes a mostrar 
    $('#encabezadoElectricidad').removeClass('oculto');
    $('#subencabezadoElectricidad').removeClass('oculto');
    $("#nextel_electricidad").removeClass('oculto');
  }

  // <<  Mostramos panel refrigeracion  >>
  if(panel == "refrigeracion") {

    // Componentes a ocultar
    $('#sub_menuElectricidad').addClass('oculto'); // El que tiene las opc para las dos casas
    $('#encabezadoElectricidad').addClass('oculto');
    $('#subencabezadoElectricidad').addClass('oculto');
    $("#nextel_electricidad").addClass('oculto');
    $('#encabezadoElectricidad_electroplast').addClass('oculto');
    $('#subencabezadoElectricidad_electroplast').addClass('oculto');
    $('#mensajeInformativo_electroplat').addClass('oculto');

    // Componentes a mostrar
    $('#encabezadoRefrigeracion').removeClass('oculto');
    $('#subencabezadoRefrigeracion').removeClass('oculto');
    $("#mensajeInformativo").removeClass('oculto');
  }


  // << Mostramos panel Electroplast >>
  if(panel == "electroplast"){

    // Componentes a ocultar
    $('#sub_menuElectricidad').addClass('oculto'); // El que tiene las opc para las dos casas
    $('#encabezadoElectricidad').addClass('oculto');
    $('#subencabezadoElectricidad').addClass('oculto');
    $("#nextel_electricidad").addClass('oculto');
    $('#encabezadoRefrigeracion').addClass('oculto');
    $('#subencabezadoRefrigeracion').addClass('oculto');
    $("#mensajeInformativo").addClass('oculto');

    // Componentes a mostrar
    $('#encabezadoElectricidad_electroplast').removeClass('oculto');
    $('#subencabezadoElectricidad_electroplast').removeClass('oculto');
    $('#mensajeInformativo_electroplat').removeClass('oculto');
  }
}

function volver() {
  // Mostramos menu con opciones
  $('#menuPrincipal').removeClass('oculto');

  // Ocultamos todo
  $('#btn-volver').addClass('oculto');
  $('#panelPrincipal').addClass('oculto');
  $('#encabezadoRefrigeracion').addClass('oculto');
  $('#encabezadoElectricidad').addClass('oculto');
  $('#sub_menuElectricidad').addClass('oculto');
}


function aplicarDcto() {

  $('#montoTotalDescuento').removeClass('oculto');
  $('#btn-Quitardescuento').removeClass('oculto');
  $('#btn-descuento').addClass('oculto');

  document.getElementById('totales3').innerHTML = "";
  document.getElementById('porcentajeDesc').innerHTML = "";
  totalConDescuento = montoTotalFinal - ( montoTotalFinal * $('#descuento_aplicar').val()/100 );
  console.log("total con descuento: " + totalConDescuento);
  document.getElementById('porcentajeDesc').innerHTML = $('#descuento_aplicar').val();
  document.getElementById('totales3').innerHTML = agregameUnCero(totalConDescuento.toLocaleString('de-DE'));


  var numeroConvertidoATexto = numeroALetras(totalConDescuento, {
    plural: "PESOS",
    singular: "PESO",
    centPlural: "CENTAVOS",
    centSingular: "CENTAVO"
  });

  document.getElementById('numeroEnLetras').innerHTML = numeroConvertidoATexto;

}

function eliminarDcto() {

  $('#montoTotalDescuento').addClass('oculto');
  $('#btn-descuento').removeClass('oculto');
  $('#btn-Quitardescuento').addClass('oculto');

  var numeroConvertidoATexto = numeroALetras(montoTotalFinal, {
    plural: "PESOS",
    singular: "PESO",
    centPlural: "CENTAVOS",
    centSingular: "CENTAVO"
  });

  document.getElementById('numeroEnLetras').innerHTML = numeroConvertidoATexto;
}

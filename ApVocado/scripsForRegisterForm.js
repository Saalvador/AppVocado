//Scrips for New User Register Form
var contenedorActual = 1;
var totalContenedores = 3; // Actualiza este valor al número total de contenedores

function mostrarSiguiente() {
  var contenedorActualElem = document.getElementById("container" + contenedorActual);
  contenedorActualElem.style.display = "none";
  contenedorActual++;

  if (contenedorActual > totalContenedores) {
    // Se ha completado el formulario, mostrar el botón de enviar
    var enviarFormularioBtn = document.getElementById("enviarFormulario");
    enviarFormularioBtn.style.display = "block";
    return;
  }

  var siguienteContenedorElem = document.getElementById("container" + contenedorActual);
  siguienteContenedorElem.style.display = "block";
}

function mostrarCompletado() {
  alert("¡Formulario de Appvocado completado con éxito!");
}
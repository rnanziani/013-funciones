// script.js|

// Función pintar que recibe el elemento y un color (con valor por defecto)
function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color;
  }
  
  // Seleccionamos el elemento
  const ele = document.getElementById("ele1");
  
  // Agregamos el evento click y usamos una función anónima para pasar parámetros
  ele.addEventListener("click", function () {
    pintar(ele, "yellow"); // Pasamos el elemento y el color amarillo
  });
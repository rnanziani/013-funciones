    // 1. Agregar evento click a los 4 divs para cambiar a negro
    const divAzul = document.getElementById("div_azul");
    const divRojo = document.getElementById("div_rojo");
    const divVerde = document.getElementById("div_verde");
    const divAmarillo = document.getElementById("div_amarillo");

    function cambiarANegro(event) {
      event.target.style.backgroundColor = "black";
    }

    divAzul.addEventListener("click", cambiarANegro);
    divRojo.addEventListener("click", cambiarANegro);
    divVerde.addEventListener("click", cambiarANegro);
    divAmarillo.addEventListener("click", cambiarANegro);

    // 2. Manejar cambio de color del div "key" según tecla presionada
    let colorGuardado = "white"; // Color inicial

    const divKey = document.getElementById("key");

    document.addEventListener("keydown", function(event) {
      switch (event.key) {
        case "a":
          colorGuardado = "pink";
          break;
        case "s":
          colorGuardado = "orange";
          break;
        case "d":
          colorGuardado = "lightblue";
          break;
        default:
          return; // Salimos si no es a, s o d
      }
      divKey.style.backgroundColor = colorGuardado;
    });

    // 3. Crear nuevos divs con teclas q, w, e dentro del contenedor
    const contenedor = document.getElementById("contenedor-dinamico");

    document.addEventListener("keydown", function(event) {
      let nuevoColor = "";

      switch (event.key) {
        case "q":
          nuevoColor = "purple";
          break;
        case "w":
          nuevoColor = "gray";
          break;
        case "e":
          nuevoColor = "brown";
          break;
        default:
          return; // No hacemos nada si no es q, w o e
      }

      if (nuevoColor) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "color-box";
        nuevoDiv.style.backgroundColor = nuevoColor;

        // Añadir el nuevo div al contenedor, debajo del div key
        contenedor.appendChild(nuevoDiv);
      }
    });
/**
 * Solicita al usuario que ingrese sus datos personales y los almacena en el objeto datosPersona.
 */
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombreIngresado = prompt("Ingresa tu nombre").trim();
  const annoNacimiento = parseInt(prompt("Ingresa el año en que naciste").trim());
  const annoActual = new Date().getFullYear();
  const ciudadIngresada = prompt("Ingresa la ciudad donde vives").trim();
  const interesEnJsIngresado = confirm("Te interesa Javascript?");
  const interesEnJs = interesEnJsIngresado ? "Sí" : "No";

  datosPersona.nombre = nombreIngresado;
  datosPersona.edad = annoActual - annoNacimiento;
  datosPersona.ciudad = ciudadIngresada;
  datosPersona.interesPorJs = interesEnJs;
}

/**
 * Renderiza los datos del usuario almacenados en el objeto datosPersona en el documento HTML.
 */
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").textContent = datosPersona.nombre;
  document.getElementById("edad").textContent = datosPersona.edad;
  document.getElementById("ciudad").textContent = datosPersona.ciudad;
  document.getElementById("javascript").textContent = datosPersona.interesPorJs;
}

/**
 * Recorre un listado de materias y renderiza tarjetas para cada una en el documento HTML.
 */
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const elementoObjetivo = document.getElementById("fila");
  const objetivoYaTieneContenido = elementoObjetivo.innerHTML !== "";
  if (objetivoYaTieneContenido) {
    console.log("Las tarjetas ya están presentes en el documento. No se renderizan nuevamente")
    return;
  }

  const tarjetasMaterias = document.createDocumentFragment();

  for (const materia of listado) {
    const tarjetaContenedora = document.createElement("article");
    tarjetaContenedora.className = "caja";

    const imagen = document.createElement("img");
    imagen.src = materia.imgUrl;
    imagen.alt = materia.lenguajes;
    tarjetaContenedora.appendChild(imagen);

    const parrafoLenguajes = document.createElement("p");
    parrafoLenguajes.className = "lenguajes";
    parrafoLenguajes.textContent = materia.lenguajes;
    tarjetaContenedora.appendChild(parrafoLenguajes);

    const parrafoBimestre = document.createElement("p");
    parrafoBimestre.className = "bimestre";
    parrafoBimestre.textContent = materia.bimestre;
    tarjetaContenedora.appendChild(parrafoBimestre);

    tarjetasMaterias.appendChild(tarjetaContenedora);
  }

  elementoObjetivo.appendChild(tarjetasMaterias);
  console.log("Se renderizaron las tarjetas");
}

/**
 * Alterna entre el modo oscuro y el modo claro del sitio web cambiando la clase del elemento con el ID "sitio".
 */
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
/**
 * Desoculta el elemento con el ID "sobre-mi" cuando se presiona la tecla "f".
 * @param {KeyboardEvent} event - El evento de teclado.
 */
function desocultarSobreMi(event) {
  if (event.key.toLowerCase() !== "f") {
    return;
  }
  const parrafoSobreMi = document.getElementById("sobre-mi");
  const estaOculto = parrafoSobreMi.classList.contains("oculto");
  if (!estaOculto) {
    console.log("El elemento 'sobre-mi' no está oculto. Se interrumpe la ejecución de la función");
    return;
  } else {
    console.log("El elemento 'sobre-mi' sí está oculto. Lo hacemos visible");
    parrafoSobreMi.className = "";
  }
}

window.addEventListener("keypress", desocultarSobreMi);

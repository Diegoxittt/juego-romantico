const preguntasRespuestas = {
    "¿Qué te gustaria hacer en nuestro primer aniversario?": [
        "Una cena junto una linda noche",
        "Un paseo por la playa al atardecer",
        "Ver una película",
        "Ir a el lugar donde te pedí ser mi novia",
        "Otro"
    ],
    "¿Qué musica eligirias para representación de la relación?": [
        "Carta Real- Miky Woodz",
        "Como panas - Bryant Myers",
        "Cosas que no te dije - Saiko",
        "Aquel nap zzz - Rauw alejandro",
        "Otra"
    ],
    "¿Te parezco un gran novio y compañero de vida actualmente?": [
        "SI, TE AMO",
        "SI, aunque aveces me da ganas de pegarte por hacerme renegar",
        "Si",
        "No",
        "Otro"
    ],
    "¿Cuál es tu recuerdo más especial de la relación?": [
        "Nuestra primera cita",
        "Nuestro primer beso",
        "Un momento de complicidad especial",
        "Un regalo inolvidable",
        "Otro"
    ],
    "¿Prefieres expresar tu amor con palabras o con acciones?": [
        "Con palabras",
        "Con acciones",
        "Con ambas",
        "Depende de la situación",
        "Otro"  
    ],
    "¿Qué es lo que más te gusta de mi?": [
        "Mi generosidad",
        "Mi creatividad de hacerte cartitas",
        "Mi capacidad de escuchar xd",
        "Mi espontaneidad para hacerte reir, etc",
        "Otro"  
    ],
    "¿Cuál es tu tradición favorita en la relación?": [
        "Celebrar nuestra fecha",
        "Tener una noche de cita semanal",
        "Cena juntos",
        "Pasar una tarde a solas",
        "Otro"
    ]
};

let preguntaActual = 0;

function mostrarPregunta() {
    const preguntaElemento = document.getElementById('pregunta');
    const respuestasElemento = document.getElementById('respuestas');

    preguntaElemento.textContent = Object.keys(preguntasRespuestas)[preguntaActual];
    respuestasElemento.innerHTML = '';

    const respuestas = preguntasRespuestas[Object.keys(preguntasRespuestas)[preguntaActual]];
    respuestas.forEach((respuesta, index) => {
        const botonRespuesta = document.createElement('button');
        botonRespuesta.textContent = respuesta;
        botonRespuesta.addEventListener('click', () => {
            mostrarResultado(respuesta);
        });
        respuestasElemento.appendChild(botonRespuesta);
    });

    preguntaActual++;
}

function mostrarResultado(respuesta) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `Gracias por las respuestas morocha, TE AMO : ${respuesta}`;

    if (preguntaActual < Object.keys(preguntasRespuestas).length) {
        setTimeout(mostrarPregunta, 2000); // Mostrar la siguiente pregunta después de 2 segundos
    } else {
        resultadoElemento.textContent += "\n¡Fin del juego!";
        document.getElementById('siguiente').style.display = 'none'; // Ocultar el botón si se llegó al final
    }
}

document.getElementById('siguiente').addEventListener('click', mostrarPregunta);

mostrarPregunta(); // Mostrar la primera pregunta al cargar la página

// Selecciona el elemento con la clase "voice-search" y establece una variable para verificar si el micrófono ha sido aceptado
const voiceSearch = document.querySelector(".voice-search");
let microAceptado = false;

// Función que abre el modal de búsqueda por voz, mostrando el contenedor y aplicando una animación de aparicion
const voiceSearchModalOpen = () => {
    voiceSearch.style.display = "flex";
    voiceSearch.style.animation = "aparecer 0.5s forwards";
    voiceRecognition(); // Inicia el reconocimiento de voz
}

// Funcion que cierra el modal de busqueda por voz, aplicando una animacion de desaparicion y ocultando el contenedor tras 250ms
const voiceSearchModalClose = () => {
    voiceSearch.style.animation = "desaparecer 0.25s forwards";
    setTimeout(() => {
        voiceSearch.style.display = "none";
    }, 250);
}

// Función que gestiona el reconocimiento de voz
const voiceRecognition = () => {
    // Comprueba si el micrófono no ha sido aceptado
    if (microAceptado == false) {
        // Asigna la API de reconocimiento de voz según el navegador
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

        // Verifica si la API de SpeechRecognition está disponible en el navegador
        if (!'SpeechRecognition' in window) {
            alert("que pena, no podes usar la API");
        }
    }

    // Muestra un mensaje para indicar que se debe hablar
    document.querySelector(".voice-search__result-text").innerHTML = "Habla ahora";
    
    // Crea una nueva instancia de reconocimiento de voz
    let recognition = new window.SpeechRecognition();

    // Maneja el resultado del reconocimiento de voz
    recognition.onresult = (event) => {
        // Obtiene el texto del reconocimiento y lo muestra en la página
        let voiceText = event.results[0][0].transcript;
        document.querySelector(".voice-search__result-text").innerHTML = voiceText;

        // Detiene el reconocimiento de voz
        recognition.stop();

        // Después de 1.8 segundos, abre una búsqueda en Google con el texto reconocido
        setTimeout(() => {
            window.open("https://google.com/search?q=" + voiceText);
        }, 1800);
    }

    // Inicia el reconocimiento de voz
    recognition.start();
}

// Asigna eventos de clic a los elementos para abrir y cerrar el modal, así como para iniciar el reconocimiento de voz
document.querySelector('.form__microphone-icon').addEventListener("click", voiceSearchModalOpen);
document.querySelector(".voice-search__close-modal").addEventListener("click", voiceSearchModalClose);
document.querySelector(".voice-search__microphone-border").addEventListener("click", voiceRecognition);

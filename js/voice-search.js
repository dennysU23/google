const voiceSearch = document.querySelector(".voice-search");
const resultText = document.querySelector(".voice-search__result-text");
let microAceptado = false;

// Abrir modal de búsqueda por voz
const voiceSearchModalOpen = () => {
  voiceSearch.style.display = "flex";
  voiceSearch.style.animation = "aparecer 0.5s forwards";
  voiceRecognition();
};

// Cerrar modal de búsqueda por voz
const voiceSearchModalClose = () => {
  voiceSearch.style.animation = "desaparecer 0.25s forwards";
  setTimeout(() => {
    voiceSearch.style.display = "none";
  }, 250);
};

// Función de reconocimiento de voz
const voiceRecognition = async () => {
  if (!microAceptado) {
    // Comprobar soporte para la API de reconocimiento de voz
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!window.SpeechRecognition) {
      alert("Lo siento, tu navegador no soporta la API de reconocimiento de voz.");
      return;
    }
    microAceptado = true;
  }

  resultText.innerHTML = "Habla ahora";

  try {
    const recognition = new window.SpeechRecognition();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      resultText.innerHTML = voiceText;
      recognition.stop();
      openSearchPage(voiceText);
    };

    recognition.start();
  } catch (error) {
    console.error("Error en reconocimiento de voz: ", error);
  }
};

// Función para abrir la página de búsqueda después de un retraso
const openSearchPage = (query) => {
  setTimeout(() => {
    window.open(`https://google.com/search?q=${encodeURIComponent(query)}`);
  }, 1800);
};

// Eventos para abrir y cerrar modal
document.querySelector('.form__microphone-icon').addEventListener("click", voiceSearchModalOpen);
document.querySelector(".voice-search__close-modal").addEventListener("click", voiceSearchModalClose);
document.querySelector(".voice-search__microphone-border").addEventListener("click", voiceRecognition);

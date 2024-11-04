const voiceSearch = document.querySelector(".voice-search");
const resultText = document.querySelector(".voice-search__result-text");
const microphoneIcon = document.querySelector(".form__microphone-icon");
const closeModalIcon = document.querySelector(".voice-search__close-modal");
const microphoneBorder = document.querySelector(".voice-search__microphone-border");

let microAceptado = false;
let recognition;

// Abre el modal de búsqueda por voz
const voiceSearchModalOpen = () => {
    voiceSearch.style.display = "flex";
    voiceSearch.style.animation = "aparecer 0.5s forwards";
    initializeVoiceRecognition();
};

// Cierra el modal de búsqueda por voz
const voiceSearchModalClose = () => {
    voiceSearch.style.animation = "desaparecer 0.25s forwards";
    setTimeout(() => {
        voiceSearch.style.display = "none";
    }, 250);
};

// Inicializa el reconocimiento de voz
const initializeVoiceRecognition = () => {
    if (!microAceptado) {
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        if (!window.SpeechRecognition) {
            alert("Lo sentimos, no puedes usar la API de reconocimiento de voz.");
            return;
        }
        microAceptado = true;
    }

    resultText.innerHTML = "Habla ahora";
    recognition = new window.SpeechRecognition();

    recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript;
        resultText.innerHTML = voiceText;
        recognition.stop();

        setTimeout(() => {
            window.open(`https://google.com/search?q=${voiceText}`);
        }, 1800);
    };

    recognition.start();
};

// Event listeners
microphoneIcon.addEventListener("click", voiceSearchModalOpen);
closeModalIcon.addEventListener("click", voiceSearchModalClose);
microphoneBorder.addEventListener("click", initializeVoiceRecognition);

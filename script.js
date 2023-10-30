let speech = new SpeechSynthesisUtterance();

let voices = [];

let current_voice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>
{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    for(let i = 0 ; i < voices.length ; i++)
        current_voice.options[i] = new Option(voices[i].name, i);
}

current_voice.addEventListener("change", () =>
{
    speech.voice = voices[current_voice.value];
});

document.querySelector("button").addEventListener("click", () =>
{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}
)
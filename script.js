// Adding an event listener to each button
document.getElementById("buttons").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn")) {
        // If a button with class "btn" is clicked, play the corresponding audio
        playAudio(event.target.innerText.toLowerCase() + ".mp3");
    } else if (event.target.classList.contains("stop")) {
        // If the stop button is clicked, stop the audio
        stopAudio();
    }
});

let audio;

function playAudio(filename) {
    stopAudio(); // Stop any currently playing audio
    audio = new Audio(`sounds/${filename}`);
    audio.play();
}

function stopAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

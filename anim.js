// Synchronize the lyrics with the song
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array of objects containing each line and its appearance time in seconds
var lyricsData = [
  { text: " Main Titliyon Ke Peeche Bhagu ", time: 8 },
  { text: " Main Jugnuon Ke Peeche Jau ", time: 9 },
  { text: "Ye Rang Hai Wo Roshni Hai", time: 15 },
  { text: " Tumhare Paas Dono Laun ", time: 18 },
  { text: "Jithni Khushbuain", time: 21 },
  { text: "Baag Mein Mile", time: 25 },
  { text: " Haan Jitni Khushbuain Baag Mein Mile", time: 29 },
  { text: "Main Lau Vahan Pe Ki Tum Ho Jahan", time: 33 },
  { text: "Jahan Pe Ek Pal Bhi Tehro Main Gulsitan Banau", time: 37 },
  { text: "Agar Tum Kaho..oo", time: 39 },
  { text: "Main Koi Aisa Geet Gau Ki Aarzoo Jagau ", time: 44 },
  { text: "Agar Tum Kaho..oo", time: 49 },
 /* { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },*/
];

// Animate the letters
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calculates time-based opacity on the current line
    var fadeInDuration = 0.5; // Spawn effect duration in seconds
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Apply the appearance effect
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Resets opacity and content if there is no current line
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1);

//funcion title
// Feature to hide title after 216 seconds
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 0.5s ease-in-out forwards"; /* Vanishing duration and timing function */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 500); // Wait 3 seconds before hiding completely
}

//Call the function after 216 seconds (216,000 milliseconds)
setTimeout(ocultarTitulo, 1000);
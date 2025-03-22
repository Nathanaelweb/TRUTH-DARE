const spinner = document.getElementById("spinner");
const spinBtn = document.getElementById("spinBtn");
const output = document.getElementById("output");

const spinSound = new Audio("spin-232536.mp3"); // Load the spinning sound

const truths = [
    "What is your biggest fear?",
    "Have you ever lied to your best friend?",
    "What is the most embarrassing thing you've done?",
    "Who was your first crush?",
    "Have you ever cheated on a test?",
    "What is a secret you've never told anyone?",
    "Who do you like the most in this room?",
    "Will you marry me?",
    "Who do you love most in your Life?",
    "What is your greatest fear",
    "What is your biggest turn-on?",
    "Have you ever had a crush on your best friend?",
    "What do you find most attractive about me?",
    "What’s your favorite memory of us together?",
    "What is one thing you wish we did more often?",
    "Have you ever had a dream about me? What was it?",
    "What’s something you love about me that I don’t realize?",
    "Have you ever been jealous in our relationship? Why?",
    "What’s the most romantic thing I’ve ever done for you?",
    "What’s your biggest fear in our relationship?",
    "If you could change one thing about our relationship, what would it be?",
    "What’s something small I do that makes you really happy?",
    "what's the thing i always do that makes you happy",
    "Have you ever kept a secret from me?",
    "What’s the best compliment I’ve ever given you?",
    "What’s something you’ve wanted to tell me but haven’t yet?",
];

const dares = [
    "Sing a song loudly for 30 seconds.",
    "Dance like a chicken for 1 minute.",
    "Text your crush and say you like them.",
    "Do 20 push-ups right now.",
    "Give me a 10-second kiss without breaking it. ",
    "Let someone draw on your face with a marker.",
    "Talk in an accent for the next 5 minutes.",
    "Eat a spoonful of mustard.",
    "Kiss me.",
    "Hug me",
    "Give me a kiss on my cheek",
    "Whisper the sexiest thing you can think of into my ear.",
    "Recreate our first kiss moment.",
    "Let me write something cute on your neck with lipstick.",
    "Sing me a love song (even if you're bad at singing!).",
    "Give me a sensual back massage for 10 seconds.",
    "Take a cute selfie together and post it.",
    "Send me a flirty text while I’m right next to you.",
    "Try to make me blush in 30 seconds.",
    "Let’s stare into each other’s eyes for 1 minute without laughing.",
    "Describe your dream date night in detail.",
    "Take a slow dance with me—no music required.",
    "Describe in detail how you fell in love with me. ",
    "Let me tickle you for 30 seconds while you try not to laugh!",
    "Blindfold yourself and try to guess which part of my body you’re touching.",
    "Whisper in my ear what you want to do to me later.",

];

let currentRotation = 0; // Track rotation to prevent predictable patterns

spinBtn.addEventListener("click", () => {
    let randomExtraRotations = Math.floor(Math.random() * 5) + 5; // 5 to 10 full spins
    let randomFinalAngle = Math.floor(Math.random() * 360); // Final stopping angle
    let totalRotation = (randomExtraRotations * 360) + randomFinalAngle; // Total degrees to rotate
    currentRotation += totalRotation; // Update rotation count

    // Play the spinning sound
    spinSound.currentTime = 0; 
    spinSound.play();

    // Apply fast spin with smooth slowing
    spinner.style.transition = "transform 1s cubic-bezier(0.1, 0.5, 0.1, 1)";
    spinner.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        // Stop the sound
        spinSound.pause();
        spinSound.currentTime = 0;

        // Determine if it's Truth or Dare
        let finalPosition = currentRotation % 360; 
        let isTruth = finalPosition <= 180;

        let challenge = isTruth
            ? `Truth: ${truths[Math.floor(Math.random() * truths.length)]}`
            : `Dare: ${dares[Math.floor(Math.random() * dares.length)]}`;

        // Apply styles and animation
        output.textContent = challenge;
        output.classList.remove("truth-style", "dare-style");
        output.classList.add(isTruth ? "truth-style" : "dare-style");
        output.style.opacity = "1";
        output.style.animation = "fadeIn 0.5s ease-in-out";

    }, 1000); // Delay matches animation time
});
// Background Music
const backgroundMusic = new Audio("Christina_perri_-_-_A_Thousand_Years.mp3"); // Replace with your audio file
backgroundMusic.loop = true; // Loop the music
backgroundMusic.volume = 0.5; // Adjust volume (0.0 to 1.0)

// Play the music automatically after user interaction
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        backgroundMusic.play().catch(error => console.log("Autoplay blocked by browser:", error));
    }, 500); // Delay to ensure smooth start
});

// Play/Pause Button for Background Music
const musicControlBtn = document.createElement("button");
musicControlBtn.textContent = "🔊 Mute";
musicControlBtn.style.position = "fixed";
musicControlBtn.style.bottom = "20px";
musicControlBtn.style.right = "20px";
musicControlBtn.style.backgroundColor = "#ff4d4d";
musicControlBtn.style.color = "white";
musicControlBtn.style.border = "none";
musicControlBtn.style.padding = "10px 15px";
musicControlBtn.style.fontSize = "16px";
musicControlBtn.style.cursor = "pointer";
musicControlBtn.style.borderRadius = "5px";
document.body.appendChild(musicControlBtn);

// Toggle Music
musicControlBtn.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicControlBtn.textContent = "🔊 Mute";
    } else {
        backgroundMusic.pause();
        musicControlBtn.textContent = "🔇 Unmute";
    }
});
const couplePicture = document.getElementById("couplePicture");

// List of images to switch between
const pictures = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpegg",
    "WhatsApp Image 2024-10-17 at 6.35.18 AM(2).jpeg",
    "WhatsApp Image 2024-10-17 at 6.35.18 AM(1).jpeg",
    "WhatsApp Image 2024-11-03 at 12.49.02 PM.jpeg"
];

spinBtn.addEventListener("click", () => {
    // Add bounce effect when changing the image
    setTimeout(() => {
        let randomPic = pictures[Math.floor(Math.random() * pictures.length)];
        couplePicture.src = randomPic;
        couplePicture.style.animation = "bounce 0.5s ease-in-out";
        
        // Remove animation after it runs once to allow re-triggering
        setTimeout(() => {
            couplePicture.style.animation = "";
        }, 500);
    }, 1000); // Change picture after spin animation
});

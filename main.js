const textToType = "WELCOME TO MY PROFILE";
const typingSpeed = 100;

const typingElement = document.getElementById("text");
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typingElement.innerHTML += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 40);
  }
}

typeText();

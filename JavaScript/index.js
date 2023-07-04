const words = ['Web Developer', 'Graphic Designer', 'Coder', 'FrontEnd Designer']; // Array of words to transition

let currentIndex = 0; // Current word index

function transitionWords() {
    const currentWord = words[currentIndex];
    const nextWord = words[(currentIndex + 1) % words.length]; // Get the next word in a circular manner

    // Create a transition effect by manipulating the CSS opacity property
    currentWordElement.style.opacity = 1; // Show current word
    setTimeout(() => {
        currentWordElement.style.opacity = 0; // Hide current word
        nextWordElement.textContent = nextWord; // Set next word
        nextWordElement.style.opacity = 1; // Show next word
        currentIndex = (currentIndex + 1) % words.length; // Update the current index
        setTimeout(() => {
            nextWordElement.style.opacity = 0; // Hide next word
            transitionWords(); // Repeat the transition with the next word
        }, 2000); // Wait for 1 second before hiding the next word
    }, 100); // Wait for 1 second before transitioning to the next word
}

// Get the HTML elements
const containerElement = document.getElementById('transition-container');
const currentWordElement = document.getElementById('current-word');
const nextWordElement = document.getElementById('next-word');

// Append elements to the container
containerElement.appendChild(currentWordElement);
containerElement.appendChild(nextWordElement);

// Start the transition
transitionWords();

// The words the dynamic text will be looping through
const words = ["security", "passwords", "salting passwords", "hashing passwords"];
const wordElement = document.getElementById("banner-dynamic-words");
let index = 0;
let charIndex = 0;


function typingWordAnimation() {

    // Making sure we are still on the current word.
    if (charIndex < words[index].length) {
        // Then adding one character of the word at a time.
        // Can do this since were basically just dealing with 2D Arrays.
        wordElement.textContent += words[index][charIndex];
        charIndex++;
        setTimeout(typingWordAnimation, 120);

    // Move onto next word
    } else {
        setTimeout(() => {
            wordElement.textContent = "";
            index = (index + 1) % words.length;
            charIndex = 0;
            typingWordAnimation();

        }, 2000);
        
    }
}

typingWordAnimation();

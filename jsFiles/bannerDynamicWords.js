
// The words the dynamic text will be looping through
const words = ["security", "passwords", "hashing", "salting"];
const wordElement = document.getElementById("banner-dynamic-words");
let index = 0;

function wordChange() {
    wordElement.classList.add("fade-out-effect");

    setTimeout(() => {

        // Modulus is used here to reloop the array. Will start again from index 0 and cycle through the words.
        index = (index + 1) % words.length;
        wordElement.innerText = words[index];
        wordElement.classList.remove("fade-out-effect");
    }, 500);
}

setInterval(wordChange, 2500);
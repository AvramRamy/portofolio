// scroll to up bottom
var scrollButton = document.getElementById("scrollButton");
// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } 
    else {
        scrollButton.style.display = "none";
    }
};
// Scroll to the top of the document
scrollButton.addEventListener('click',function() {
    if (document.documentElement.scrollTop > 0) {
        window.scroll({
        top: 0,
        behavior: "smooth"
        });
        }
    }
)

// Fade in effect for my name
var nameElement = document.getElementById('name');
function fadeIn(element) {
    var opacity = 0;
    var timer = setInterval(function() {
    if (opacity >= 1) {
    clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
    }, 100);
}
fadeIn(nameElement);

// Typing Animation
const text = document.getElementById('sec-text');
const textLoad = () => {
    setTimeout( () => {
        text.textContent = "Frontend Developer."
    }, 0)
    setTimeout( () => {
        text.textContent = "JavaScript Developer."
    }, 4000)
    setTimeout( () => {
        text.textContent = "Frontend Developer."
    }, 8000)
    setTimeout( () => {
        text.textContent = "JavaScript Developer."
    }, 12000)
    setTimeout( () => {
        text.textContent = "Frontend Developer."
    }, 16000)
    setTimeout( () => {
        text.textContent = "JavaScript Developer."
    }, 20000)
    setTimeout( () => {
        text.textContent = "Frontend Developer."
    }, 24000)
    setTimeout( () => {
        text.textContent = "JavaScript Developer."
    }, 28000)
    setTimeout( () => {
        text.textContent = "Frontend Developer."
    }, 32000)
    setTimeout( () => {
        text.textContent = "JavaScript Developer."
    }, 36000)
}
textLoad()
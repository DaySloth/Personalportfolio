let typedTextSpan = document.querySelector(".typed-text");
let cursorSpan = document.querySelector(".cursor");

let textArray = ["designer", "programmer", "father", "developer"];
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        if (textArrayIndex >= textArray.length) {
            return;
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
};

function erase() {
    if (typedTextSpan.textContent === "developer") {
        cursorSpan.textContent = "";
        return;
    } else {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            setTimeout(type, typingDelay + 1000);
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay);
});

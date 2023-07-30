const txt = document.querySelector(".txt-sec");

const textLoad = () => {
    setTimeout(() => {
        txt.textContent = "Web-Developer";
    }, 0);
    setTimeout(() => {
        txt.textContent = "Graphic Designer";
    }, 4000);
    setTimeout(() => {
        txt.textContent = "Front-End";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
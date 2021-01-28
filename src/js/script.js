// Get the html objects
let banner = document.getElementById("bannerImg");
let dots = document.getElementsByClassName("dot");

// Images
var images = [], x = -1;
images[0] = "./src/img/banner.jpg";
images[1] = "./src/img/banner2.jpg";
images[2] = "./src/img/banner3.jpg";

// Functions
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    changeImage(x);
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    changeImage(x);
}

function changeImage(x) {
    banner.src = images[x];
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot--active");
    } 
    dots[x].classList.add("dot--active");
}

function startTimer() {
    setInterval(displayNextImage, 6000);
}

// Event listeners
window.onload = startTimer();

dots[0].addEventListener("click", () => {
    x = 0;
    changeImage(x);
});

dots[1].addEventListener("click", () => {
    x = 1;
    changeImage(x);
});

dots[2].addEventListener("click", () => {
    x = 2;
    changeImage(x);
});


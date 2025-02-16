const images = document.querySelectorAll(".achievement-image")
let currentIndex = 0;

function scroll() {
    images.forEach((img,index) => {
        if (currentIndex === index) {
            img.style.display = 'flex';
        }
        else {
            img.style.display = 'none';
        }
    });
}

function go() {
    currentIndex = (currentIndex + 1) % images.length;
    scroll();
}

function goBack() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    scroll();
}

scroll();


const images = document.querySelectorAll(".achievement-image");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function scroll() {
    images.forEach((img, index) => {
        if (currentIndex === index) {
            img.style.display = 'flex';
        } else {
            img.style.display = 'none';
        }
    });
    updateDots();
}

function go() {
    currentIndex = (currentIndex + 1) % images.length;
    scroll();
}

function goBack() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    scroll();
}

// Добавляем обработчики кликов по точкам
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        scroll();
    });
});

scroll();


const images = document.querySelectorAll('.achievement-image'); // Выбор изображений  
let currentIndex = 0; // Индекс текущего изображения  

function updateCarousel() {  
    images.forEach((img, index) => {  
        if (index === currentIndex) {  
            img.classList.remove('blur'); // Убираем размытие с центрального изображения  
        } else {  
            img.classList.add('blur'); // Добавляем размытие к остальным изображениям  
        }  
    });  
}  

// Функция для переключения на следующее изображение  
function nextImage() {  
    currentIndex = (currentIndex + 1) % images.length; // Переключаем на следующее изображение  
    updateCarousel();  
}  

// Функция для переключения на предыдущее изображение  
function prevImage() {  
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Переключаем на предыдущее изображение  
    updateCarousel();  
}  

// Настройка автоматической прокрутки каждые 3 секунды  
setInterval(nextImage, 3000);  

// Инициализация  
updateCarousel();
const images = document.querySelectorAll('.banner-image');
let currentIndex = 0;

function changeBannerImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    
    images[currentIndex].classList.remove('active');
    images[nextIndex].classList.add('active');
    
    currentIndex = nextIndex;
}

// Initialize the first image as active
images[currentIndex].classList.add('active');


setInterval(changeBannerImage, 3000);

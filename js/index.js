document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "../Images/mobbanner1.jpg",
        "..//AI images/largescreen.jpg"
    ];

    const banner = document.getElementById('banner');
    const bannerImages = Array.from(banner.getElementsByClassName('banner-image'));
    let currentImageIndex = 0;

    // Function to change the background image
    function changeImage() {
        const currentImage = bannerImages[currentImageIndex];
        const nextImage = bannerImages[(currentImageIndex + 1) % bannerImages.length];

        currentImage.style.opacity = 0;
        nextImage.style.opacity = 1;

        // Update the background image for the next image
        nextImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('${images[(currentImageIndex + 1) % images.length]}')`;

        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    }

    // Start the image change cycle
    setInterval(changeImage, 3000); // Change image every 3 seconds
});

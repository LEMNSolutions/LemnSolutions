document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    let slides = document.querySelectorAll('.slide');
    let manualButtons = document.querySelectorAll('.manual-btn');
    let slideInterval;
    const pauseTime = 15000; // 15 seconds pause when interacted
    const slideTime = 20000; // 20 seconds for each slide

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        slides[index].style.display = "block";
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideTime);
    }

    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    manualButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            slideIndex = index;
            showSlide(slideIndex);
            clearInterval(slideInterval);
            setTimeout(startSlideShow, pauseTime);
        });
    });

    startSlideShow(); // Start the slideshow
});

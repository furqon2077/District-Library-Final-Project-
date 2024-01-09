document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    let currentIndex = 0;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % sliderContainer.children.length;
      updateSlider();
    }

    function updateSlider() {
      const translateValue = -currentIndex * 100 + "%";
      sliderContainer.style.transform = `translateX(${translateValue})`;
    }

    setInterval(nextSlide, 6000); // Change slide every 3 seconds
  });
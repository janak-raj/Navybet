const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
  });
  function dropSubMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let currentCustomIndex = 0;
    const customCarousel = document.querySelector('.custom-carousel');
    const totalCustomSlides = customCarousel.children.length;
    let isAnimating = false;

    function nextCustomSlide() {
        if (!isAnimating) {
            isAnimating = true;
            currentCustomIndex = (currentCustomIndex + 1) % totalCustomSlides;
            customCarousel.style.transform = `translateX(-${currentCustomIndex * 100}%)`;
            setTimeout(() => {
                isAnimating = false;
            }, 500); // Adjust this timeout to match the animation duration
        }
    }

    function prevCustomSlide() {
        if (!isAnimating) {
            isAnimating = true;
            currentCustomIndex = (currentCustomIndex - 1 + totalCustomSlides) % totalCustomSlides;
            customCarousel.style.transform = `translateX(-${currentCustomIndex * 100}%)`;
            setTimeout(() => {
                isAnimating = false;
            }, 500); // Adjust this timeout to match the animation duration
        }
    }



    // Carousel functionality
    const cardsFrame = document.getElementById('cardsFrame');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    
    let currentIndex = 0;
    const totalCards = 6;
    const visibleCards = 3;
    const maxIndex = totalCards - visibleCards;
    
    // Card width + gap (408px + 35px from Figma)
    const cardWidth = 443;
    
    function updateCarousel() {
      const translateX = -(currentIndex * cardWidth);
      cardsFrame.style.transform = `translateX(${translateX}px)`;
      
      // Update page indicator
      pageIndicator.textContent = `${currentIndex + 1}/6`;
      
      // Update button states
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
      nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }
    
    function scrollNext() {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    }
    
    function scrollPrev() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }
    
    // Button event listeners
    nextBtn.addEventListener('click', scrollNext);
    prevBtn.addEventListener('click', scrollPrev);
    
    // Mouse wheel / trackpad scrolling
    cardsFrame.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      if (e.deltaX > 0 || e.deltaY > 0) {
        scrollNext();
      } else if (e.deltaX < 0 || e.deltaY < 0) {
        scrollPrev();
      }
    });
    
    // Initialize carousel
    updateCarousel();
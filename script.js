const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicators = document.querySelector('.indicators');

    const cardWidth = cards[0].getBoundingClientRect().width + 20;
    let currentIndex = 0;

    function updateIndicators() {
      indicators.innerHTML = '';
      cards.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          moveCarousel();
        });
        indicators.appendChild(dot);
      });
    }

    function moveCarousel() {
      track.style.transform = 'translateX(-' + (cardWidth * currentIndex) + 'px)';
      updateIndicators();
    }

    prevButton.addEventListener('click', () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      moveCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = Math.min(currentIndex + 1, cards.length - 1);
      moveCarousel();
    });

    updateIndicators();
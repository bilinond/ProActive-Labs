const links = document.querySelectorAll('.scroll-link');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function handleScroll() {
    const imgContainers = document.querySelectorAll('.list-numbered, .image-with-shadow');
    imgContainers.forEach(imgContainer => {
        if (isInViewport(imgContainer)) {
            imgContainer.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);

function observeElements() {
    const boxes = document.querySelectorAll('.list-numbered, .image-with-shadow, .intro');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach(box => observer.observe(box));
}

document.addEventListener('DOMContentLoaded', observeElements);

const elements = document.querySelectorAll('.opp');

elements.forEach((element, index) => {
    setTimeout(() => {
        element.classList.add('visible');
    }, index * 800);
});

document.querySelectorAll('.footer-links li').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'translateX(10px)';
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
        }, 200);
    });
});

document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const burgerMenu = document.querySelector('.burger-menu');
    
    if (!navbar.contains(event.target) && !burgerMenu.contains(event.target)) {
        navbar.classList.remove('active');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  let scrollSpeed = 0.75;
  let currentScroll = 0;
  let targetScroll = 0;
  
  window.addEventListener('scroll', () => {
    targetScroll = window.scrollY;
  });
  
  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * scrollSpeed;
    window.scrollTo(0, currentScroll);
  
    requestAnimationFrame(smoothScroll);
  }
  
  smoothScroll();
  
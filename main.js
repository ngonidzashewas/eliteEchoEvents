// nav shadow sort of when scroll
window.addEventListener('scroll', () => { 
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//contact btn circular text rotate
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML=text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        599:{
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');


const openNav = () => {
    nav.style.display = "flex";
    openNavBtn.style.display='none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = "none";
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav)
})

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute("data-src");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach(function(lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute("data-src");
      });
    }
  });
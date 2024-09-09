// CHANGE NAV STYLE ON SCROLL//
window.addEventListener('scroll', () => { 
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


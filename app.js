const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
//toggle nav
    burger.addEventListener('click', () => {
      //toggle nav
      nav.classList.toggle('nav-active');

//animate links
navLinks.forEach((link, index) => {
      if (link.style.animation) {
          link.style.animation = ''
      } else {
          link.style.animation = 'navlinkfade 0.5s ease backwards ${index / 7+1.5}s';
      }
    });
});
}
navSlide();

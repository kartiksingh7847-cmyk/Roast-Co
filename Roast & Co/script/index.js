const btn = document.querySelector('.js-scroll-top');
window.addEventListener('scroll',() => {
  if(window.scrollY > 500) btn.classList.add('show');
  else btn.classList.remove('show');
})
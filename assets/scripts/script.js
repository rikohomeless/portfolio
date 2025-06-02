  function toggleTheme() {
  document.body.classList.toggle('dark-theme');

}
    
  document.querySelectorAll('[data-fslightbox]').forEach(link => {
  const img = new Image();
  img.src = link.href;

});

  let scrollPos = 0;
   
  document.addEventListener('fslightbox:open', () => {
  scrollPos = window.pageYOffset || document.documentElement.scrollTop;

});

  document.addEventListener('fslightbox:opened', () => {
   
  window.scrollTo(0, scrollPos);

});

  let scrollPosition = 0;

  document.addEventListener('fslightbox:open', () => {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

});

  document.addEventListener('fslightbox:opened', () => {
  window.scrollTo(0, scrollPosition);

});

   window.addEventListener('DOMContentLoaded', () => {
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
    img.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'

        });
      });
    });
  });
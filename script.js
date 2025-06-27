document.addEventListener('DOMContentLoaded', () => {
  
  

  const nav = document.querySelector('nav');

  const header = document.querySelector('header');
  if (header) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('stuck', !entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );

    observer.observe(header);
  }

  const hamburger = nav.querySelector('.hamburger');
  console.log("Hamburger:", hamburger);


  hamburger.addEventListener('click', () => {
    console.log('the hamburger has been eaten');
    nav.classList.toggle('active');
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('.section').forEach(section => {
    const divider = document.createElement('div');
    divider.className = 'section-divider';
    section.after(divider);
  });

    
});

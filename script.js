document.addEventListener('DOMContentLoaded', () => {
  let scrollIndex = 0;
  const scroller = document.getElementById('wall-scroller');
  const imageCount = scroller.children.length;
  const imagesPerView = 3;
  const imageWidth = 200 + 16; // width + gap

  console.log("olo");


  document.querySelectorAll(".scroll-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const direction = btn.classList.contains("right") ? 1 : -1;
        scrollWall(direction);
    });
    });


  window.scrollWall = function(direction) {
    const maxIndex = Math.ceil(imageCount / imagesPerView) - 1;
    scrollIndex = (scrollIndex + direction + (maxIndex + 1)) % (maxIndex + 1);
    scroller.style.transform = `translateX(-${scrollIndex * imagesPerView * imageWidth}px)`;
  };

  setInterval(() => window.scrollWall(1), 10000);

  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

  window.toggleMenu = function() {
    document.querySelector('header').classList.toggle('active');
  };

  document.getElementById('year').textContent = new Date().getFullYear();
});

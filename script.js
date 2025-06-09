document.addEventListener('DOMContentLoaded', () => {
  let scrollIndex = 0;
  const scroller = document.getElementById('wall-scroller');
  const imageCount = scroller.children.length;
  const imagesPerView = 3;
  const imageWidth = 200 + 16; // width + gap


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

  const nav = document.getElementById('main-nav');
  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('stuck', !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
  );

  observer.observe(document.querySelector('header'));




  document.getElementById('year').textContent = new Date().getFullYear();
});

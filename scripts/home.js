// Carousel

     const images = [
        './images/products/chainsForged.png',
        './images/products/idahoCircle.png',
        './images/products/punisherFlag.png',
        './images/products/soldiersCross.png',
        './images/products/theFlag.png',
        './images/products/tresspassMeetGod.png',
        './images/products/usaEagle.png',
        './images/products/weThePeople.png'
        ];


    let index = 1;
    const leftImg = document.querySelector('#left img');
    const centerImg = document.querySelector('#center img');
    const rightImg = document.querySelector('#right img');

    function updateImages() {
      const prev = (index - 1 + images.length) % images.length;
      const next = (index + 1) % images.length;
      leftImg.src = images[prev];
      centerImg.src = images[index];
      rightImg.src = images[next];
    }

    document.querySelector('.right-btn').onclick = () => {
      index = (index + 1) % images.length;
      updateImages();
    };

    document.querySelector('.left-btn').onclick = () => {
      index = (index - 1 + images.length) % images.length;
      updateImages();
    };

    updateImages();
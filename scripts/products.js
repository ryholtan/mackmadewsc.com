document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav + Sticky
  const nav = document.querySelector('nav');
  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('stuck', !entry.isIntersecting),
    { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
  );
  const header = document.querySelector('header');
  if (header) observer.observe(header);

  const hamburger = nav.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // --- Product Filtering Logic ---
  const productData = [
    {
      name: "Chains Forged",
      description: "Symbol of strength and unity.",
      image: "images/products/chainsForged.png",
      url: "https://mackmade.square.site/product/chains-forged/1",
      tags: ["steel", "symbolic", "popular"]
    },
    {
      name: "Idaho Circle",
      description: "Celebrate Idaho pride with forged elegance.",
      image: "images/products/idahoCircle.png",
      url: "https://mackmade.square.site/product/idaho-circle/2",
      tags: ["state", "steel", "decor"]
    },
    {
      name: "Punisher Flag",
      description: "Bold, rugged, and forged with pride.",
      image: "images/products/punisherFlag.png",
      url: "https://mackmade.square.site/product/punisher-flag/3",
      tags: ["patriotic", "steel", "symbolic", "text-based", "popular"]
    },
    {
      name: "Soldier's Cross",
      description: "Honoring sacrifice in steel.",
      image: "images/products/soldiersCross.png",
      url: "https://mackmade.square.site/product/soldiers-cross/4",
      tags: ["faith", "memorial", "steel", "decor"]
    },
    {
      name: "The Flag",
      description: "A classic symbol of American freedom.",
      image: "images/products/theFlag.png",
      url: "https://mackmade.square.site/product/the-flag/5",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Trespass Meet God",
      description: "A bold warning forged in steel.",
      image: "images/products/tresspassMeetGod.png",
      url: "https://mackmade.square.site/product/trespass-meet-god/6",
      tags: ["warning", "steel", "outdoor", "text-based"]
    },
    {
      name: "USA Eagle",
      description: "Patriotic steel art forged in freedom.",
      image: "images/products/usaEagle.png",
      url: "https://mackmade.square.site/product/usa-eagle/7",
      tags: ["patriotic", "steel", "symbolic"]
    },
    {
      name: "We the People",
      description: "Rustic declaration of liberty and pride.",
      image: "images/products/weThePeople.png",
      url: "https://mackmade.square.site/product/we-the-people/8",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Chains Forged",
      description: "Symbol of strength and unity.",
      image: "images/products/chainsForged.png",
      url: "https://mackmade.square.site/product/chains-forged/1",
      tags: ["steel", "symbolic", "popular"]
    },
    {
      name: "Idaho Circle",
      description: "Celebrate Idaho pride with forged elegance.",
      image: "images/products/idahoCircle.png",
      url: "https://mackmade.square.site/product/idaho-circle/2",
      tags: ["state", "steel", "decor"]
    },
    {
      name: "Punisher Flag",
      description: "Bold, rugged, and forged with pride.",
      image: "images/products/punisherFlag.png",
      url: "https://mackmade.square.site/product/punisher-flag/3",
      tags: ["patriotic", "steel", "symbolic", "text-based", "popular"]
    },
    {
      name: "Soldier's Cross",
      description: "Honoring sacrifice in steel.",
      image: "images/products/soldiersCross.png",
      url: "https://mackmade.square.site/product/soldiers-cross/4",
      tags: ["faith", "memorial", "steel", "decor"]
    },
    {
      name: "The Flag",
      description: "A classic symbol of American freedom.",
      image: "images/products/theFlag.png",
      url: "https://mackmade.square.site/product/the-flag/5",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Trespass Meet God",
      description: "A bold warning forged in steel.",
      image: "images/products/tresspassMeetGod.png",
      url: "https://mackmade.square.site/product/trespass-meet-god/6",
      tags: ["warning", "steel", "outdoor", "text-based"]
    },
    {
      name: "USA Eagle",
      description: "Patriotic steel art forged in freedom.",
      image: "images/products/usaEagle.png",
      url: "https://mackmade.square.site/product/usa-eagle/7",
      tags: ["patriotic", "steel", "symbolic"]
    },
    {
      name: "We the People",
      description: "Rustic declaration of liberty and pride.",
      image: "images/products/weThePeople.png",
      url: "https://mackmade.square.site/product/we-the-people/8",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Chains Forged",
      description: "Symbol of strength and unity.",
      image: "images/products/chainsForged.png",
      url: "https://mackmade.square.site/product/chains-forged/1",
      tags: ["steel", "symbolic", "popular"]
    },
    {
      name: "Idaho Circle",
      description: "Celebrate Idaho pride with forged elegance.",
      image: "images/products/idahoCircle.png",
      url: "https://mackmade.square.site/product/idaho-circle/2",
      tags: ["state", "steel", "decor"]
    },
    {
      name: "Punisher Flag",
      description: "Bold, rugged, and forged with pride.",
      image: "images/products/punisherFlag.png",
      url: "https://mackmade.square.site/product/punisher-flag/3",
      tags: ["patriotic", "steel", "symbolic", "text-based", "popular"]
    },
    {
      name: "Soldier's Cross",
      description: "Honoring sacrifice in steel.",
      image: "images/products/soldiersCross.png",
      url: "https://mackmade.square.site/product/soldiers-cross/4",
      tags: ["faith", "memorial", "steel", "decor"]
    },
    {
      name: "The Flag",
      description: "A classic symbol of American freedom.",
      image: "images/products/theFlag.png",
      url: "https://mackmade.square.site/product/the-flag/5",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Trespass Meet God",
      description: "A bold warning forged in steel.",
      image: "images/products/tresspassMeetGod.png",
      url: "https://mackmade.square.site/product/trespass-meet-god/6",
      tags: ["warning", "steel", "outdoor", "text-based"]
    },
    {
      name: "USA Eagle",
      description: "Patriotic steel art forged in freedom.",
      image: "images/products/usaEagle.png",
      url: "https://mackmade.square.site/product/usa-eagle/7",
      tags: ["patriotic", "steel", "symbolic"]
    },
    {
      name: "We the People",
      description: "Rustic declaration of liberty and pride.",
      image: "images/products/weThePeople.png",
      url: "https://mackmade.square.site/product/we-the-people/8",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Chains Forged",
      description: "Symbol of strength and unity.",
      image: "images/products/chainsForged.png",
      url: "https://mackmade.square.site/product/chains-forged/1",
      tags: ["steel", "symbolic", "popular"]
    },
    {
      name: "Idaho Circle",
      description: "Celebrate Idaho pride with forged elegance.",
      image: "images/products/idahoCircle.png",
      url: "https://mackmade.square.site/product/idaho-circle/2",
      tags: ["state", "steel", "decor"]
    },
    {
      name: "Punisher Flag",
      description: "Bold, rugged, and forged with pride.",
      image: "images/products/punisherFlag.png",
      url: "https://mackmade.square.site/product/punisher-flag/3",
      tags: ["patriotic", "steel", "symbolic", "text-based", "popular"]
    },
    {
      name: "Soldier's Cross",
      description: "Honoring sacrifice in steel.",
      image: "images/products/soldiersCross.png",
      url: "https://mackmade.square.site/product/soldiers-cross/4",
      tags: ["faith", "memorial", "steel", "decor"]
    },
    {
      name: "The Flag",
      description: "A classic symbol of American freedom.",
      image: "images/products/theFlag.png",
      url: "https://mackmade.square.site/product/the-flag/5",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Trespass Meet God",
      description: "A bold warning forged in steel.",
      image: "images/products/tresspassMeetGod.png",
      url: "https://mackmade.square.site/product/trespass-meet-god/6",
      tags: ["warning", "steel", "outdoor", "text-based"]
    },
    {
      name: "USA Eagle",
      description: "Patriotic steel art forged in freedom.",
      image: "images/products/usaEagle.png",
      url: "https://mackmade.square.site/product/usa-eagle/7",
      tags: ["patriotic", "steel", "symbolic"]
    },
    {
      name: "We the People",
      description: "Rustic declaration of liberty and pride.",
      image: "images/products/weThePeople.png",
      url: "https://mackmade.square.site/product/we-the-people/8",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Chains Forged",
      description: "Symbol of strength and unity.",
      image: "images/products/chainsForged.png",
      url: "https://mackmade.square.site/product/chains-forged/1",
      tags: ["steel", "symbolic", "popular"]
    },
    {
      name: "Idaho Circle",
      description: "Celebrate Idaho pride with forged elegance.",
      image: "images/products/idahoCircle.png",
      url: "https://mackmade.square.site/product/idaho-circle/2",
      tags: ["state", "steel", "decor"]
    },
    {
      name: "Punisher Flag",
      description: "Bold, rugged, and forged with pride.",
      image: "images/products/punisherFlag.png",
      url: "https://mackmade.square.site/product/punisher-flag/3",
      tags: ["patriotic", "steel", "symbolic", "text-based", "popular"]
    },
    {
      name: "Soldier's Cross",
      description: "Honoring sacrifice in steel.",
      image: "images/products/soldiersCross.png",
      url: "https://mackmade.square.site/product/soldiers-cross/4",
      tags: ["faith", "memorial", "steel", "decor"]
    },
    {
      name: "The Flag",
      description: "A classic symbol of American freedom.",
      image: "images/products/theFlag.png",
      url: "https://mackmade.square.site/product/the-flag/5",
      tags: ["patriotic", "steel", "text-based"]
    },
    {
      name: "Trespass Meet God",
      description: "A bold warning forged in steel.",
      image: "images/products/tresspassMeetGod.png",
      url: "https://mackmade.square.site/product/trespass-meet-god/6",
      tags: ["warning", "steel", "outdoor", "text-based"]
    },
    {
      name: "USA Eagle",
      description: "Patriotic steel art forged in freedom.",
      image: "images/products/usaEagle.png",
      url: "https://mackmade.square.site/product/usa-eagle/7",
      tags: ["patriotic", "steel", "symbolic"]
    },
    {
      name: "We the People",
      description: "Rustic declaration of liberty and pride.",
      image: "images/products/weThePeople.png",
      url: "https://mackmade.square.site/product/we-the-people/8",
      tags: ["patriotic", "steel", "text-based"]
    }
  ];

  const grid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchBar');
  const tagContainer = document.getElementById('tagFilters');

  const sanitize = text => text.toLowerCase().replace(/<[^>]*>?/gm, '').replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').trim();

  const allTags = [...new Set(productData.flatMap(p => p.tags))].sort();
  allTags.forEach(tag => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${tag}"> ${tag}`;
    tagContainer.appendChild(label);
  });

  function getSelectedTags() {
    return Array.from(tagContainer.querySelectorAll('input:checked')).map(cb => cb.value);
  }

  function renderProducts(filterText = '', selectedTags = []) {
    grid.innerHTML = '';
    let filtered = [...productData];
    const cleanText = sanitize(filterText);

    if (cleanText) {
      filtered = filtered.filter(p =>
        sanitize(p.name).includes(cleanText) ||
        sanitize(p.description).includes(cleanText)
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(p =>
        selectedTags.every(tag => p.tags.includes(tag))
      );
    } else if (!cleanText) {
      filtered = filtered.filter(p => p.tags.includes('popular'));
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="color:white;">No products found.</p>';
      return;
    }

    filtered.forEach(p => {
      const card = document.createElement('a');
      card.href = p.url;
      card.target = '_blank';
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image-container">
          <img src="${p.image}" alt="${p.name}" />
          <div class="product-overlay">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <span class="product-link">Shop Now</span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  searchInput.addEventListener('input', () => {
    renderProducts(searchInput.value, getSelectedTags());
  });

  tagContainer.addEventListener('change', () => {
    renderProducts(searchInput.value, getSelectedTags());
  });

  renderProducts();
});

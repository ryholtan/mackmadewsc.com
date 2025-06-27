document.addEventListener('DOMContentLoaded', () => {
  const colors = ['red', 'blue', 'green', 'black', 'bronze', 'gold', 'brown'];

  const colorMap = {
    red: '#c0392b',
    blue: '#2980b9',
    green: '#27ae60',
    black: '#2c3e50',
    bronze: '#cd7f32',
    gold: '#bfa640',
    brown: '#8b4513'
  };

  const products = {
    "USA Eagle": "eagle",
    "Side Table": "side-table",
    "Key Holder": "key-holder",
    "Fish Wall Art": "fish-art",
    "Keychain": "keychain",
    "Welcome to Idaho Wall Art": "idaho-art"
  };

  const productSelect = document.createElement('select');
  const colorSelect = document.createElement('select');
  const previewImg = document.getElementById('preview-img');
  const swatchContainer = document.getElementById('color-options');

  productSelect.id = 'product-select';
  colorSelect.id = 'color-select';

  // Populate product dropdown
  Object.entries(products).forEach(([label, value]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    productSelect.appendChild(option);
  });

  // Populate color swatches and select
  colors.forEach(color => {
    const swatch = document.createElement('div');
    swatch.classList.add('swatch');
    swatch.style.backgroundColor = colorMap[color] || color;
    swatch.setAttribute('data-color', color);
    swatch.title = color;
    swatch.addEventListener('click', () => {
      colorSelect.value = color;
      updatePreview();
    });
    swatchContainer.appendChild(swatch);

    const colorOption = document.createElement('option');
    colorOption.value = color;
    colorOption.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    colorSelect.appendChild(colorOption);
  });

  // Insert selects above the swatches
  const semiInfo = document.querySelector('.semi-info');
  semiInfo.insertBefore(productSelect, swatchContainer);
  semiInfo.insertBefore(colorSelect, swatchContainer);

  function updatePreview() {
    const product = productSelect.value;
    const color = colorSelect.value;
    const capProd = product.charAt(0).toUpperCase() + product.slice(1);
    previewImg.src = `images/products/semiCustom/${product}/${color}${capProd}.png`;
  }

  productSelect.addEventListener('change', updatePreview);
  colorSelect.addEventListener('change', updatePreview);

  // Set current year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initial render
  updatePreview();
});

// Image placeholder utility - generates placeholder images
export const getPlaceholderImage = (width = 300, height = 300, category = 'jewelry') => {
  const categories = {
    jewelry: '💎',
    ring: '💍',
    necklace: '✨',
    earring: '👂',
    bangle: '🔗',
    bridal: '👰'
  };

  const emoji = categories[category] || categories.jewelry;

  // Using a simple data URL to generate placeholder
  // Returns a solid color with emoji in the center
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect fill='%23f3e5ab' width='${width}' height='${height}'/%3E%3Ctext x='50%25' y='50%25' font-size='80' text-anchor='middle' dy='.3em' font-family='Arial'%3E${emoji}%3C/text%3E%3C/svg%3E`;
};

// Generate placeholder images for all products in products.json
export const generateProductPlaceholders = () => {
  const categoryEmojis = {
    'Rings': 'ring',
    'Necklaces': 'necklace',
    'Earrings': 'earring',
    'Bangles': 'bangle',
    'Bridal Sets': 'bridal'
  };

  return categoryEmojis;
};

// Public placeholder URLs (for when you want to use external placeholders)
export const getExternalPlaceholder = (productName = '') => {
  // Using placeholder.com service
  return `https://via.placeholder.com/400x400?text=${encodeURIComponent(productName)}`;
};

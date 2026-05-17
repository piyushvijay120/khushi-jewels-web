export const CONTACT_CONFIG = {
  phoneNumber: '+917426962399',
  whatsappNumber: '917426962399',
  email: 'info@khushijewels.com',
  address: 'Jaipur, Rajasthan',
  storeName: 'Khushi Jewels',

  whatsappMessages: {
    inquiry: 'Hi! I am interested in your jewellery products.',
    product: (productName, price) =>
      `Hi! I am interested in ${productName} (${price}). Could you provide more details?`,
    custom: 'Hi! I would like to inquire about custom jewellery designs.',
    general: 'Hi! I would like to get more information about your products and services.'
  },

  social: {
    instagram: 'https://instagram.com/khushijewels_',
    youtube: 'https://youtube.com/'
  },

  hours: {
    weekdays: 'Mon – Sat: 10 AM – 10 PM',
    sunday: 'Sunday: Closed'
  }
};

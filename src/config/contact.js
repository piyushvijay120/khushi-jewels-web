export const CONTACT_CONFIG = {
  phoneNumber: '+917426962399',
  whatsappNumber: '917426962399',
  email: 'khushigems707@gmail.com',
  address: 'Krishnam House, 1089, Office No. 11, 1st Floor,\nNear SBI Bank, Churukon Ka Rasta,\nChura Rasta, Jaipur – 302003',
  addressOneLine: 'Krishnam House, 1089, Office No. 11, 1st Floor, Near SBI Bank, Churukon Ka Rasta, Chura Rasta, Jaipur – 302003',
  storeName: 'Khushi Jewels',
  businessName: 'Khushi Gems',
  owners: [
    { name: 'Sanjay Vijayvargiya', role: 'Owner' },
    { name: 'Aman Vijayvargiya', role: 'Owner' },
  ],

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

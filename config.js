// Configuration for WhatsApp Chatbot
// Update this file with your WhatsApp number

const CHATBOT_CONFIG = {
  // Your WhatsApp number with country code (without + sign)
  // Example: '972501234567' for Israeli number +972-50-123-4567
  // Example: '1234567890' for US number +1-234-567-890
  whatsappNumber: '972501234567', // Replace with your actual WhatsApp number
  
  // Bot name (appears in chat header)
  botName: 'אוליבר',
  
  // Bot status message
  botStatus: 'זמין עכשיו',
  
  // Welcome message
  welcomeMessage: 'שלום! 👋\nאני אוליבר, הכלב המלוכלך! איך אני יכול לעזור לך היום?',
  
  // Quick action buttons
  quickActions: [
    { text: 'הזמנת ספר', message: 'אני רוצה להזמין את הספר' },
    { text: 'איך לקבל?', message: 'איך אני מקבל את הספר?' },
    { text: 'מחיר', message: 'מה המחיר?' }
  ]
};

// Make config available globally
window.CHATBOT_CONFIG = CHATBOT_CONFIG;

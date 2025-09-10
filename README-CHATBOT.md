# WhatsApp Chatbot for Oliver Landing Page

A floating WhatsApp chatbot widget that allows visitors to chat with Oliver (the dog) and send messages directly to your WhatsApp.

## Features

- 🐶 **Friendly Oliver Bot**: Interactive chatbot with Hebrew responses
- 📱 **WhatsApp Integration**: Direct message sending to your WhatsApp
- 🎨 **Beautiful Design**: Matches your site's color scheme and theme
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚡ **Quick Actions**: Pre-defined buttons for common questions
- 🔄 **Real-time Chat**: Smooth animations and typing indicators

## Setup Instructions

### 1. Configure Your WhatsApp Number

Edit the `config.js` file and update your WhatsApp number:

```javascript
const CHATBOT_CONFIG = {
  // Replace with your actual WhatsApp number (with country code, no + sign)
  whatsappNumber: '972501234567', // Example: Israeli number +972-50-123-4567
  // ... other settings
};
```

**Important**: 
- Include country code without the `+` sign
- Example: For Israeli number `+972-50-123-4567`, use `972501234567`
- Example: For US number `+1-234-567-890`, use `1234567890`

### 2. Customize Bot Settings (Optional)

You can customize the bot's behavior in `config.js`:

```javascript
const CHATBOT_CONFIG = {
  whatsappNumber: 'YOUR_NUMBER_HERE',
  botName: 'אוליבר',                    // Bot name in chat header
  botStatus: 'זמין עכשיו',              // Status message
  welcomeMessage: 'שלום! 👋\nאני אוליבר...', // Welcome message
  quickActions: [                        // Quick action buttons
    { text: 'הזמנת ספר', message: 'אני רוצה להזמין את הספר' },
    { text: 'איך לקבל?', message: 'איך אני מקבל את הספר?' },
    { text: 'מחיר', message: 'מה המחיר?' }
  ]
};
```

### 3. Test the Chatbot

1. Open your website in a browser
2. Look for the green WhatsApp button in the bottom-right corner
3. Click it to open the chat
4. Try sending a message or using the quick action buttons
5. Click "📱 שלח ב-WhatsApp" to test WhatsApp integration

## How It Works

### For Visitors:
1. **Click the WhatsApp button** to open the chat
2. **Type a message** or use quick action buttons
3. **Get instant responses** from Oliver the dog
4. **Send to WhatsApp** by clicking the WhatsApp button after bot responses

### For You:
1. **Messages are sent to your WhatsApp** when visitors click the WhatsApp button
2. **You receive the conversation** and can respond directly in WhatsApp
3. **No backend required** - everything works client-side

## Customization

### Adding New Bot Responses

Edit the `getBotResponse()` method in `chatbot.js`:

```javascript
getBotResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('your_keyword')) {
    return 'Your custom response in Hebrew';
  }
  
  // Add more responses...
}
```

### Styling

The chatbot styles are in `styles.css` under the "WhatsApp Chat Widget Styles" section. You can customize:
- Colors and gradients
- Sizes and spacing
- Animations
- Mobile responsiveness

### Quick Actions

Add or modify quick action buttons in `config.js`:

```javascript
quickActions: [
  { text: 'Button Text', message: 'Message to send when clicked' },
  // Add more buttons...
]
```

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Troubleshooting

### WhatsApp Button Not Working
- Check that your WhatsApp number is correctly set in `config.js`
- Ensure the number includes country code without `+` sign
- Test the WhatsApp URL manually: `https://wa.me/YOUR_NUMBER`

### Chat Not Opening
- Check browser console for JavaScript errors
- Ensure `config.js` is loaded before `chatbot.js`
- Verify all files are in the correct directory

### Styling Issues
- Check that `styles.css` is properly linked
- Ensure no CSS conflicts with existing styles
- Test on different screen sizes

## Files Structure

```
your-website/
├── index.html          # Main page (updated with chatbot HTML)
├── styles.css          # Styles (updated with chatbot CSS)
├── script.js           # Original JavaScript
├── chatbot.js          # Chatbot functionality
├── config.js           # Configuration file
└── README-CHATBOT.md   # This file
```

## Support

If you need help with the chatbot:
1. Check the troubleshooting section above
2. Verify your WhatsApp number format
3. Test in different browsers
4. Check browser console for errors

The chatbot is designed to work out-of-the-box once you set your WhatsApp number!

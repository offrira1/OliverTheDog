# Oliver the Dirty Dog - React Landing Page

A modern, interactive React landing page for the children's book "Oliver the Dirty Dog" (אוליבר הכלב המלוכלך).

## Features

- 🚀 **Modern React Architecture** - Built with React 18 and Vite
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Interactive Gallery** - Click to view different book pages
- 💬 **WhatsApp Integration** - Direct chat with customers
- ⚡ **Fast Performance** - Optimized with Vite bundler
- 🎯 **Component-Based** - Clean, maintainable code structure

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section
│   ├── Features.jsx        # Features grid
│   ├── Gallery.jsx         # Interactive image gallery
│   ├── Order.jsx           # Order/pricing section
│   └── WhatsAppChat.jsx    # WhatsApp chatbot
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## Customization

### WhatsApp Number
Update the WhatsApp number in `src/components/WhatsAppChat.jsx`:
```javascript
const whatsappNumber = '+972501234567' // Replace with your number
```

### Gallery Images
Add or modify images in `src/components/Gallery.jsx`:
```javascript
const galleryImages = [
  {
    src: 'assets/your-image.png',
    title: 'Your Title',
    subtitle: 'Your Subtitle'
  }
  // ... more images
]
```

### Styling
All styles are in `src/index.css`. The design uses CSS Grid and Flexbox for responsive layouts.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational and commercial use.

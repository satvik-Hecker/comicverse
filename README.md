# ComicVerse Hub 🦸‍♂️

A dynamic, high-fidelity online comic book store built with pure HTML, CSS, and JavaScript. This project demonstrates advanced front-end design, responsive layout, and client-side interactivity without any backend dependencies.

## 🌐 Live Demo

**Visit the live website:** [https://srishtisingh77.github.io/comicVerse/html/index.html](https://srishtisingh77.github.io/comicVerse/html/index.html)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages Overview](#pages-overview)
- [Key Features](#key-features)
- [Design Highlights](#design-highlights)
- [Browser Support](#browser-support)
- [License](#license)

## ✨ Features

### 🏠 Homepage

- **Hero Carousel**: Auto-rotating carousel showcasing featured comics with smooth transitions
- **New Releases Section**: Displays the latest comic book releases
- **Popular Series**: Highlights trending and popular comic series
- **Publisher Spotlights**: Dedicated sections for Marvel, DC, and Image Comics

### 🔍 Browse Page

- **Advanced Filtering**: Filter comics by publisher, genre, or character
- **Search Functionality**: Real-time search by comic title
- **Smart Sorting**: Sort by price, title, or release date (ascending/descending)
- **Responsive Grid Layout**: Adaptive grid that works on all screen sizes

### 📖 Comic Detail Page

- **Dynamic Content Loading**: Content populated via URL parameters
- **Zoom-on-Hover**: Interactive comic cover image with zoom effect
- **Detailed Information**: Synopsis, creators, characters, and pricing
- **Add to Cart**: Seamless cart integration with quantity selection

### 🛒 Shopping Cart

- **Persistent Storage**: Cart data saved in localStorage
- **Real-time Updates**: Dynamic quantity adjustment and item removal
- **Price Calculation**: Automatic subtotal, tax, and total calculation
- **Checkout Simulation**: Complete checkout flow with confirmation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**:
  - Custom properties (CSS Variables)
  - Flexbox and Grid layouts
  - Advanced animations and transitions
  - Responsive design with media queries
- **JavaScript (ES6+)**:
  - Modern ES6+ syntax
  - LocalStorage API for cart persistence
  - Dynamic DOM manipulation
  - Event handling and delegation

## 📁 Project Structure

```
comic-verse/
│
├── html/                  # HTML pages
│   ├── index.html        # Homepage
│   ├── browse.html       # Browse all comics
│   ├── comic-detail.html # Individual comic details
│   └── cart.html         # Shopping cart
│
├── css/                   # Stylesheets
│   └── styles.css        # Main stylesheet with animations
│
├── js/                    # JavaScript files
│   ├── comics.js         # Comic data and helper functions
│   ├── utils.js          # Utility functions (cart, formatting)
│   ├── home.js           # Homepage functionality
│   ├── browse.js         # Browse page filtering and sorting
│   ├── detail.js         # Comic detail page logic
│   └── cart.js           # Shopping cart operations
│
├── images/                # Comic cover images
│   ├── spiderman-1.jpg
│   ├── batman-dark-knight.jpg
│   ├── walking-dead-1.jpg
│   └── ... (more images)
│
├── index.html            # Root redirect page
├── prd.txt               # Project requirements document
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Installation

1. **Clone the repository** (or download as ZIP):

   ```bash
   git clone https://github.com/vaibhavkothari33/ComicVerse.git
   cd ComicVerse
   ```

2. **Open in browser**:

   - Simply open `html/index.html` in your web browser
   - Or use a local server:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server

     # Using PHP
     php -S localhost:8000
     ```

3. **Access the site**:
   - Direct file: `file:///path/to/comic-verse/html/index.html`
   - Local server: `http://localhost:8000/html/index.html`

### Deployment

This project is designed to work with static hosting services:

- **GitHub Pages**: Already deployed at [https://srishtisingh77.github.io/comicVerse/html/index.html](https://srishtisingh77.github.io/comicVerse/html/index.html)
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **Any static hosting service**: Upload all files maintaining the folder structure

## 📄 Pages Overview

### 1. Homepage (`index.html`)

- Hero carousel with featured comics
- New releases grid
- Popular series showcase
- Publisher spotlight sections (Marvel, DC, Image)

### 2. Browse Page (`browse.html`)

- Complete comic catalog
- Filter by publisher, genre, character
- Search by title
- Sort by various criteria
- Responsive grid layout

### 3. Comic Detail Page (`comic-detail.html`)

- Dynamic content based on URL parameter (`?id=001`)
- Large comic cover with zoom effect
- Full synopsis and creator information
- Character tags
- Add to cart functionality

### 4. Shopping Cart (`cart.html`)

- View all cart items
- Update quantities
- Remove items
- Calculate totals (subtotal, tax, total)
- Checkout simulation

## 🎨 Key Features

### 🎭 Animations & Effects

- **Smooth Transitions**: All interactions have fluid animations
- **Hover Effects**: Cards lift and glow on hover
- **Staggered Animations**: Comic cards fade in sequentially
- **Shimmer Effects**: Buttons and cards have light sweep effects
- **Pulse Animations**: Active elements pulse for attention
- **Zoom Effects**: Images zoom on hover for better viewing

### 🎨 Design Elements

- **Dark Comic Theme**: Bold colors (red, blue, gold) on dark background
- **Gradient Backgrounds**: Subtle animated gradients
- **Glow Effects**: Text and elements have comic-style glows
- **Modern UI**: Clean, professional design comparable to major comic sites

### 📱 Responsive Design

- **Mobile-First**: Optimized for all screen sizes
- **Flexible Grids**: Adaptive layouts that work on any device
- **Touch-Friendly**: Large tap targets for mobile users
- **Collapsible Navigation**: Mobile menu for smaller screens

### 💾 Data Management

- **Static Data**: All comic information stored in `js/comics.js`
- **LocalStorage**: Cart persists across sessions
- **No Backend**: Fully client-side, no server required

## 🎯 Design Highlights

- **Color Scheme**:

  - Primary Red (#ff0000) for accents
  - Secondary Blue (#0066ff) for links
  - Accent Gold (#ffd700) for prices
  - Dark backgrounds for comic book feel

- **Typography**:

  - Impact font for headings (comic book style)
  - Arial/Helvetica for body text (readability)

- **Animations**:
  - Fade-in on page load
  - Slide-in for carousel content
  - Pulse for active elements
  - Shimmer for interactive elements

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- This is a **portfolio demonstration site**
- All comic data is static (stored in JavaScript)
- No actual purchases are processed
- Images are placeholder/demo images
- Cart data is stored locally in browser

## 🔮 Future Enhancements

Potential improvements for future versions:

- [ ] Add more comic titles and images
- [ ] Implement wishlist functionality
- [ ] Add user reviews and ratings
- [ ] Create comic series collections
- [ ] Add advanced search filters
- [ ] Implement pagination for large catalogs
- [ ] Add social sharing features
- [ ] Create admin panel for managing comics

## 👨‍💻 Author

**Vaibhav Kothari**

- GitHub: [@vaibhavkothari33](https://github.com/vaibhavkothari33)
- Live Site: [ComicVerse Hub](https://srishtisingh77.github.io/comicVerse/html/index.html)

## 📄 License

This project is created for portfolio/demonstration purposes. All comic book titles, characters, and related content are properties of their respective owners (Marvel, DC Comics, Image Comics, etc.).

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**

For questions or feedback, please visit the [live website](https://srishtisingh77.github.io/comicVerse/html/index.html) or check out the code on GitHub.
#   c o m i c v e r s e  
 
# 3D Portfolio Website

A modern, responsive portfolio website featuring 3D elements using Three.js, smooth animations, and a clean design.

## Features

- Responsive design that works on all devices
- Interactive 3D elements using Three.js
- Smooth scrolling and animations
- Contact form
- Mobile-friendly navigation
- Loading animation
- Parallax scrolling effects
- Modern UI/UX design

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- Three.js for 3D graphics
- GSAP for animations

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/3d-portfolio.git
```

2. Navigate to the project directory:
```bash
cd 3d-portfolio
```

3. Open `index.html` in your browser or use a local server.

## Customization

### Colors
You can customize the color scheme by modifying the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2a2a2a;
    --secondary-color: #4a90e2;
    --text-color: #333;
    --background-color: #ffffff;
    --accent-color: #ff6b6b;
}
```

### 3D Objects
Modify the 3D objects in `three-scenes.js` by changing the geometries and materials in the respective scene creation methods.

### Content
Update the content in `index.html` to match your personal information, projects, and contact details.

## Deployment to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)

2. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

3. Deploy using one of these methods:

### Method 1: Using Vercel CLI
```bash
vercel
```

### Method 2: Using Vercel Dashboard
1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

## Performance Optimization

- The website uses lazy loading for 3D scenes
- Images are optimized for web use
- CSS and JavaScript are minified for production
- Three.js scenes are only initialized when in viewport

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Three.js for 3D graphics
- GSAP for animations
- Font Awesome for icons 
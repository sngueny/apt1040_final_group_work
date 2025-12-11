# Solar Consult

A professional website for Solar Consult - your trusted partner in solar energy solutions. This project provides expert advice and consultation to help businesses and individuals transition to sustainable solar energy.

## Project Overview

Solar Consult is a responsive, multi-page website built with HTML, CSS, and JavaScript. The site offers information about solar energy solutions, consultation services, and provides a contact form for potential clients to reach out.

## Features

- **Home Page**: Welcome section with introduction to Solar Consult services
- **About Page**: Information about the company, mission, and values
- **Consult Page**: Details about consultation services and offerings
- **Contact Page**: Interactive contact form for client inquiries
- **Responsive Design**: Mobile-friendly layout that works across devices
- **Navigation Menu**: Easy-to-use navigation bar on all pages

## Project Structure

```
solar-consult/
│
├── README.md                          # Project documentation (this file)
├── index.html                         # Home page
├── about.html                         # About page
├── consult.html                       # Consultation page
├── contact.html                       # Contact page
│
└── assets/
    ├── css/
    │   └── style.css                 # Main stylesheet for all pages
    │
    ├── js/
    │   └── script.js                 # JavaScript functionality
    │
    └── images/                       # Image assets directory
        └── (image files go here)
```

## File Descriptions

### Root Level Files

| File | Description |
|------|-------------|
| `index.html` | Landing/Home page - introduces Solar Consult and its mission |
| `about.html` | About page - details company information, mission, and values |
| `consult.html` | Consultation page - information about solar energy consultation services |
| `contact.html` | Contact page - includes a contact form for client inquiries |

### Assets Directory

#### `/assets/css/`
- **`style.css`**: Main stylesheet containing all CSS rules for styling HTML elements, layout, colors, fonts, and responsive design rules.

#### `/assets/js/`
- **`script.js`**: JavaScript file for interactive features and functionality (form validation, animations, dynamic content, etc.)

#### `/assets/images/`
- Directory for storing image assets used throughout the website (logos, icons, banner images, etc.)

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required for basic usage

### Installation

1. Clone or download this project to your local machine:
```bash
git clone <repository-url>
cd solar-consult
```

2. Open the project in your preferred code editor (VS Code, Sublime Text, etc.)

3. To view the website, simply open `index.html` in your web browser or use a local server:

Using Python 3:
```bash
python -m http.server 8000
```

Using Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Using Node.js (with `http-server` installed):
```bash
http-server
```

4. Navigate to `http://localhost:8000` in your browser

## Development

### Adding New Pages
1. Create a new HTML file in the root directory
2. Include the standard navigation menu
3. Link it in the navigation on all existing pages

### Styling
- All CSS rules should be added to `/assets/css/style.css`
- Follow a mobile-first responsive design approach
- Use media queries for different screen sizes

### JavaScript
- Add interactive features and validation scripts to `/assets/js/script.js`
- Ensure all interactive elements are tested across browsers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add CSS styling and responsive design
- [ ] Implement form validation and submission handling in JavaScript
- [ ] Add image assets and optimize for web
- [ ] Implement mobile-first responsive design
- [ ] Add smooth scrolling and animations
- [ ] Create a blog section for solar energy tips
- [ ] Integrate with third-party service for form submissions
- [ ] Add SEO optimization
- [ ] Implement dark mode toggle

## Contributing

When contributing to this project:
1. Keep HTML semantic and accessible
2. Follow consistent naming conventions
3. Test changes across multiple browsers
4. Document any new features in this README
5. Maintain responsive design principles

## License

This project is owned by Solar Consult. All rights reserved (2025).

## Contact & Support

For inquiries about solar energy solutions or website support:
- Visit the Contact page on the website
- Use the contact form to reach out directly

---

**Last Updated**: November 11, 2025

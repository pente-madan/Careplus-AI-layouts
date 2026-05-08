# CarePlus AI Layouts

A modern healthcare website layout built with React, Vite, and Tailwind CSS following a comprehensive design system and clean architecture.

## 🚀 Features

- 🎨 Design system with custom color palette, typography, and spacing
- ⚡ Fast development with Vite
- 🎯 Tailwind CSS for utility-first styling
- ✨ Smooth animations and hover effects
- 🏗️ Clean component architecture
- 📦 Modular and maintainable codebase

## 🏛️ Architecture

### Folder Structure
```
src/
├── layouts/              # Layout components
│   ├── Layout1.jsx      # Hero section layout
│   └── Layout2.jsx      # Contact form layout
├── styles/              # Global styles and design system
│   ├── fonts.css        # Font imports
│   ├── theme.css        # Design system tokens
│   └── hover-effects.css # Reusable hover effects
├── App.jsx              # Root component
└── main.jsx             # Application entry point
```

### Key Components

#### Layout1
- Hero section with asymmetrical two-column layout
- Personalized healthcare messaging
- Call-to-action buttons
- Background decorative elements

#### Layout2
- Contact form with image gallery
- Professional form inputs
- Responsive grid layout
- Modern UI design

## 🛠️ Technology Stack

- **React 18** - UI library with hooks
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
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

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

The project follows a comprehensive design system documented in `DESIGN_SYSTEM.md`:

- **Color Palette**: Primary red (#C94234), slate grays, and accent colors
- **Typography**: Plus Jakarta Sans (UI), Lato (Display)
- **Spacing**: 8px grid system
- **Shadows**: Layered shadow system with glow effects
- **Border Radius**: 7 size variants from sm to 2xl
- **Transitions**: Fast (150ms), base (300ms), slow (500ms), image (700ms)

## 📱 Responsive Design

- **Mobile**: Single column layouts
- **Tablet**: Optimized spacing and typography
- **Desktop**: Multi-column layouts with full design

## 🔧 Development

### Adding New Layouts

1. Create a new component in `src/layouts/`
2. Import it in `src/App.jsx`
3. Add it to the render method

### Code Quality

- Functional components with hooks
- Meaningful component names
- Clean separation of concerns
- Production-level code standards

## 📄 License

MIT

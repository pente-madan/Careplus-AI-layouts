import React from 'react';
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import Layout4 from './layouts/Layout4';
import Layout5 from './layouts/Layout5';
import Layout6 from './layouts/Layout6';
import './index.css';

/**
 * Main App Component
 * Root component that renders all layout components
 * Clean and simple architecture without routing complexity
 */
function App() {
  return (
    <div className="App">
      {/* Layout 1: Hero Section */}
      <Layout1 />

      {/* Layout 2: Contact Form Section */}
      <Layout2 />

      {/* Layout 3: Diagonal Split Hero */}
      <Layout3 />

      {/* Layout 4: Healthy Eyes Section */}
      <Layout4 />

      {/* Layout 5: Dark Theme Services Section */}
      <Layout5 />

      {/* Layout 6: Immersive Gallery Section */}
      <Layout6 />
    </div>
  );
}

export default App;

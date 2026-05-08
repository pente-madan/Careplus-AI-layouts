import React from 'react';
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import './index.css';

/**
 * Main App Component
 * Root component that renders both layout components
 * Clean and simple architecture without routing complexity
 */
function App() {
  return (
    <div className="App">
      {/* Layout 1: Hero Section */}
      <Layout1 />

      {/* Layout 2: Contact Form Section */}
      <Layout2 />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'; // Import the CSS file we'll create later
import Dashboard from './dashboard.js'; // Import the Dashboard component

function App() {
  return (
    <div className="App">
      <Dashboard />  {/* Render the Dashboard component */}
    </div>
  );
}

export default App;

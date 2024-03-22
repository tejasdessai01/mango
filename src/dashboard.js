import React from 'react';
import './dashboard.css';// Import the CSS file we'll create later

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Mango</h1>  {/* Big Black Text */}
      </div>
      <div className="dashboard__body">
        <div className="dashboard__sidebar"> {/* Left side */}
          <ul className="dashboard__tabs">
            <li className="dashboard__tab">Summary</li>
            <li className="dashboard__tab">Accounts</li>
            <li className="dashboard__tab">Spending</li>
            <li className="dashboard__tab">Investing</li>
          </ul>
        </div>
        <div className="dashboard__content"> {/* Right side for future content */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

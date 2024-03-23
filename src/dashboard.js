import React, { useState } from 'react';
import './dashboard.css';
import { initiateLinkAccount } from './LinkAccount.js'; 

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Summary'); 

  const handleLinkAccountClick = () => {
    return <div>{initiateLinkAccount()}</div>; // Changes here
  }


  const renderContent = () => {
    switch (selectedTab) {
      case 'Summary':
        return (
          <div className="dashboard__summary-data">
            <div className="data-point">
              <div className="data-point__label">Total Cash</div>
              <div className="data-point__value">$12,540</div>
            </div>
            <div className="data-point">
              <div className="data-point__label">Monthly Income</div>
              <div className="data-point__value">$4,000</div>
            </div>
            <div className="data-point">
              <div className="data-point__label">Monthly Expenses</div>
              <div className="data-point__value">$2,850</div> 
            </div>
          </div>
        );
      case 'Accounts':
        return (
          <div className="dashboard__accounts-content">
            <button 
              className="link-account-button" 
              onClick={handleLinkAccountClick}
            >
              Link an Account
            </button>
            <p className="link-account-message">Secure links using Plaid</p>
          </div>
        );
      default:
        return <div>Content for: {selectedTab}</div>;
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Mango</h1>
      </div>
      <div className="dashboard__body">
        <div className="dashboard__sidebar">
          <ul className="dashboard__tabs">
            <li 
              className={selectedTab === 'Summary' ? 'dashboard__tab active' : 'dashboard__tab'}
              onClick={() => setSelectedTab('Summary')}
            >
              Summary
            </li>
            <li 
              className={selectedTab === 'Accounts' ? 'dashboard__tab active' : 'dashboard__tab'} 
              onClick={() => setSelectedTab('Accounts')}
            >
               Accounts
            </li>
            <li 
              className={selectedTab === 'Spending' ? 'dashboard__tab active' : 'dashboard__tab'} 
              onClick={() => setSelectedTab('Spending')}
            >
               Spending
            </li>
            <li 
              className={selectedTab === 'Investing' ? 'dashboard__tab active' : 'dashboard__tab'} 
              onClick={() => setSelectedTab('Investing')}
            >
               Investing
            </li>
          </ul>
        </div>
        <div className="dashboard__content">
          {renderContent()} 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// MarketsSidebar.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Marketsidebar.css';

const Marketsidebar = () => {
  // State to track which button is selected
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const handleNavigation = (selection, path) => {
    setSelected(selection);
    navigate(path);
  };

  return (
    <div className="markets-sidebar">
      <button
        className={`sidebar-button ${selected === 'Equity' ? 'active' : ''}`}
        onClick={() => handleNavigation('Equity', '/market')}
      >
        Equity (ETFs)
      </button>
      <button
        className={`sidebar-button ${selected === 'Gold' ? 'active' : ''}`}
        onClick={() => handleNavigation('Gold', '/gold')}
      >
        Gold (ETFs)
      </button>
      <button
        className={`sidebar-button ${selected === 'Mutual' ? 'active' : ''}`}
        onClick={() => setSelected('Mutual')}
      >
        Mutual Fund
      </button>
    </div>
  );
};

export default Marketsidebar;

import React from 'react';
import './TotalInvestment.css';

const TotalInvestment = () => {
    return (
        <div className="investment-container">
            <div>
                <div className="investment-title">Total Investment</div>
                <div className="investment-amount">₹63,583.90</div>
            </div>
            <div className="investment-percentage">
                <span className="percentage-value">+21.32%</span>
                <span className="arrow-up">↑</span>
            </div>
        </div>
    );
};

export default TotalInvestment;

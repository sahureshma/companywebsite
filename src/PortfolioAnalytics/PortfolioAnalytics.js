import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './PortfolioAnalytics.css'; // Import the CSS file

const PortfolioAnalytics = () => {
    const chartData = {
        labels: ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm'],
        datasets: [
            {
                label: 'Portfolio Value',
                data: [8000, 8500, 9000, 9500, 8700, 9200],
                fill: true,
                backgroundColor: 'rgba(135,206,250,0.2)',
                borderColor: '#22c55e', // Green line color
                pointBackgroundColor: '#22c55e',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `$${value}`,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
     
        <div className="portfolio-container">
            <h2 className="portfolio-welcome">Welcome back, William</h2>
            <p className="portfolio-subtitle">Track your finance and achieve your financial goals.</p>

            <div className="portfolio-card">
                <h3 className="portfolio-title">Portfolio Analytics</h3>

                {/* Time Range Selector */}
                <div className="time-range-selector">
                    {['1D', '5D', '1M', '6M', '1Y', '5Y', 'Max'].map((range) => (
                        <span key={range} className={range === '1D' ? 'active' : ''}>
                            {range}
                        </span>
                    ))}
                </div>

                {/* Line Chart */}
                <div className="chart-container">
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
       
    );
};

export default PortfolioAnalytics;

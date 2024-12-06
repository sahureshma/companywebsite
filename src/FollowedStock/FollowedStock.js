import React, { useRef } from 'react';
import './FollowedStock.css';

const FollowedStock = () => {
  const stocks = [
    { name: 'Nestle India Ltd', symbol: 'NESTLE INDIA', price: '2,267', change: '+0.68%', positive: true, logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/800px-Nestl%C3%A9.svg.png' },
    { name: 'Bajaj Finserv Limited', symbol: 'BAJAJFINSV', price: '1,775.50', change: '+1.83%', positive: true, logo: 'https://pngimagesfree.com/wp-content/uploads/Bajaj-Finserv-Logo-PNG.png' },
    { name: 'Larsen & Toubro Limited', symbol: 'LT', price: '3,384.40', change: '+1.23%', positive: true, logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png' },
    { name: 'Tata Consultancy', symbol: 'TCS', price: '4,103.50', change: '-0.27%', positive: false, logo: 'https://lezebre.lu/images/thumbnails/435/537/detailed/17/30038-tata-logo.png' },
    { name: 'Kotak Mahindra Bank', symbol: 'KOTAKBANK', price: '1,767.15', change: '+0.68%', positive: true, logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kotak_Mahindra_Group_logo.svg/2560px-Kotak_Mahindra_Group_logo.svg.png' },
    { name: 'Wipro Limited', symbol: 'WIPRO', price: '559.80', change: '-0.44%', positive: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  ];

  const stockListRef = useRef(null);

  const scrollRight = () => {
    if (stockListRef.current) {
      stockListRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (stockListRef.current) {
      stockListRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className="followed-stock-container">
      <h2>Followed Stock</h2>
      <p>Monitor popular stocks for strategic investments.</p>
      <div className="stock-list-container">
        <button onClick={scrollLeft} className="scroll-left-btn">←</button>
        <div className="stock-list" ref={stockListRef}>
          {stocks.map((stock, index) => (
            <div className="stock-card" key={index}>
              <div className="stock-info">
                <img src={stock.logo} alt={`${stock.name} logo`} className="stock-logo" />
                <div className="stock-name">{stock.name}</div>
                <div className="stock-symbol">{stock.symbol}</div>
                <div className="stock-price">{stock.price}</div>
                <div className={`stock-change ${stock.positive ? 'stock-positive' : 'stock-negative'}`}>
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="scroll-right-btn">→</button>
      </div>
    </div>
  );
};

export default FollowedStock;

import React, { useState } from 'react';
import './PeerAnalysisTable.css';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const PeerAnalysisTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    if (sortConfig.key) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const renderSortIcons = (key) => (
    <span className="sort-icons">
      <FaCaretUp className={sortConfig.key === key && sortConfig.direction === 'ascending' ? 'active' : ''} />
      <FaCaretDown className={sortConfig.key === key && sortConfig.direction === 'descending' ? 'active' : ''} />
    </span>
  );

  const formatChange = (value) => {
    const color = value >= 0 ? 'green' : 'red';
    return <span style={{ color }}>{value.toFixed(1)}%</span>;
  };

  const renderValue = (value) => (value ? value : '-');

  return (
    <div className="peer-table-wrapper">
      <table className="peer-analysis-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('company')}>
              Company Name
            </th>
            <th onClick={() => handleSort('cmp')}><div className="header-title-updown">
              CMP (₹) {renderSortIcons('cmp')}</div>
            </th>
            <th onClick={() => handleSort('change')}><div className="header-title-updown">
              Change (%) {renderSortIcons('change')}</div>
            </th>
            <th onClick={() => handleSort('marketCap')}><div className="header-title-updown">
              Market Cap {renderSortIcons('marketCap')}</div>
            </th>
            <th onClick={() => handleSort('netSales')}><div className="header-title-updown">
              Net Sales (₹ Cr.) {renderSortIcons('netSales')}</div>
            </th>
            <th onClick={() => handleSort('latestEPS')}><div className="header-title-updown">
              Latest EPS (₹) {renderSortIcons('latestEPS')}</div>
            </th>
            <th onClick={() => handleSort('netProfitMargin')}><div className="header-title-updown">
              Net Profit Margin (%){renderSortIcons('netProfitMargin')}</div>
            </th>
            <th onClick={() => handleSort('netProfitMargin')}><div className="header-title-updown">
            P/E Ratio{renderSortIcons('netProfitMargin')}</div>
            </th>
            <th onClick={() => handleSort('netProfitMargin')}><div className="header-title-updown">
            P/BV Ratio{renderSortIcons('netProfitMargin')}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{renderValue(item.company)}</td>
              <td>{renderValue(item.cmp)}</td>
              <td>{item.change !== undefined ? formatChange(item.change) : '-'}</td>
              <td>{renderValue(item.marketCap)}</td>
              <td>{renderValue(item.netSales)}</td>
              <td>{renderValue(item.latestEPS)}</td>
              <td>{renderValue(item.netProfitMargin)}</td>
              <td>{renderValue(item.pe)}</td>
              <td>{renderValue(item.pbv)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeerAnalysisTable;
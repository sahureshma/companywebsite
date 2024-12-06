import React from 'react';

import PeerAnalysisTable from '../PeerAnalysisTable/PeerAnalysisTable';
import Data from '../Data';


const Stockpeer = () => {
  return (
    <div className="stock-peer-container">
        
      <h2 className='stockpeerheader'>Peer Analysis </h2>
     
      {/* Pass the imported data to the PeerAnalysisTable component */}
      <PeerAnalysisTable data={Data} />
      
    </div>
  );
};

export default Stockpeer;
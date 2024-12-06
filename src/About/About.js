import React, { useState } from 'react';
import './About.css';


const About = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="iti-limited-container">
        
      <h1>About ITI Limited</h1>
      <p>
        ITI Limited is a public sector undertaking in the telecommunications technology segment established as a departmental factory in 1948. The company has a diverse suite of products including manufactured products like Gigabit Passive Optical Network (GPON), Managed Leased Line Network (MLLN) products, Stand Alone Signaling Transfer Point (SSTP), Wi-Fi Access Point, Radio Modem, SMPS, Set Top Box, Defence products like multi-capacity encryption units (BEU), Terminal End Secrecy Devices (TESD), Passive infrastructure products such as Optical Fiber Cable, HDPE duct, Antenna, diversified products such as smart energy meters, smart cards, solar panels, mini personal computers.
      </p>
      <p>
        Besides offering the telecom turnkey solutions and customized support, ITI has a dedicated Network System Unit for executing turnkey projects for installation and commissioning of telecommunication networks. The company intends to upgrade and invest in the latest technology through the acquisition of technology from strategic partners with a specific focus on high growth industry segments. The company operates a data center at Bengaluru and currently expanding the same to offer cloud based services to government institutions departments, banks etc.
      </p>
      <p>
        The company is manufacturing a diverse range of Information and Communication Technology (ICT) products/solutions to hone its competitive edge in the convergence market by deploying its rich telecom expertise and vast infrastructure. Company is diversifying towards IoT, Smart city, other allied telecom products and services including turnkey project execution to offer solutions in diversified fields. Encryption Products are the company’s forte. Extensive in-house R&D work is devoted towards design and development of encryption solutions to Indian Defence forces.
      </p>

      {isReadMore && (
        <div>
          <h2>Business Area of the Company</h2>
          <p>
            The company is primarily engaged in the business of manufacture, sale and servicing of telecommunication equipments and rendering other associated / ancillary services.
          </p>

          <h2>Products and Services Offered by the Company</h2>
          <h3>Products</h3>
          <ul>
            <li>Smart energy meters</li>
            <li>GPON OLT and ONT</li>
            <li>PCM multiplexers</li>
            <li>Electronic push button telephones</li>
            <li>Ruggedized telephones for defence forces</li>
            <li>Smart cards and banking cards</li>
            <li>Hand held terminals for smart card authentication</li>
            <li>Set top boxes, Wi-Fi equipment</li>
            <li>Multiple types of encryption devices for defence</li>
            <li>Solar power module</li>
            <li>Switched mode power supply system</li>
            <li>Internet of things (IoT) products</li>
            <li>Radio modems</li>
            <li>AN Rack hardware</li>
            <li>Mini personal computers</li>
            <li>Bank automation products</li>
            <li>Optical Fiber Cable</li>
            <li>HDPE pipe</li>
          </ul>
        </div>
      )}

      <button onClick={toggleReadMore} className="read-more-btn">
        {isReadMore ? "Show Less" : "Read More"}
      </button>

     
    </div>
  );
};

export default About;
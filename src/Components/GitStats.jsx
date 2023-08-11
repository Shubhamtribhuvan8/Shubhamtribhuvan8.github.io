import React from 'react';
import './GitStats.css';
import Tilt from 'react-parallax-tilt'
export default function GitStats() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4%',
  };

  const headingStyle = {
    font: '19px/30px Montserrat,Montserrat,sans-serif',
    fontSize: '40px',
    textAlign: 'center',
  };

  return (
    <div id="statics">
      <h1 style={headingStyle}>GITHUB-STATS</h1>
      <div style={containerStyle} id="media1">
        
        <img
          src="https://camo.githubusercontent.com/328b25235fa703df3559e5f7fea63fde0338dde1c44a82a960c5caf27cfa62be/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d5368756268616d74726962687576616e3826267468656d653d746f6b796f6e69676874"
          alt=""
          id="github-streak-stats"
        />
        <Tilt>
        <img
          src="https://camo.githubusercontent.com/d7a52ecbcfdd81d1ea00126be8e950a328b80ca232a79191473e2434bff9f548/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d5368756268616d74726962687576616e38267468656d653d746f6b796f6e69676874"
          alt=""
          id="github-top-langs"
        />
        </Tilt>
        <img
          src="https://camo.githubusercontent.com/fe583aa2673047990d07272d4823bba5ca74c05b34a9d213f38629efcb90939d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d5368756268616d74726962687576616e382673686f775f69636f6e733d74727565267468656d653d6461726b"
          alt=""
          id="github-stats-card"
        />
        
      </div>
      <style>
        {`
          #statics {
            margin-top: 4%;
          }
          
          #media1 {
            display: flex;
            justify-content: center;
          }

          @media (max-width: 768px) {
            #media1 {
              flex-wrap: wrap;
            }
          }
        `}
      </style>
    </div>
  );
}

import React from 'react'
import '../App.css';
import Image from './Image';
import Navbar from './Navbar';

function Navbar1() {
  return (
    <div>
      <Image/>
      <div className='lineHeight1'>
        <Navbar/>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .lineHeight1 {
            // display:;
          }
          .Navabar1 {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar1;
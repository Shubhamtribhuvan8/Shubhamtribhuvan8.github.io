import React from 'react'
import image from './ImagesFile/whatsapp.png';
import './Education.css';
export default function Whatsapp() {
  return (
    <div>
      <a href={`https://wa.me/7262019777`} rel="noopener noreferrer">
          <img src={image} alt="image" style={{width:"52px"}} />
        </a>
    </div>
  )
}

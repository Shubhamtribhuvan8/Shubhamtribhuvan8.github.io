import React from 'react'
import image from './ImagesFile/gmail.png';
import './Education.css';
export default function EmailAddress() {
  return (
    <div id="contact-email">
       <a  href={"mailto:work.shubhamtribhuvan8@gmail.com"}> <img src={image} alt="shubhamtribhuvan8@gmail.com" style={{width:"52px"}}/></a>
        {/* <a href={`shubhamtribhuvan8@gmail.com`}><img src={image} alt="shubhamtribhuvan8@gmail.com"  style={{width:"52px"}}/></a> */}
    </div>
  )
}

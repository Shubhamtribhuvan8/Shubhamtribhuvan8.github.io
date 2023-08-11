import React from 'react'
import './sample.css';
import Contact from './Contact';
import { AiFillCaretUp } from "react-icons/ai";
import { animateScroll as scroll } from 'react-scroll';
import Footer from './Footer';
export default function Sample() {
  const handleScroll = () => {
    scroll.scrollToTop();
  };
  return (
    <div id="contact1" style={{position:"relative",zIndex:"1",background:"white"}}>
   <div className="container red topBotomBordersOut">
   <h1 style={{textAlign:"center"}}>Let's work together</h1>
   <Contact/>
   <br/>
  <a href='#myimage'>HOME</a>
  <a href='#skills'>SKILLS</a>
  <a href='#projects'>PORTFOLIO</a>
  <a href='#myimage'>ABOUT</a>
  <a target="_blank" href="mailto:work.amanmollah@gmail.com" title="work.amanmollah@gmail.com">EMAIL</a>
  <br/>
      
       <br />
       <h1 style={{margin:"0"}}>Thanks For Visiting!</h1>
       <Footer/>
       <button className="scroll-button" onClick={handleScroll}>
       <AiFillCaretUp size={25}/>
      </button>
    </div>
    </div>
  )
}


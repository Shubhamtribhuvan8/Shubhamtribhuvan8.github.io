import React from 'react'
import "./Home.css";
import { SiHey } from "react-icons/si";
import { AiFillCaretDown } from "react-icons/ai";
import { animateScroll as scroll } from 'react-scroll';
export default function Home() {

    const handleScroll = () => {
      scroll.scrollToBottom();
    };
  return (
  <div id="home">
  {/* <nav id="navbar">
     <ul>
     <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skils</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul> 
  </nav> */}
  <section id="welcome-section">
    <h6>Hi,<SiHey size={30}/> I am Shubham</h6>
    <p>a web developer</p>
    <button className="scroll-button" onClick={handleScroll}>
    <AiFillCaretDown size={25}/>
    </button>
  </section>

    </div>
  )
}

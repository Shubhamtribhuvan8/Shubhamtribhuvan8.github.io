import './App.css';
import { useMediaQuery } from 'react-responsive'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Name from './Components/Name';
import FormalIntro from './Components/FormalIntro';
import Image from './Components/Image';
import Github from './Components/Github';
import Linkdin from './Components/Linkdin';
import EmailAddress from './Components/EmailAddress';
import Instagram from './Components/Instagram';
import Whatsapp from './Components/Whatsapp';
import Facebook from './Components/Facebook';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Sample from './Components/Sample';
import GitStats from './Components/GitStats';
import GitHubCalendarHeatmap from './Components/GitHubCalendarHeatmap';
import Statics from './Components/Statics';
import Twitter from './Components/Twitter';
import React, { useState, useEffect } from 'react';
import Navbar1 from './Components/Navbar1';
// import DarkMode from './Components/DarkMode';
function App() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);
  useEffect(() => {
  const handler = e => setMatches(e.matches);
  window.matchMedia("(min-width: 768px)").addListener(handler);
  return () => {
  window.matchMedia("(min-width: 768px)").removeListener(handler);
  };
  }, []);
  return (
    <div style={{marginBottom:"1%"}}>
      {matches && <h1></h1>}
      {!matches && <h3></h3>}
        <Home/>
      <div className="App" style={{position:"relative",zIndex:"1"}}>
      <div style={{width:"35%",textAlign:"left"}}>
      <Name/>
      <FormalIntro/>
       <br/>
       <Resume/>
      <br/>
      <div className="profile1">
  <Github />
  <Linkdin />
  <EmailAddress />
  <Facebook />
  <Instagram />
  <Whatsapp />
  <Twitter />
  <style jsx>{`
    .profile1 {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 2rem;
    }

    @media (max-width: 768px) {
      .profile1 {
        flex-direction: column;
        margin-top: 1rem;
      }
    }
  `}</style>
</div>

     </div>
      <Navbar1/>
     </div>
     <br/>
    <div>
    <br/><br/><br/><br/>
     <About/>
     <br/><br/><br/><br/>
     <Skills/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <Projects/>
    </div>
      <Portfolio/>
       <Statics/>
       <GitStats/>
        <br/><br/>
        <GitHubCalendarHeatmap/>
       <Sample/>
        {/* <DarkMode/> */}
    </div>
  );
}
export default App;



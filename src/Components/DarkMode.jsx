import "./DarkMode.scss";
import React from "react";
import { useState } from "react";
function Header() {
    const [ darkMode, setDarkMode ] = React.useState(false)  
    React.useEffect(() => {
      const body = document.body
      const toggle = document.querySelector('.toggle-inner')
      if( darkMode === true ) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }, [darkMode]);
    
    return (
      <header>
        <div style={{textAlign:"end"}}
          id="toggle"
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} >
          <div className="toggle-inner"/>
        </div>
      </header>
    )
  }
  function DarkMode() {
    return (
      <main id="darkmodeon">
        <Header />
      </main>
    )
  }

 
  export default DarkMode;
  
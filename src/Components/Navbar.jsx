import React from "react";
import Resume1 from "./Resume/Shubham_Tribhuvan_Resume.pdf"
function Navbar() {
  const resumeURL = "https://drive.google.com/file/d/1spNqQeWCGWVklxQt972uUi8ZV_eg-bVa/view?usp=share_link";

  return (
    <div id="nav-menu">
      <h3><a href='#home' className="nav-link home">Home</a></h3>
      <h3><a href='#about' className="nav-link about">About</a></h3>
      <h3><a href='#skills' className="nav-link skills">Skills</a></h3>
      <h3><a href='#projects' className="nav-link projects">Projects</a></h3>
      <h3><a href='#contact' className="nav-link contact">Contact</a></h3>
      <h3>
        <a
          href={resumeURL}
          id="resume-link-1"
          className="nav-link resume"
          target="_blank"
          download
        >
          Resume
        </a>
      </h3>

      {/* Media queries for small screens */}
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          #nav-menu {
            display: flex;
            flex-direction: column;
          }
          h3 {
            margin: 10px 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;

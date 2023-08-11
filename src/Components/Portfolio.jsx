import React from "react";
import "./portfolio.scss";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import image from "./ProjectImages/trivago1.png";
import image1 from "./ProjectImages/bluemer.png";
import image2 from "./ProjectImages/youtube.png";
import image3 from "./ProjectImages/student.png";
import image4 from "./ProjectImages/apple.png";
import image5 from "./ProjectImages/thehindu.png"
import image6 from "./ProjectImages/tumblr.png"
import image7 from "./ProjectImages/freedom.png"
class Portfolio extends React.Component {
  render() {
    function TrivagoFunction() {
      window.location.href = "https://trivago-clone0.netlify.app/";
    }
    function BlueMercuryFunc() {
      window.location.href = "https://suryathink.github.io/bluemercuryClone/";
    }
    function Youtube() {
      window.location.href ="https://shubhamtribhuvan8.github.io/YoutubeClone/";
    }
    function KooAppMasai() {
      window.location.href ="https://prathamesh-kooapp.vercel.app";
    }
    function Apple() {
      window.location.href ="https://shubhamtribhuvan8.github.io/appleClone/";
    }
    function TheHindu() {
      window.location.href ="https://shubhamtribhuvan8.github.io/the_Hindu/";
    }
    function Tumblr() {
      window.location.href ="https://tumblr-app-theta.vercel.app/";
    }

    function Freedom() {
      window.location.href ="https://freedom-151-woad.vercel.app/";
    }


    function Bluermercurygit() {
      window.location.href = "https://github.com/suryathink/bluemercuryClone";
    }
    function TrivagoGithub() {
      window.location.href = "https://github.com/ArjoshwaDmello/trivago-Clone-Project";
    }
    function YoutubeGithub() {
      window.location.href ="https://github.com/Shubhamtribhuvan8/YoutubeClone";
    }
    function  KooApp() {
      window.location.href ="https://github.com/Prathameshschavan/Project_kooApp";
    }
    function  AppleGithub() {
      window.location.href ="https://github.com/Shubhamtribhuvan8/appleClone";
    }
    function TheHinduNews(){
      window.location.href ="https://github.com/Shubhamtribhuvan8/the_Hindu";
    }
    function Tumblrgithub(){
      window.location.href ="https://github.com/Shubhamtribhuvan8/tumblr_app";
    }

    function Freedomgithub(){
      window.location.href ="https://github.com/Shubhamtribhuvan8/Freedom_151";
    }
    

    return (
      <section class="portfolio container-fluid">
        <h2 id="portfolio">PORTFOLIO</h2>
        <div class="container contenedor-portfolio d-md-flex flex-md-wrap">
            {/* 1 */}
          
            {/* 3 */}
          <article>
            <div class="project-card">
              <h3 class="project-title">KooApp.com</h3>
              <p class="project-description"> Koo is an Indian microblogging and social networking service, based in Bengaluru, India. As of November 2022, the company is valued at over $275 million.</p>
              <h4 class="project-tech-stack">React.js|Redux.js|Javascript|Chakra UI|Boostrap|HTML|CSS</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link"  onClick={KooAppMasai}>
                <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning" onClick={KooApp}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image3} alt="image3" class="img-fluid" />
          </article>
          {/* 4 */}
          <article>
            <div class="project-card">
              <h3 class="project-title">BlueMercury.com</h3>
              <p class="project-description">Bluemercury is a friendly neighborhood beauty destination where clients can receive a personalized, educational friendly shopping experience, along with an assortment of the world's most coveted luxury beauty brands.</p>
              <h4 class="project-tech-stack">Javascript|Boostrap|HTML|CSS</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link" onClick={BlueMercuryFunc}>
                <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning"
                onClick={Bluermercurygit}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image1} alt="image1" class="img-fluid" />
          </article>
          <article>
            <div class="project-card">
              <h3 class="project-title">Apple.com</h3>
              <p class="project-description">Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.</p>
              <h4 class="project-tech-stack">React.js|React-Boostrap|Javascript|HTML|CSS</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link" onClick={Apple}>
              <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning" onClick={AppleGithub}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image4} alt="image4" class="img-fluid" />
          </article>
            {/* 2 */}
          <article>
            <div class="project-card">
              <h3 class="project-title">The Hindu.com</h3>
              <p class="project-description"> The Hindu is an Indian English-language daily newspaper owned by The Hindu Group,It is one of the Indian newspapers of record and the second most circulated English-language newspaper in India.</p>
              <h4 class="project-tech-stack">React|React-Boostrap|Javascript|HTML|CSS</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link" onClick={TheHindu}>
                <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning" onClick={TheHinduNews}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image5} alt="image4" class="img-fluid" />
          </article>
          <div>
            <br />
           </div>
        {/* 6 */}

 {/* Edit down */}
        <article>
            <div class="project-card">
              <h3 class="project-title">Tumblr.com</h3>
              <p class="project-description">Tumblr Application Tumblr is a short-form microblogging social media platform. It is host to more than 529 million blogs, which includes a variety of content such as fan fiction and art, memes, advice and more. In general, Tumblr is used to bring people of similar interests together.</p>
              <h4 class="project-tech-stack">React|Express|MangoDB|MUI</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link" onClick={Tumblr}>
                <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning" onClick={Tumblrgithub}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image6} alt="image6" class="img-fluid" />
          </article>
          <article>
            <div class="project-card">
              <h3 class="project-title">Freedom151.com</h3>
              <p class="project-description">Freedom_151(The World's Biggest Scam) *Freedom 251 is planning to scam again worldwide* -They are releasing a new 5G phone for cost of 151 also known as Freedom 151.</p>
              <h4 class="project-tech-stack">React|Redux|HTML|CSS|MUI</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link" onClick={Freedom}>
                <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning" onClick={Freedomgithub}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image7} alt="image7" class="img-fluid" />
          </article>


       {/* Edit up */}
            <article>
            <div class="project-card">
              <h3 class="project-title">Youtube.com</h3>
              <p class="project-description">YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is currently owned by Google, and is the second most visited website, after Google Search.</p>
              <h4 class="project-tech-stack">Javascript|HTML|CSS</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link" onClick={Youtube}>
                <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning" onClick={YoutubeGithub}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image2} alt="image2" class="img-fluid" />
          </article>
          <article>
            <div class="project-card">
              <h3 class="project-title">Trivago.com</h3>
              <p class="project-description">trivago's hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. </p>
              <h4 class="project-tech-stack">Javascript|HTML|CSS</h4>
              <div style={{ display: "flex", alignItems: "center",gap: "11px" }}>
                <button class="project-github-link" onClick={TrivagoFunction}>
                <BsBoxArrowUpRight size={40}/>
                </button>
                <button class="project-deployed-link" variant="warning" onClick={TrivagoGithub}><BsGithub  size={40}/></button>
              </div>
            </div>
            <img src={image} alt="image" class="img-fluid" />
          </article>
          <div>
            <br />
          </div>
          
        </div>
      </section>
    );
  }
}
export default Portfolio;

import BO from "./img/output-onlinepngtools.png";
import BO2 from "./img/search.png";
import Bo3 from "./img/winner.png";
import Bo4 from "./img/butterfly.png";
import Bo5 from "./img/result.png";
import Bo6 from "./img/puzzle.png"
import "./manifesto.css";
export const Manifesto = () => {
    return (
        <div className="home Manifesto-mo">
            <div className="skills_boxs">
             <h1 id="Manifesto" className="content-1">Manifesto</h1>
             <div className="Manifesto">
                <div className="Manifesto-div">
                  <img src={Bo4} alt="Manifesto"/>
                  <div>
                    <h1 className="Manifesto-1">Keep it simple</h1>
                    <p className="page2__p">Simplicity is a hard work, but it pays off. Keep it as simple and intuitive as possible and find unique, unexpected solutions for your problems. The best interface is one you don´t notice.</p>
                  </div>
                </div>

                <div className="Manifesto-div">
                  <img src={BO2} alt="Manifesto"/>
                  <div>
                    <h1 className="Manifesto-1">Do your research</h1>
                    <p className="page2__p">First understand your clients business model then understand its users. What are the pain points users have and how can you solve them, while pushing company’s business goals.</p>
                  </div>
                </div>

                <div className="Manifesto-div">
                  <img src={Bo3} alt="Manifesto"/>
                  <div>
                    <h1 className="Manifesto-1">Learn from the best</h1>
                    <p className="page2__p">Benchmarking is a must for every product or project as it helps finding best practices and getting inspired. But don´t just copy your heroes. Find your own way and tell your own story!</p>
                  </div>
                </div>
            </div>
            <div className="Manifesto">

                <div className="Manifesto-div">
                  <img src={BO} alt="Manifesto"/>
                  <div>
                    <h1 className="Manifesto-1">Preserve the student in you</h1>
                    <p className="page2__p">Study visual trends and technological changes, and follow your industry leaders to keep up with new developments. Read relevant articles regularly and build yourself a pool of great inspiration.</p>
                  </div>
                </div>

                <div className="Manifesto-div">
                  <img src={Bo5} alt="Manifesto"/>
                  <div>
                    <h1 className="Manifesto-1">Don´t trust just yourself</h1>
                    <p className="page2__p">Prototyping and user-testing is important to proof your designs and test them under almost real conditions. Listen to people. Don´t stick to features you like, if they don't get them.</p>
                  </div>
                </div>

                <div className="Manifesto-div">
                  <img src={Bo6} alt="Manifesto"/>
                  <div>
                    <h1 className="Manifesto-1">Think holistically</h1>
                    <p className="page2__p">Design sustainable and keep the brand in mind. Work with design systems, layout grids and pattern libraries to guarantee consistency and an easy design handoff to development teams.</p>
                  </div>
                </div>
             </div>
             
           </div>
        </div>
    )
}
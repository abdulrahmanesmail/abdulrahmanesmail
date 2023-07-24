import {useState} from "react";
import "./about.css";
export const About = () => {
    const [Showmore, setShowmore] = useState(true);

    const ShowmoreHandler = () => {
      setShowmore(false);
    };
    const HidemoreHandler = () => {
      setShowmore(true);
    };
    return (
        <div className="home about">
           <h1 id="Manifesto" className="content-1">About</h1>
           <div>
              <h1>What I do</h1>
              <p>I'm a UI UX designer who designs user interfaces for digital products. They take into account the user’s needs and preferences when creating a user interface, ensuring that the design is easy to use and provides the optimal user experience. </p>
           </div>
           <div>
            <h1>career path</h1>
            <p>I have been in the field of design since the summer of 2017. I finished my courses after a year, then I worked on dummy projects for another year to take my first steps in the market and get clients my first client was from Saudi. We are still working together until now. My first official work for a company was with Sketcher company and I worked there from Aug 2020 to Oct 2021 since then I have depended on freelance..</p>
          </div>
          <div className="Work-Style">
            <h1>Work Style</h1>
            <p>Research teaches me about the users, their behavior, goals, motivations, and needs. User research has to come first in the UX design process because, without it, our work can only be based on our own experiences and assumptions; which are neither objective nor from our target customers,<br/> <strong onClick={ShowmoreHandler} className={`page2__p po ${Showmore ? `` : `hideit`}`} >Show more....</strong>
              <span  className={`${Showmore ? `hideit` : ``}`} > It’s important to mark the distinction between listening to users and observing users. Both methods have their place in research, and both will provide you with valuable data,<br/> process is to create wireframes and prototypes. This gives you something tangible to test on actual and potential users Wireframing in UX design refers to an illustration or diagram of a website, software, or app page explore and experiment with ideas as well as check functionality and usability <br/>“Usability answers the question, ‘Can the user accomplish their goal?” <br/>choosing the right tools first <br/> Sketch’s ability to create reusable symbols and color variables to tie in to all types of styling is currently unrivaled. And you are going to need all of that when working on complex designs, <br/> Interaction design principles Branding, typography and color theory Wireframing and prototyping Style guides User research and personas Teamwork and communication skills Key industry tools, including Sketch <br/>“A user interface is like a joke. If you have to explain it, it’s not that good.”<br/> Give your product an added dimension with custom visuals that evoke emotion and delight for your users <br/> drawing abilities and a solid sense of how to design for 2D animation, strong understanding of proportion, balance, perspective, dimension and dynamism within my art work. <br/>“Styles come and go. Good design is a language, not a style.” <br/> build or maintain branding for their client or employer. When working with a brand, they need an in-depth understanding of what makes that brand unique, <br/> Graphic Designers are constantly tasked with developing new and unique ideas. The designs they create need to capture people’s attention while also communicating an intended message, which requires a lot of creative thinking, <br/> communication skills are at the heart of my Graphic Design work. Not only do they need to communicate ideas through their designs, problem-solving skills throughout the design process. This may involve troubleshooting design issues or revising designs to meet client needs, <br/> often work on multiple projects at once, and may be dealing with deadlines from several different clients. I'm able to balance workloads and prioritize projects, <br/>“The word ‘design’ is everything and nothing. The design and the product itself are inseparable.”</span><br/> 
                <span onClick={HidemoreHandler} className={`showit ${Showmore ? `hideit` : ``}`} > Show less....</span>
            </p>
          </div>
          <div className="courses">
            <h1>courses</h1>
            <a href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/" target="_blank" rel="noopener noreferrer"><p className="page2__pw ">Complete Web Design: from Figma to Webflow to Freelancing</p></a>
            <a href="https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/" target="_blank" rel="noopener noreferrer"><p className="page2__pw ">User Experience Design Essentials - Adobe XD UI UX Design</p></a>
          </div>
        </div>
    )
}
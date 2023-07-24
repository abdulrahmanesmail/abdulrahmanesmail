import Img1 from "./images/cake.png";
import Img2 from "./images/flag.png";
import Img3 from "./images/start-up.png"; 
import Img4 from "./images/experience.png";
import "./home.css";
export const Home = () => {
    const onClick= () => {
        window.open("https://www.behance.net/abdulrhmanf1f4?fbclid=IwAR12ri_unUoQ_MGUseAXt2uPEuZIwr76MSEJQkusQUvfsyjiGnxcohLLS3o", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")
      }
    return (
        <div className="home"> 
          <h1 id="Manifesto" className="content-1">Home</h1>
          <div className={`home-info`}>
            <div className="home-info_box">
                <img src={Img1} alt="icon"/>
                <h4>birthday</h4>
                <h5>2000-4-21</h5>
            </div>
            <div className="home-info_box">
                <img src={Img2} alt="icon"/>
                <h4>country/city</h4>
                <h5>egypt / suez</h5>
            </div>
            <div className="home-info_box">
                <img src={Img3} alt="icon"/>
                <h4>finished projects</h4>
                <h5>22</h5>
            </div>
            <div className="home-info_box">
                <img src={Img4} alt="icon"/>
                <h4>experience</h4>
                <h5>5 YR</h5>
            </div>
          </div>
          <div className="home-con">
            <h1>Hi, I'm Abdulrahman:<br/> A Freelance UI/UX <br/>Designer.</h1>
            <p>I Help Companies To Design<br/> Websites & Mobile Apps And Intuitive Digital Products.</p>
            <div className="Behance_button"><button className="home__button" onClick={onClick}>Behance</button></div>
          </div>
        </div>
    )
}
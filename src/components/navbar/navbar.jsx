import Logo from "./Group 33.svg";
import FILE from "./Abdulrhman Ismail (CV).pdf";
import "./navbar.css";

export const Navbar = () => {
    const handlesub = event => {
      event.preventDefault();
    }
    return (
        <div className="Nav">
           <div className="Logo"><img src={Logo} alt="logo"/></div>
           <div className="Links" onSubmit={handlesub}>
             <a type="button" className={window.location.pathname === "/" ? "Link as": "Link hoverlink"}href="/">Home</a>
             <a type="button" className={window.location.pathname === "/Work" ? "Link as": "Link hoverlink"}href="Work">Work</a>
             <a type="button" className={window.location.pathname === "/Skills" ? "Link as": "Link hoverlink"}href="Skills">Skills</a>
             <a type="button" className={window.location.pathname === "/Manifesto" ? "Link as": "Link hoverlink"}href="Manifesto">Manifesto</a>
             <a type="button" className={window.location.pathname === "/About" ? "Link as": "Link hoverlink"}href="About">About</a>
             <a type="button" className={window.location.pathname === "/Contact" ? "Link as": "Link hoverlink"}href="Contact">Contact</a>
             <a type="button" className="PDF Link hoverlink" href={FILE} download>PDF CV</a>
           </div>
        </div>
    )
}
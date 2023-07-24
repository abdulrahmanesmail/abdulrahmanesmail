import "./project.css";
export const Project = (props) => {
    return (
        <div className="Project">

              <div className="Project-id">
                  <h6>{props.proName}</h6>
                  <p>posdifjmioajfiajjafjapfjpajf9JF-9AJFPAOJD VDS FAOFNIPANFPIANF</p>
             </div>

            <div className="Project-status">
                <div className="Project-status_box">
                  <h6>Start </h6>
                  <p>{props.Date}</p>
                </div>
                <div className="Project-status_box">
                  <h6>Pages </h6>
                  <p>{props.Pages}</p>
                </div>
                <div className="Project-status_box">
                  <h6>State</h6>
                  <p className="State">{props.State}</p>
                </div>
                <div className="Project-status_box">
                  <h6>Clint</h6>
                  <p>{props.Clint}</p>
                </div>
                <div className="Project-status_box">
                  <h6>Logo</h6>
                  <img src={props.logo} alt="logo"/>
                </div>
            </div>
            <hr/>
            <div>{props.userflow}</div>

            <div className="Project-pages">
               <h2>Case Study </h2>
               <img src={props.ex1} alt="logo"/>
               <img src={props.ex2} alt="logo"/>
               <img src={props.ex3} alt="logo"/>
               <img src={props.ex4} alt="logo"/>
               <img src={props.ex5} alt="logo"/>
               <img src={props.ex6} alt="logo"/>
            </div>
            <div className="View-All">
              <button>View All</button>
            </div>

        </div>
    )
}
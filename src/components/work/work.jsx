import {Project} from "./projects/project";
import { Landingpages } from "./landingpages/landingpages"
import ResearchProcess from "./Research-Process/ResearchProcess";
import Userflow from "./Userflow/Userflow";
import Devlogo from "./img/Group 1907.svg";
import ex1 from "./projects/img/Deliveryapp/d1.svg";
import ex2 from "./projects/img/Deliveryapp/1.svg";
import ex3 from "./projects/img/Deliveryapp/2.svg";
import ex4 from "./projects/img/Deliveryapp/14.svg";
import ex5 from "./projects/img/Deliveryapp/12.svg";
import ex6 from "./projects/img/Deliveryapp/5.svg";
import Blogo from "./img/Group 1908.svg";
import Bex1 from "./projects/img/BookingApp/G1.svg";
import Bex2 from "./projects/img/BookingApp/G2.svg";
import Bex3 from "./projects/img/BookingApp/G3.svg";
import Bex4 from "./projects/img/BookingApp/O1.svg";
import Bex5 from "./projects/img/BookingApp/O2.svg";
import Bex6 from "./projects/img/BookingApp/O3.svg";



import "./work.css";
export const Work = () => {
    return (
        <div className="home work">
            <h1 className="work-1">Work</h1>
            <ResearchProcess/>
            <Project
               logo={Devlogo}
               proName="Deliveryapp"
               Date="2021"
               Pages="46"
               State="deployment"
               Clint="KSA"
               ex1={ex1}
               ex2={ex2}
               ex3={ex3}
               ex4={ex4}
               ex5={ex5}
               ex6={ex6}
               userflow={<Userflow/>}
               
            />
            <Project
               logo={Blogo}
               proName="BookingApp"
               Date="2020"
               Pages="29"
               State="READY"
               Clint="DUMMY"
               ex1={Bex1}
               ex2={Bex2}
               ex3={Bex3}
               ex4={Bex4}
               ex5={Bex5}
               ex6={Bex6}
            />
            <div className="landing">
              <Landingpages/>
            </div>

            <div className="Note">
               <h1>Note</h1>
               <p>This Not All My Work not even half but the another half is about big apps under one app and i'v working init for 2yr and still  </p>
            </div>
        </div>
    )
}
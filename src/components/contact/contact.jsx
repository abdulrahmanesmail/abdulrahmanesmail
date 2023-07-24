import React, {useState, useRef, useEffect} from "react";
import CurrencyInput from 'react-currency-input-field';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import TextareaAutosize from 'react-textarea-autosize';
import 'aos/dist/aos.css';

import lined from "./img/linkedin.png";
import linedD from "./img/behance.png";
import "./contact.css";
export const Contact = props => {
  useEffect(() => {
    AOS.init();
  }, []);

    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [isActivee, setIsActivee] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setIsActivee(false);
  };
  const handleClickW = () => {
   setIsActivee(true);
   setIsActive(false);
 };

 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qoepe8a', 'template_a2s0cwq', form.current, 'PplF-nQMYtJRJhgNi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  function guardarArchivo(e) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = function (e) {
      const rawLog = reader.result.split(',')[1];
      const dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; 
      fetch('https://script.google.com/macros/s/AKfycbz05Gbi5idYDGwemcrBR1qA6D3jrIdMh4Ic_Id9hRhyYZT-SYEfHhnM_3D3_geW9VHZXA/exec',
        { method: "POST", body: JSON.stringify(dataSend) })
        .then(res => res.json()).then((a) => {
          console.log(a)
        }).catch(e => console.log(e))
    }
  }
  const [filebutton, setfilebutton] = useState(false);

  const handlefilebutton = () => {
    setfilebutton(true);
  };
  const handlefilebuttons = () => {
    setfilebutton(false);
  };

  const [sentbutton, setsentbutton] = useState(false);

  const handlsent = (e) => {
    setsentbutton(true);
  };
  function refreshPage() {
    window.location.reload(false);
  }

    return (
        <div className="home ss">
            <div className="q12">
            <div data-aos-once={true} data-aos-offset={-1300} data-aos="fade-up" data-aos-duration="500" className="text-log">
              <h1 className="work-1"><strong>Chat</strong></h1>
              <h1 className="READY">Let's <strong>work</strong> together</h1>
              <h1 className="READY">What can I do to push your goals?</h1>
            </div>
            
            <div className="conf">
            <div className="btn">
              <button onClick={handleClick} style={{
                 background: isActive ? 'linear-gradient(to right, #b9a8a1, #ebd6cd)' : 'linear-gradient(to right, #271e1b, #130f0d)',
                 color: isActive ? '#000' : '#b9a8a1',
                 transition: isActive ? '0.2s' : '0.2s'
               }} 
                 className="full-btn Full-time">Full time</button>
              <button onClick={handleClickW} style={{
                 background: isActivee ? 'linear-gradient(to right, #ebd6cd, #b9a8a1)' : 'linear-gradient(to right, #271e1b, #000000)',
                 color: isActivee ? '#000' : '#b9a8a1',
                 transition: isActive ? '0.2s' : '0.2s'
               }} 
                 className="full-btn Freelance">Freelance</button>
            </div>
             <form className="form form__group field" ref={form} onSubmit={sendEmail}>
                <div className="company_name form__group field">
                   <input type="text"  className="form__field" id="fname" name="name" placeholder="Company name" required/>
                   <label htmlFor="fname" className="form__label">{isActive ? "Company name" : "Your name"}</label>
                </div>
                <div className="form__group field">
                   <input type="email" className="form__field" id="email" name="email" placeholder="Email" required/>
                   <label htmlFor="email" className="form__label">{isActive ? "Email" : "Email address"}</label>
                </div>
                <div className="form__group field">
                  <CurrencyInput
                     className="form__field"
                     id="input-example"
                     name="bought"
                     placeholder={isActive ? "enter a Salary" : "enter a Bought"}
                     prefix={isActive ? "L.E " : "$ "}
                     decimalsLimit={2}
                     required
                  />
                    <label htmlFor="text"className="form__label">{isActive ? "Salary" : "Budget"}</label>
                </div>
                <br/>
                <div className="form__group field Job-requirements">
                   <TextareaAutosize cacheMeasurements={true} onChange={e => setCount(e.target.value.length)} type="text" className="form__field text-area" id="Job-requirements" name="jobrequirements" maxLength="500" required />
                   <label htmlFor="Job-requirements" className="form__label-textarea">{isActive ? "Job requirements" : "Project requirements"}</label>
                   <p className="must">Preferred enter a minimum of 500 characters</p>
                   <p className="count">{count}/500</p>
                </div>
                <input onClick={handlsent} className={`submit-btn ${props.send}`} type="submit" value="Send"/>
                {sentbutton && <div className="sent"></div>}
             </form>

             <div className="add_file_field">
                 <form>
                  <div>
                    <div className="OR"><hr/><h4>OR</h4><hr/></div>
                   <label className="file-h1" htmlFor='file-h1'>
                       Add your file
                   </label>
                   <input
                     className="file_input"
                     type="file"
                     id="input-file"
                     name="file"
                     accept=".PDF, .jpg, .jpeg, .png"
                     onChange={(e) => guardarArchivo(e)} 
                     onClick={handlefilebutton}
                    />
                   <p className="pin">PDF, PNG, JPG, jpeg (up to 5 files 5MB limit for each)</p>
                   </div>
                   {filebutton && <input className="upfile" onClick={handlefilebuttons} type="submit" value="Confirm"/>}
                   </form>
                </div>
            </div>
               <div className="svg-style"> 
                <svg style={{
                  display: sentbutton ? 'inline' : 'none',}} className={sentbutton ? "svg" : undefined} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                     <path className="circle" d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"/>
                    <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621"/>
                  </g>
                </svg>
                {sentbutton && <h4 onClick={refreshPage} className="refresh">Click here to sent another one</h4>}
                </div>
               </div>

               <div className="keep">
                <h1 className="READY">Keep in Touch</h1> <br/> 
                <a href="https://www.behance.net/abdulrhmanf1f4?fbclid=IwAR12ri_unUoQ_MGUseAXt2uPEuZIwr76MSEJQkusQUvfsyjiGnxcohLLS3o" target="_blank" rel="noreferrer">
                  <img src={lined} alt='Keep in Touch'/>
                </a>
                <a href="https://www.linkedin.com/in/abdulrhman-ismail-665781196/" target="_blank" rel="noreferrer">
                  <img src={linedD} alt='Keep in Touch'/>
                </a>
                <p className="READY">abdulrhmanismail88@gmail.com</p>
              </div>

        </div>
    )
}


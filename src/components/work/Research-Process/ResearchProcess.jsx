import React from 'react';

import "./ResearchProcess.css";


const ResearchProcess = () => {
    return (
        <div className='Research-Process'>
           <h1 className='Research-h1'>Research Process</h1>
           <p  className='Research-p'>I needed to understand user behaviors,<br/> needs, and motivations.</p>

           <div className='about-Research'> 

              <div className='Research'>
                  <div className='Research-con'>
                     <div className='chicle-1 co1'></div>
                     <h1 className='tr'>Research</h1>
                  </div>
                  <div className='Research-p-1'>
                     <p className='text-p'>I have found the most-rated apps in the App Store and Google Play Market about flight bookings.</p>
                  </div>
              </div>

              <div className='Research'>
                  <div className='Research-con'>
                     <div className='chicle-1 co2'></div>
                     <h1 className='tr'>Problems</h1>
                  </div>
                  <div className='Research-p-1'>
                     <p className='text-p'>A lot of outdated designs, bad usability flows, unfriendly and hard to understand navigation.</p>
                  </div>
              </div>

              <div className='Research'>
                  <div className='Research-con'>
                    <div className='chicle-1 co3'></div>
                    <h1 className='tr'>Solutions</h1>
                  </div>
                  <div className='Research-p-1 was'>
                    <p className='text-p'>I have developed an intuitive system design for the users, with Maximum navigation convenience.</p>
                  </div>
              </div>

           </div>
     </div>
    )
}

export default ResearchProcess;

import React from 'react';
import './Services.css';
import Services_Data from './ServicesData'; 

function Services() {
  return (
    <div id="services" className='cls-services'>
        <div className="cls-services-title">
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="cls-services-container">
            {Services_Data.map((services, index) => {
                return (
                  <div key={index} className='cls-services-format'>
                    <h3>{services.s_no}</h3>
                    <h2>{services.s_name}</h2>
                    <p>{services.s_desc}</p>
                  </div>
                );
            })}
        </div>
    </div>
  );
}

export default Services;

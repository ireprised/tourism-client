import './Services.css'
import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';




const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(() => 
    fetch('https://blooming-sea-12160.herokuapp.com/services')
    .then(res=> res.json())
    .then(data=>setServices(data))
, [])
    return (
     
    <div className="container">
        <div className="row g-4">  


            {
                   services.map((service=> <ServiceDetail    service={service}>
                     
                   </ServiceDetail>))
                }
           
        </div>
        
</div>
    );
};

export default Services;
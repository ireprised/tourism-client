import React from 'react';
import Slider from '../Slider/Slider';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import ServiceSlider from '../ServiceSlider/ServiceSlider';


const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <ServiceSlider></ServiceSlider>
            <Services></Services>
            <Partner></Partner>
            
        </div>
    );
};

export default Home;
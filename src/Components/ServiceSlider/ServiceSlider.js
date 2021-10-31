import React from 'react';

const ServiceSlider = () => {
    return (
        <div className="container service-slider">
            <div className="row">
                <div className="our-listing owl-carousel">
                    <div className="list-item">
                        <div className="list-thumb">
                            <div className="title">
                                <h4>Italy</h4>
                            </div>
                            <img src="./assets/images/destination_1.jpg" alt="destination 1"/>
                        </div>
                        <div className="list-content">
                            <h5>Rome, Milan, Naples</h5>
                            <span>SILVER HOTEL, 4 NIGHTS, 5 STARS</span>
                            <a href="/book" className="price-btn">$1,700 Book Now</a>
                        </div>
                    </div> 
                    <div className="list-item">
                        <div className="list-thumb">
                            <div className="title">
                                <h4>France</h4>
                            </div>
                            <img src="./assets/images/destination_2.jpg" alt="destination 2"/>
                        </div>
                        <div className="list-content">
                            <h5>Paris, Marseille, Lyon</h5>
                            <span>NEW PALACE, 5 NIGHTS, 5 STARS</span>
                            <a href="/book" className="price-btn">$2,200 Book Now</a>
                        </div> 
                    </div> 
                    <div className="list-item">
                        <div className="list-thumb">
                            <div className="title">
                                <h4>Germany</h4>
                            </div>
                            <img src="./assets/images/destination_3.jpg" alt="destination 3"/>
                        </div> 
                        <div className="list-content">
                            <h5>Berlin, Hamburg, Munich</h5>
                            <span>LUXE HOTEL, 5 NIGHTS, 6 STARS</span>
                            <a href="/book" className="price-btn">$3,300 Book Now</a>
                        </div> 
                    </div> 
                    <div className="list-item">
                        <div className="list-thumb">
                            <div className="title">
                                <h4>Spain</h4>
                            </div>
                            <img src="./assets/images/destination_4.jpg" alt="destination 4"/>
                        </div> 
                        <div className="list-content">
                            <h5>Madrid, Bercelona, Valencia</h5>
                            <span>GOOD HOTEL, 4 NIGHTS, 6 STARS</span>
                            <a href="/book" className="price-btn">$4,400 Book Now</a>
                        </div> 
                    </div>
                    <div className="list-item">
                        <div className="list-thumb">
                            <div className="title">
                                <h4>Netherlands</h4>
                            </div>
                            <img src="./assets/images/destination_5.jpg" alt="destination 5"/>
                        </div> 
                        <div className="list-content">
                            <h5>Amsterdam, Delft, The Hague</h5>
                            <span>BEST HOTEL, 6 NIGHTS, 7 STARS</span>
                            <a href="/book" className="price-btn">$5,500 Book Now</a>
                        </div>
                    </div> 
                    <div className="list-item">
                        <div className="list-thumb">
                            <div className="title">
                                <h4>Switzerland</h4>
                            </div>
                            <img src="./assets/images/destination_6.jpg" alt="destination 6"/>
                        </div> 
                        <div className="list-content">
                            <h5>Zürich, Geneva, Basel</h5>
                            <span>NEW HOTEL, 7 NIGHTS, 7 STARS</span>
                            <a href="/book" className="price-btn">$6,600 Book Now</a>
                        </div> 
                    </div>
                </div> 
            </div>
        </div> 
    );
};

export default ServiceSlider;
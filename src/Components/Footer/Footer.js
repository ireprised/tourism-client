import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="footer-logo">
                            <a href="index.html">
                                <img src="./assets/images/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="copyright">
                            <span>
                            	
                                Copyright &copy; 2014 <a href="/home">Company Name</a>
                            
                            </span>
                        </div>
                    </div> 
                    <div className="col-md-4 col-sm-4">
                        <ul className="social-icons">
                            <li><a href="http://fb.com" className="fa fa-facebook" > </a></li>
                            <li><a href="http://twitter.com" className="fa fa-twitter"> </a></li>
                            <li><a href="http://linked.com" className="fa fa-linkedin"> </a></li>
                            <li><a href="http://flickr.com" className="fa fa-flickr"> </a></li>
                            <li><a href="http://rss.com" className="fa fa-rss"> </a></li>
                        </ul>
                    </div> 
                </div>
            </div> 
        </div>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut } = useAuth();
    return (
        <div className="site-header">
            <div className="container">
                <div className="main-header">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-10">
                            <div className="logo">
                                <a href="/home">
                                    <img src="/assets/images/logo.png" alt="travel html5 template" title="travel html5 template"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-6 col-xs-2">
                            <div className="main-menu">
                                <ul className="visible-lg visible-md">
                                <li className="active"><Link to="/home">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/contactus">Contact</Link></li>
                                { user.email ?
                                    <li><Link to="/addorder">Add Order</Link></li>
                                    :
                                    <li></li>
                                }
                                { user.email ?
                                    <li><Link to="/manageorder">Manage Order</Link></li>
                                    :
                                    <li></li>
                                }
                                {
                                user.email ? 
                                    <li><button onClick={logOut}> Sign Out</button></li>
                                    :
                                    <li><Link to="/login">Login</Link></li>
                                }
                                    <li>{user?.displayName}</li>
                                    
                                </ul>
                                <a href="http://fb.com" className="toggle-menu visible-sm visible-xs">
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div> 
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-12 visible-sm visible-xs">
                        <div className="menu-responsive">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/contactus">Contact</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
    );
};

export default Header;
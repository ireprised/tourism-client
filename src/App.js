
   
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import AddOrder from "./Components/AddOrder/AddOrder";
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Services from './Components/Services/Services';
import Events from "./Components/Events/Events";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import SingleService from "./Components/SingleService/SingleService";

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/details/:id">
            <SingleService></SingleService>
          </PrivateRoute>
          <PrivateRoute path="/addorder">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <PrivateRoute path="/manageorder">
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute path="/events">
            <Events></Events>
          </PrivateRoute>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Error from './components/Layouts/Error';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    
    <Header />


    {/* <Router>
      <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/contact">Contact</Link>

      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
          
      </Switch>
     
    </Router> */}
    <Footer/>
    </>
  );
}

export default App;

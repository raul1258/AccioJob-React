import React from 'react'
import Alert from '../UI/main/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  return (
    <div>
      <Alert alert = {'Free Shipping Above Rs. 499 | Shop Now'}></Alert>
      

       {/* Navigation Bar */}
       <div className='navigation-bar'>
          <Router>
            <div className='navigation-container'>
              <div><Link to="/">Home</Link></div>
                
            <div><Link to="/plants">Plants</Link></div>
            <div><Link to="/seeds">Seeds</Link></div>
            <div><Link to="/gifting">Gifting</Link></div>
            </div>
            
          </Router>

       </div>
    </div>
  )
}

export default Header

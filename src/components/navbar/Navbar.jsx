import React, { useContext, useEffect } from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
      const {user, loading, error, dispatch } = useContext(AuthContext);



      const handleLogout = () => {
        localStorage.removeItem("user");

         window.location.reload();
      }
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to="/" style={{color:"white", textDecoration:"none"}}>
                  <span className='logo'>bookings</span>
                
                </Link>
              
                <div className="navItems">
                    {
                        !user &&  <button className="navButton">Register</button>
                    }
                    {
                        user ? <button className="navButton" onClick={handleLogout}>Logout</button>  : <Link to="/login">
                          <button className="navButton">Login</button>
                    
                    </Link>
                    }
                   
                  
                  
                </div>


            </div>
            
        </div>
    );
};

export default Navbar;
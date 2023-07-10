import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <>
           <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
             <div className="container-fluid">
                <Link className="navbar-brand " to="/">
                  Navbar
                </Link>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-link" to="/">
                         <Link className="nav-link" to="/">
                           Home
                         </Link>
                         </li>
                         <li className="nav-link" to="/">
                         <Link className="nav-link" to="/Course">
                           Course
                         </Link>
                         </li>
                         <li className="nav-link" to="/">
                         <Link className="nav-link" to="/About">
                           About
                         </Link>
                         </li>
                    </ul>
                  </div>
             </div>
           </nav>

        </>
    )
}

export default Navbar;


import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
function Navbar() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu =() => setClick(false)
  //the function reverses the click property
    return(
      <nav  className="nav__container">
        <div className="navbar__container">
          <img src="valtru_logo.png" alt="placeholder" className="logo" onClick={closeMobileMenu}/>    

              <ul className={click? 'nav-menu active' : 'nav-menu'}>
                  
                <li className="nav-item">
                  <Link 
                    className="rainbow-text"
                    to="/" 
                    onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link 
                    className="rainbow-text" 
                    to="/services" 
                    onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link 
                    className="rainbow-text" 
                    to="/products" 
                    onClick={closeMobileMenu}>
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link  
                    className="rainbow-text" 
                    to="/contact" 
                    onClick={closeMobileMenu}>
                      Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link 
                    className="rainbow-text" 
                    to="/about" 
                    onClick={closeMobileMenu}>
                    About Us
                  </Link>
                </li>

              </ul>
            
              <div onClick={handleClick}>
                <i className={click? 'icons8-menu-64.png' : 'fas fa-bars'}/>
                <img src="icons8-menu-64.png" alt="" className="menu_icon" />
              </div>  
            
        </div>  
      </nav>
    )
}

export default Navbar;


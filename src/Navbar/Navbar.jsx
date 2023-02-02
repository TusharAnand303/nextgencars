import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

  const  {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

    useEffect(()=>{

        const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");
  
      if (navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }
  
      if (navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }
  
      const navLink = document.querySelectorAll(".nav__link");
  
      const linkAction = () => {
        const navMenu = document.getElementById("nav-menu");
  
        navMenu.classList.remove("show-menu");
      };
      navLink.forEach((n) => n.addEventListener("click", linkAction));
    },[])


  return (
    <>
    <header className="header" id="header">
        <nav className="nav container">
          <Link to='/'>
          {
          isAuthenticated ?<a href="#" className="nav__logo">
          {/* <i className="ri-steering-fill"  style={{color:"rgb(0, 255, 128)",marginRight:"5px"}}></i> */}
          <img src={user.picture} alt="" width="30px" height="30px" style={{borderRadius:"50%"}} />
          <span style={{marginBottom:"-5px",marginLeft:"5px"}}>Welcome</span>
          <span style={{marginBottom:"-5px",textTransform:"capitalize",color:"rgb(0, 255, 128)"}}>{user.nickname}</span>
          </a>  : <a href="#" className="nav__logo">
          <i className="ri-steering-fill"  style={{color:"rgb(0, 255, 128)",marginRight:"5px"}}></i>
            NextGen Cars
          </a>  
          }
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">      
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                {
                  isAuthenticated ? 
                  <a onClick={logout} href="#" className="nav__link">
                  logout
                </a>
                  :
                <a onClick={loginWithPopup} href="#" className="nav__link">
                  Login
                </a>

                }
               
              </li>
              <Link to='/carlist2'>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Our Cars
                </a>
              </li>
              </Link>
              <Link to='/About2'>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About Us
                </a>
              </li>
              </Link>
              <Link to='/Contact'>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Contact US
                </a>
              </li>
              </Link>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>
          {/* Toggle menu  */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar

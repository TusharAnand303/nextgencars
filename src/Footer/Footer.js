import React, { useEffect } from 'react'
import './Footer.css'
import bg from '..//assets/img/offer-bg.png'
import offercar from '..//assets/img/car.png'
import footer from '..//assets/next.mp4'
import { Link } from 'react-router-dom'


function Footer() {

  
  let url1='https://www.facebook.com';
  let url2='https://wa.me/917903879351';
  let url3='https://www.instagram.com/nextgen_selfdrive/';
  let url4='mailto:carsnextgen@gmail.com';
  let url5="tel:7903879351";

  return (
   <>
    <section className='offer section' >
    <h3></h3>
    
    </section>
    <footer className="footer section" style={{backgroundColor:"rgb(32, 32, 32)"}} >
      {/* <div className="shape shape__big"></div> */}
      {/* <div className="shape shape__small"></div> */}
      <div className='videoBG'>
     <video className='vd' autoPlay muted loop playsInline >
        <source src={footer} type="video/mp4" /> 
     </video></div>

      <div className="footer__container container grid">
        <div className="footer__content" style={{marginTop:"20px"}}>
          <a href="" className='footer__logo'>
          <i className="ri-steering-fill"></i> NextGen Cars
          </a>
          <p className="footer__description"  style={{marginTop:"20px"}}>
          Discover the best car rental experience in Ranchi with NextGen. We offer a fleet of top-notch vehicles at fair and competitive prices. Our commitment to serving a large number of satisfied customers sets us apart. Book now and enjoy a hassle-free and memorable drive in Ranchi.
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">
            Company
          </h3>
          <ul className="footer__links">
           <Link to='./About2'>
            <li>
              <a href="#" className="footer__link">About</a>
            </li>
           </Link>
            <Link to='./Carlist2'>
            <li>
              <a href="#" className="footer__link">Cars</a>
            </li>
            </Link>
            <li>
              <a href="#" className="footer__link">Login</a>
            </li>
            <li>
              <a href="/" className="footer__link">Home</a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">
          Information
          </h3>
          <ul className="footer__links">
           <Link to='./Contact'>
           <li>
              <a href={url4} className="footer__link">Contact Us</a>
            </li>
           </Link>
           <Link to='./Contact'>
            <li>
              <a href={url5} className="footer__link">Our Location</a>
            </li>
            </Link>
            <Link to='./About2'>
            <li>
              <a href={url5} className="footer__link">About Us</a>
            </li>
            </Link>
            <Link to='./Carlist2'>
            <li>
              <a href="#" className="footer__link">Our Cars</a>
            </li>
            </Link>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">
            Social Links
          </h3>
          <ul className="footer__social">
          <a target='_blank' href={url1} className="footer__social-link" style={{marginRight:"15px"}}>
            <i className='ri-facebook-fill'></i>
          </a>
          <a target='_blank' href={url3} className="footer__social-link" style={{marginRight:"15px"}}>
            <i className='ri-instagram-line'></i>
          </a>
          <a target='_blank' href={url2} className="footer__social-link" style={{marginRight:"15px"}}>
          <i className="ri-whatsapp-fill"></i>
          </a>
          <a target='_blank' href="tel:9304984077" className="footer__social-link">
          <i className="ri-phone-fill"></i>
          </a>
          </ul>
        </div>
      </div>
        <span className="footer__copy">
          &#169; NextGen Cars All rights reserved
        </span>

    </footer>
   </>
  )
}

export default Footer

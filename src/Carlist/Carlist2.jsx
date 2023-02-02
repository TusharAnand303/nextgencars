import React, { useEffect } from 'react'
import './Carlist.css'
import logo1 from '../assets/img/ss.png';
import logo2 from '../assets/img/hh.png';
import logo3 from '../assets/img/mm2.png';
import logo4 from '../assets/img/tt.png';
import car1 from '../assets/img/car.png';
import car2 from '../assets/img/cretaa.png';
import car3 from '../assets/img/scorpio.png';
import car4 from '../assets/img/tiago.png';
import car5 from '../assets/img/swift.png';

import mixitup from 'mixitup';
import AOS from "aos";
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar';
import Footer2 from '../Footer/Footer2';
import { Link } from 'react-router-dom';

function Carlist2() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
    useEffect(() => {
        mixitup(".featured__content", {
          selectors: {
            target: ".featured__card",
          },
          animation: {
            duration: 500
          }
        });
 }, []);


  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>

    <section className="featured section" id='featured'>
        <h2 className="ss section__title" data-aos="zoom-in" style={{fontSize:"27px"}}>
           Currently <span style={{color:"rgb(0, 255, 128)"}}>A</span>vilable<span style={{color:"rgb(0, 255, 128)"}}> C</span>ars
        </h2>
        <div className="featured__container container">
            <ul className="featured__filters">
                <li>
                <button className="featured__items active-featured" data-filter="all">
                    <span>All</span>
                </button>
                </li>
                <li>
                <button className="featured__items" data-filter=".suzuki">
                <img src={logo2} alt="" />
                </button>
                </li>
                <li>
                <button className="featured__items" data-filter=".hun">
                <img src={logo1} alt="" />
                </button>
                </li>
                <li>
                <button className="featured__items" data-filter=".mahindra">
                <img src={logo3} alt="" />
                </button>
                </li>
                <li>
                <button className="featured__items" data-filter=".tata">
                <img src={logo4} alt="" />
                </button>
                </li>
            </ul>
            <div className="featured__content grid">
               <Link to='../Baleno_features'>
               <article className="featured__card mix hun" >
                    <div className="shape shape__smaller"></div>
                        <h1 className="featured__title">BALENO</h1>
                        <h3 className="featured__subtitle">Color: Mist</h3>
                        <a href="#"><img src={car1} alt="" className='featured__img' /></a>
                        <h3 className="featured__price">₹ 1,799 (Base Fair)</h3>
                        <button className="button featured__button">
                        <i className="ri-heart-fill"></i>
                        </button>
                </article>
               </Link>
                {/* second item */}
                <Link to='../Creta_features'>
                <article className="featured__card mix suzuki " >
                    <div className="shape shape__smaller"></div>
                        <h1 className="featured__title" >CRETA</h1>
                        <h3 className="featured__subtitle">Color: White</h3>
                        <a href="#"><img src={car2} alt="" className='featured__img creta' /></a>
                        <h3 className="featured__price">₹ 2,999 (Base Fair)</h3>
                        <button className="button featured__button">
                        <i className="ri-heart-fill"></i>
                        </button>
                </article>
                </Link>
                {/* third item */}
                <Link to='../Tiago_features'>
                <article className="featured__card mix tata" >
                    <div className="shape shape__smaller"></div>
                        <h1 className="featured__title" >TIAGO</h1>
                        <h3 className="featured__subtitle">Color: Red</h3>
                        <a href="#"><img src={car4} alt="" className='featured__img tiago' /></a>
                        <h3 className="featured__price">₹ 1,799 (Base Fair)</h3>
                        <button className="button featured__button">
                        <i className="ri-heart-fill"></i>
                        </button>
                </article>
                </Link>
                {/* fourth item */}
                <Link to='../Swift_features'>
                <article className="featured__card mix hun" >
                    <div className="shape shape__smaller"></div>
                        <h1 className="featured__title" >SWIFT</h1>
                        <h3 className="featured__subtitle">Color: White</h3>
                        <a href="#"><img src={car5} alt="" className='featured__img swift' /></a>
                        <h3 className="featured__price">₹ 1,799 (Base Fair)</h3>
                        <button className="button featured__button">
                        <i className="ri-heart-fill"></i>
                        </button>
                </article>
                </Link>
                {/* Fifth car */}
                <Link to='../Scr_features'>
                <article className="featured__card mix mahindra" >
                    <div className="shape shape__smaller"></div>
                        <h1 className="featured__title" >SCORPIO</h1>
                        <h3 className="featured__subtitle">Color: Black</h3>
                        <a href="#"><img src={car3} alt="" className='featured__img scorpio' /></a>
                        <h3 className="featured__price">₹ 4,999 (Base Fair)</h3>
                        <button className="button featured__button">
                        <i className="ri-heart-fill"></i>
                        </button>
                </article>
                </Link>
            </div>
        </div>
    </section>
    <br></br>
    <br></br>
    <Footer2/>
    </>
  )
}

export default Carlist2

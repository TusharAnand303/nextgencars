import React, { useEffect } from 'react'
import './About.css'
import aboutImg from "../assets/img/car.png";
import Footer from '../Footer/Footer';
import AOS from "aos";
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function About() {


    useEffect(()=>{
        AOS.init({duration:2000})
      },[]);
  return (
    
    <>
    {/* <Navbar/> */}
    <section className="about section" >
        <h2 className="section__title about__title tt" >
                    Our Best Featured <br /> Car <span style={{color:"rgb(8, 255, 140)"}}>( B A L E N O )</span>
                </h2>
        <div className="about__container container grid">
            <div className="about__group">
                <img src={aboutImg} alt="" className="about__img ii" data-aos="fade-left"/>
                <div className="about__card" data-aos="zoom-out">
                    <h3 className="about__card-title">
                        100+
                    </h3>
                    <p className="car__card-description">
                        More than 100+ happy customer we serve from our NextGen Cars
                    </p>
                </div>
            </div>
            <div className="about__data" style={{marginTop:"30px",textAlign:"center"}}>
                

                <p className="about__description">
                Our car rental company in Ranchi offers a fleet of 5+ quality vehicles at an affordable price of Rs.2000 as base fair. We pride ourselves on providing exceptional service and strive to ensure complete customer satisfaction. Book with us for a seamless and enjoyable rental experience in Ranchi.
                <br></br>
                <br></br>

                Nextgen Car is a leading car rental company in Ranchi, India. The company provides affordable and fair rental conditions for its customers, making it a convenient and cost-effective solution for transportation needs. With a wide range of vehicles to choose from, Nextgen Car offers a high-quality, reliable rental experience that is accessible to everyone.
                </p>
                
                <Link to='/Baleno_features'>
                <a href="#" className="button">Book Your's Today</a>
                </Link>
            </div>

        </div>
    </section>
    {/* <Footer/> */}
    </>
  )
}

export default About

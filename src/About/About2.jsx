import React, { useEffect } from 'react'
import './About.css'
import aboutImg from "../assets/img/car.png";
import Footer from '../Footer/Footer';
import AOS from "aos";
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer2 from '../Footer/Footer2';

function About2() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    useEffect(()=>{
        AOS.init({duration:2000})
      },[]);
  return (
    
    <>
    <Navbar/>
    <br></br>
    <br></br>

    <section className="about section" style={{backgroundColor:"black"}}>
        <h2 className="section__title about__title tt" >
                    About <br /> Us <span style={{color:"rgb(8, 255, 140)"}}>( NextGen Cars )</span>
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
                Nextgen Car is a leading car rental company in Ranchi, India. The company provides affordable and fair rental conditions for its customers, making it a convenient and cost-effective solution for transportation needs. With a wide range of vehicles to choose from, Nextgen Car offers a high-quality, reliable rental experience that is accessible to everyone.
                <br></br>
                <br></br>

                The company's mission is to provide high-quality, reliable rental vehicles at low prices, making it accessible for everyone to rent a car for their travels. Whether you're looking for a small car for a personal road trip or a large SUV for a family vacation, Nextgen Car has a vehicle to meet your needs. The company's diverse fleet includes cars of different makes and models, ranging from budget-friendly to luxury options.
                <br></br>
                <br></br>


                At Nextgen Car, the focus is always on customer satisfaction. The company's team of knowledgeable and friendly staff is available to assist customers every step of the way, from selecting the right vehicle to answering any questions during the rental process. With 24/7 customer support, Nextgen Car is always there for its customers when they need it.
                <br></br>

                The rental process is simple and straightforward. Customers can book their rental online or over the phone, and the company provides convenient pickup and drop-off options. To ensure the safety of its customers, Nextgen Car regularly maintains and services its vehicles, so customers can have peace of mind knowing that their rental is in good condition.
                <br></br>

                </p>
                
                <Link to='/Carlist2'>
                <a href="#" className="button">Book Your's Now</a>
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

export default About2

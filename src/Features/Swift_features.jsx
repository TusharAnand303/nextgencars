import React, { useEffect } from 'react'
import './Features.css'
import features from '..//assets/img/features.png'
import map from '..//assets/img/map.svg'
import AOS from "aos";
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';
import Navbar from '../Navbar/Navbar';


export const Swift_features = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      let url1='https://www.facebook.com';
      let url2='https://wa.me/917903879351';
      let url3='https://www.instagram.com/nextgen_selfdrive/';
      let url4='mailto:carsnextgen@gmail.com';

    useEffect(()=>{
        AOS.init({duration:2000})
      },[]);
    


    return (
        <>
            <Navbar/>
            <br></br>
            <br></br>

            <section className="features section" style={{marginTop:"0px",backgroundColor:"black"}}>
                <h2 className="section__title" style={{marginBottom:"40px"}}>
                Suzuki  (<span style={{color:"rgb(8, 255, 140)"}}> S W I F T </span>)
                </h2>
                <div className="features__container container grid" style={{marginTop:"40px"}}>
                    <div className="features__group">
                        <img src={features} alt="Feature image not found " className='features__img'data-aos="fade-up" />

                        <div className="features__card features__card-1" data-aos="fade-right">
                            <h3 className="features__card__title">Type</h3>
                            <p className="features__card-description">Hatchback<br></br>5 Seater</p>
                        </div>

                        <div className="features__card features__card-2" data-aos="fade-left">
                            <h3 className="features__card__title">Rent Price</h3>
                            <p className="features__card-description">₹ 1,799</p>
                        </div>

                        <div className="features__card features__card-3" data-aos="fade-right">
                            <h3 className="features__card__title">City</h3>
                            <p className="features__card-description">Ranchi (Local )</p>
                        </div>

                        <div className="features__card features__card-4" data-aos="fade-left">
                            <h3 className="features__card__title">Extra Charge</h3>
                            <p className="features__card-description">₹ 249/hr</p>
                        </div>

                    </div>
                </div>
                <img style={{marginTop:"20px"}} src={map} alt="Map not avilable" className="features__map" data-aos="slide-right"/>
                <div className="home_car-data" style={{backgroundColor:"black",marginTop:"70px",marginBottom:"30px"}}>
                <a href="tel:7903879351" className="home_button">BOOK NOW</a>
                <h4 style={{marginTop:"40px"}}>OR</h4>
                <h3 className='ft' style={{marginTop:"30px"}}>CONTACT US ON</h3>
                </div>
                <div className='icoico' >
                <a href={url1} target="_blank"><i className="ri-facebook-circle-fill" ></i></a>
                <a href={url2}><i className="ri-whatsapp-fill"></i></a>
                <a href={url3}><i className="ri-instagram-fill"></i></a>
                <a href={url4}><i className="ri-mail-fill"></i></a>
                </div>
            </section>
            
            <Footer2/>
        </>
    )
}

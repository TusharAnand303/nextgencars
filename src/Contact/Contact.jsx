import React from 'react'
import Footer2 from '../Footer/Footer2'
import './Contact.css'
import bg from '..//assets/img/offer-bg.png'
import offercar from '..//assets/img/car.png'
import Navbar from '../Navbar/Navbar'

function Contact() {
  return (
   <>
   <Navbar/>
   <br></br>

    <section className='offer section' >
    <h3></h3>
    <center>
     <div className='offer__container container grid'>
       <img src={bg} className='offer__bg'/>
       <div className='offer__data'>
        <h2 className="section__title offer__title">
         About US <span style={{color:'rgb(7, 255, 139)'}}>( NextGen Cars ) </span>
        </h2>
        <p className="offer__description" >
        Nextgen Car is located at Indrapuri Road No. 1, near Raja General Store in Ranchi, India. The company can be reached by phone at 7903879351 for any questions or inquiries regarding its car rental services. The company's physical location is convenient and accessible, making it easy for customers to rent a car and get on the road. Whether you're looking to rent a car for personal or business use, Nextgen Car is committed to providing a high-quality, reliable rental experience at an affordable price. Contact the company today to learn more about its rental options and to book your next rental.
        </p>
        <div style={{ marginBottom:"-200px"}}>
        <h2 >Address :</h2>
        <p>Indrapuri Road No 1 Near Raja Genetal store ( Ranchi -5 ) </p><br></br>
        <h2>Phone Number : </h2>
        <p>7903879351</p>
        <br></br>
        <h2>Location : </h2><br></br>
        <p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9806931078588!2d85.30087021424704!3d23.388915708407428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0c353ba290d%3A0x9db7e2629281d45a!2s1405%2C%20Indrapuri%20Road%20No.%201%2C%20Indrapuri%20Colony%2C%20Ranchi%2C%20Jharkhand%20834001!5e0!3m2!1sen!2sin!4v1675333431432!5m2!1sen!2sin" style={{border:"0",width:"100%",height:"300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </p>
        </div>
       </div>
     </div>

     </center>

    </section>
    <Footer2/>
   </>
  )
}

export default Contact
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './Service.css'
function Servicepage(){
    return(
        <div className='background'>
             <section className="about">
        <div className="about_overall">
            <div><h1 style={{fontFamily: 'sans-serif'}} className="text-light">Service</h1></div>
            <div className="about_para text-light"><p className="text-center">I offer professional web development and design services tailoed to your business needs. From custom websites and e-commerce platforms to user-friendly designs and SEO optimization, I ensure a seamless and impactful online presence</p></div>
        </div>
    </section>
    
    <section className="about_details">
        <div className="home_about">
            <div className="container">
            <h5 className="text-light py-2">Home / Service</h5>
            </div>
        </div>
    </section>

    <section className="arrow">
      <div className="arrow1">
        <div><a href="#navbar"><i className="bi bi-arrow-up arrow text-light  border border-success rounded-circle fs-2 py-1 px-2 text-dark"></i></a></div>
      </div>
    </section>


    <section className="container">
        <div className="services">
            <div className="">
                <i className="bi bi-terminal"></i>
                <h4>Mobile Apps</h4>
                <p>I create user-friendly and innovative mobile applications for both iOS and Android platforms.</p>           
            </div>
            <div className="">
                <i className="bi bi-display"></i>
                <h4>Web apps</h4>
                <p>I develop powerful and scalable web applications that deliver seamless performance across all devices.</p>
            </div>
            <div className="">
                <i className="bi bi-bounding-box"></i>
                <h4>CMS</h4> 
                <p>I specialize in building and customizing Content Management Systems (CMS) that empower you to manage your website effortlessly.</p>
            </div>
        </div>
    </section>

    <section className="footer">
        <div className=" container2 py-5">
          <div><h2 className="text-light py-1">Portfolio</h2></div> 
          <div><p className="text-light py-3 text-center text-wrap">Let's build something amazing together! Creating beautiful user-centric design that solve real-world problems</p></div> 
          <div>
            <div className="icon1 ">
              <div className="icons"><i className="bi bi-instagram"></i></div>
              <div className="icons"><i className="bi bi-facebook"></i></div>
              <div className="icons"><i className="bi bi-linkedin"></i></div>
              <div className="icons"><i className="bi bi-twitter-x"></i></div>
            </div>
          </div> 
          <div className="line py-3"></div>
          <div><h5 className="text-light text-center text-wrap py-3">Copyright Portfolio All Right Reserved</h5></div>
        </div>
      </section>
        </div>
    )
}
export default Servicepage;
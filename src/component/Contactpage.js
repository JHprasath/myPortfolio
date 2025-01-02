import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './Contact.css'
function Contactpage(){
    return(
        <div className='background'>
            <section className="about">
        <div className="about_overall">
            <div><h1 style={{fontFamily:' sans-serif'}} className="text-light">Contact</h1></div>
            <div className="about_para text-center text-wrap text-light"><p className="text-center text-wrap">I'd love to hear from you! Whether you have a question, need assistance with a project or Want to discuss a potential collaboration, don't hesitate to reach out. I'm passionate about bringing ideas to life and am always excited to work with clients who share the same enthusiasm. Let's connect and create something amazing together! </p></div>
        </div>
    </section>
    
    <section className="about_details">
        <div className="home_about">
            <div className="container">
            <h5 className="text-light py-2">Home / Contact</h5>
            </div>
        </div>
    </section>

    <section className="container Contact-details">
        <div className="row">
            <div className="text-light col-sm-12 col-md-6">
                <div className="contact_icon"><i className="bi bi-geo-alt"></i></div>
                <div className="">
                    <h4>Address</h4>
                    <p>Gandhipuram Coimbatore,Tamilnadu</p>
                </div>
            </div>
            <div className="text-light telephone col-sm-12 col-md-6" >
                <div className="contact_icon"><i className="bi bi-telephone"></i></div>
                <div className="">
                    <h4>Call ME</h4>
                    <p>+91 6384805049</p>
                </div>
            </div>
            <div className="text-light col-sm-12 col-md-6">
            <div className="contact_icon"><i className="bi bi-envelope"></i></div>
                <div className="">
                    <h4>Email Us</h4>
                    <p>hariprasathjagadheesh03@gmail.com</p>
                </div>
            </div>
            <div className="text-light share col-sm-12 col-md-6">
                <div className="contact_icon"><i className="bi bi-share"></i></div>
                <div className="">
                    <h4>Social Profiles</h4>
                    <span className="share-icon">
                        <i className="bi bi-instagram px-2"></i>
                        <i className="bi bi-facebook px-2"></i>
                        <i className="bi bi-linkedin px-2"></i>
                        <i className="bi bi-twitter-x px-2"></i>
                    </span>
                </div>
            </div>
        </div>
    </section>

    <section className="arrow">
      <div className="arrow1">
        <div><a href="#navbar"><i className="bi bi-arrow-up arrow text-light  border border-success rounded-circle fs-2 py-1 px-2 text-dark"></i></a></div>
      </div>
    </section>


    <section className="container">
        <div className="name-email row">
            <div className="col-sm-12 col-md-6"><input type="text" placeholder="Your Name"/></div>
            <div className="col-sm-12 col-md-6 your-mail"><input type="text" placeholder="Your Email"/></div>
        </div>
        <div className="col-sm-12">
            <div><input className="subject" type="text" placeholder="Subject"/></div>
        </div>
        <div className="col-sm-12">
            <input type="text" className="message" placeholder="Message"/>
        </div>
        <div className="col-sm-12 send-container"><button type="submit" className="send-message">Send Message</button></div>
    </section>

    <section className="footer">
        <div className=" container2 py-5">
          <div><h2 className="text-light py-1">Portfolio</h2></div> 
          <div><p className="text-light text-center text-wrap py-3">Let's build something amazing together! Creating beautiful user-centric design that solve real-world problems</p></div> 
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
export default Contactpage;
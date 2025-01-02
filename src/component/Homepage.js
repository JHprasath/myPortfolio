import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './green.jpg'
function Homepage(){
    return(
        <div className='greenbackground'>

      <div className="container container1">
        <div className="name"><h1>HariprasatH</h1></div>
        <div className="work">
          <span className="text first-text text-light">I'm a  </span>
          <span className="text sec-text text-light"> web developer</span>
        </div>
        <div className="icon">
          <div className="icons"><i className="bi bi-instagram"></i></div>
          <div className="icons"><i className="bi bi-facebook"></i></div>
          <div className="icons"><i className="bi bi-linkedin"></i></div>
          <div className="icons"><i className="bi bi-twitter-x"></i></div>
        </div> 
      </div>
       
      <section className="arrow">
        <div className="arrow1">
          <div><a href="#navbar"><i className="bi bi-arrow-up arrow text-light  border border-success rounded-circle fs-2 py-1 px-2 text-dark"></i></a></div>
        </div>
      </section>

      <section className="footer">
        <div className=" container2 py-5" style={{position :'relative',top:'350px'}}>
          <div><h2 className="text-light py-1">Portfolio</h2></div> 
          <div><p className="Copyright text-light py-3">Let's build something amazing together! Creating beautiful user-centric design that solve real-world problems</p></div> 
          <div>
            <div className="icon1 ">
              <div className="icons"><i className="bi bi-instagram"></i></div>
              <div className="icons"><i className="bi bi-facebook"></i></div>
              <div className="icons"><i className="bi bi-linkedin"></i></div>
              <div className="icons"><i className="bi bi-twitter-x"></i></div>
            </div>
          </div> 
          <div className="line py-3"></div>
          <div><h5 className="Copyright text-light py-3">Copyright Portfolio All Right Reserved</h5></div>
        </div>
      </section>
      </div>
    )
}
export default Homepage;
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './green.jpg'
// import { useTypewriter ,Cursor } from 'react-simple-typewriter'
import { useTypewriter, Cursor } from 'react-simple-typewriter';



function Homepage(){
    //auto type
const[text] = useTypewriter({
 words : ['Web Developer','Freelancer','Frontend Developer'],
 loop : true,
 typeSpeed : 40,
 deleteSpeed : 35,
 delaySpeed : 2000
})
    return(
        <div className='greenbackground'>

      <div className="container container1">
        <div className="name"><h1>HariprasatH</h1></div>
        <div className="work">
          <p className="text first-text text-light">I'm a <span className="auto-type">{text}</span><Cursor cursorColor="#00ff00" cursorStyle="|" /></p>
          {/* <span className="text sec-text text-light"> web developer</span> */}
        </div>
        <div className="icon">
          <div className="icons"><a href="https://www.instagram.com/hari_under_lord_shiva/?hl=en"><i className="bi bi-instagram"></i></a></div>
          <div className="icons"><i className="bi bi-facebook"></i></div>
          <div className="icons"><a href="http://www.linkedin.com/in/hariprasath-jaga03"><i className="bi bi-linkedin"></i></a></div>
          <div className="icons"><i className="bi bi-twitter-x"></i></div>
        </div> 
      </div>
       {/* <div className='hulk-image'>
        <img src={me} alt='hulk'/>
       </div> */}
       
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
              <div className="icons"><a href="https://www.instagram.com/hari_under_lord_shiva/?hl=en"><i className="bi bi-instagram"></i></a></div>
              <div className="icons"><i className="bi bi-facebook"></i></div>
              <div className="icons"><a href="http://www.linkedin.com/in/hariprasath-jaga03"><i className="bi bi-linkedin"></i></a></div>
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
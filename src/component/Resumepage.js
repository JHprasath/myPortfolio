import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './Resume.css'
import { Link } from 'react-router-dom';
function Resumepage(){
    return(
        <div className='background'>
        <section className="about">
        <div className="about_overall">
            <div><h1 style={{fontFamily: 'sans-serif'}} className="text-light">Resume</h1></div>
            <div className="about_para text-light"><p className="text-center">Creative and detail-oriented web developer and designer with over 1 year of experience in creating visually appealing, user-centric websites and applications. Expert in front-end technologies like HTML, CSS, JavaScript and React, with a strong foundation in design principles. Passionate about transforming ideas into functional digital solutions that drive engagement and achieve business goals.</p></div>
        </div>
    </section>
    
    <section className="about_details">
        <div className="home_about">
            <div className="container">
            <h5 className="text-light py-2">Home / Resume</h5>
            </div>
        </div>
    </section>

    <section className="container resume">
        <div className="resume-overall-box text-light">
            <div className="text-center">
                <h1>J.HARIPRASATH</h1>
                <p>2/38E , amirtha garden school backside mangalam,Tiruppur</p>
                <p>tamilselvitex1970@gmail.com</p>
                <p>+91 6384805049</p>
                <p>12-12-2003</p>
            </div>
            <div>
                <h2>Objective</h2>
                <hr/>
                <p>Looking of opportunity to incorporate traning to help the company grow.</p>
                <p>I am looking forward to roles that will help me realize my potential by exploring the various aspects for this field</p>
            </div>
            <div>
                <h2>Education</h2>
                <hr/>
                <h5>Gobi arts & science college afflicated by bharathiyar university</h5>
                <p>BSc Physics</p>
                <p>82%</p>
            </div>
            <div>
                <h2>Skills</h2>
                <hr/>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>JAVASCRIPT</li>
                    <li>BLENDER</li>
                </ol>
            </div>
            <div>
                <h2>Projects</h2>
                <hr/>
                <h4>Clone websites</h4>
                <ol>
                    <li>Shape</li>
                    <li>Squadfree Normal Template</li>
                </ol>
            </div>
            <div>
                <h2>Language</h2>
                <hr/>
                <ol>
                    <li>Tamil</li>
                    <li>English</li>
                </ol>
            </div>
            <div>
                <h2>Activities</h2>
                <hr/>
                <ol>
                    <li>Member Of Sports</li>
                    <li>Frontend Developer</li>
                    <li>Artist</li>
                </ol>
            </div>
            <div>
                <h2>Declaration</h2>
                <hr/>
                <p>I hereby declare that the all information is true and correct to best of my knowledge</p>
            </div>
        </div>
    </section>

    <section className="arrow">
      <div className="arrow1">
        <div>
          <a href="#navbar"><i className="bi bi-arrow-up arrow text-light  border border-success rounded-circle fs-2 py-1 px-2 text-dark"></i></a></div>
        </div>
    </section>

    <section className="resume_download">
      <Link to="./Hariprasath Resume.pdf"  download="./Hariprasath Resume.pdf" target="_blank" className="text-light">download My resume</Link>
    </section>

    <section className="footer">
<div className=" container2 py-5">
  <div><h2 className="text-light text-center py-1">Portfolio</h2></div> 
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

export default Resumepage;
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './Project.css'
function Projectpage(){
    return(
        <div className='background'>
                <section class="about">
        <div class="about_overall">
            <div><h1 style={{fontFamily:' sans-serif'}} class="text-light">Projects</h1></div>
            <div class="about_para text-light"><p class="text-center">Take a look at some of my recent project to see how I bring ideas to life through creative design and development. Each project showcases my commitment to delivering high-quality, tailored solutions that meet client needs and exceed expections</p></div>
        </div>
    </section>

    <section class="about_details">
        <div class="home_about">
            <div class="container">
            <h5 class="text-light py-2">Home / Projects</h5>
            </div>
        </div>
    </section>

    <section class="container">
      <div class="services row">
          <div class="col-sm-12 col-md-4 mb-5"><a href="shape.html">
              <i class="bi bi-terminal"></i>
              <h4> SHAPE <br/>(e-commerce website)</h4>
              <p>I create user-friendly and innovative mobile applications for both iOS and Android platforms.</p>           
            </a>
            </div>
          <div class="col-sm-12 col-md-4 mb-5"><a href="squadfree.html">
              <i class="bi bi-display"></i>
              <h4>SQUADFREE <br/>(bootstrap template)</h4>
              <p>I develop powerful and scalable web applications that deliver seamless performance across all devices.</p>
            </a>
            </div>
          <div class="col-sm-12 col-md-4 mb-5"><a href="calculator.html">
              <i class="bi bi-bounding-box"></i>
              <h4>CALLCULATOR <br/>(simple calculator)</h4> 
              <p>I specialize in building and customizing Content Management Systems (CMS) that empower you to manage your website effortlessly.</p>
            </a>
            </div>
          <div class="col-sm-12 col-md-4 mb-5">
              <i class="bi bi-bounding-box"></i>
              <h4>WEATHER<br/>(weather APP)</h4> 
              <p>I specialize in building and customizing Content Management Systems (CMS) that empower you to manage your website effortlessly.</p>
          </div>
          <div class="col-sm-12 col-md-4 mb-5">
              <i class="bi bi-bounding-box"></i>
              <h4>TODO-LIST<br/>(todo-list app)</h4> 
              <p>I specialize in building and customizing Content Management Systems (CMS) that empower you to manage your website effortlessly.</p>
          </div>
          <div class="col-sm-12 col-md-4 mb-5">
              <i class="bi bi-bounding-box"></i>
              <h4>CAR ANIMATION<br/>(car animation)</h4> 
              <p>I specialize in building and customizing Content Management Systems (CMS) that empower you to manage your website effortlessly.</p>
          </div>
          <div class="col-sm-12 col-md-4 mb-5">
              <i class="bi bi-bounding-box"></i>
              <h4>PORTFOLIO<br/>(use in react)</h4> 
              <p>I specialize in building and customizing Content Management Systems (CMS) that empower you to manage your website effortlessly.</p>
          </div>
          <div class="col-sm-12 col-md-4 mb-5">
              <i class="bi bi-bounding-box"></i>
              <h4>STOP-WATCH<br/>(use in react)</h4> 
              <p>I specialize in building and customizing Content Management Systems (CMS) that empower you to manage your website effortlessly.</p>
          </div>
      </div>
  </section>

  <section class="footer">
    <div class=" container2 py-5">
      <div><h2 class="text-light text-center py-1">Portfolio</h2></div> 
      <div><p class="text-light text-center text-wrap py-3">Let's build something amazing together! Creating beautiful user-centric design that solve real-world problems</p></div> 
      <div>
        <div class="icon1">
          <div class="icons"><i class="bi bi-instagram"></i></div>
          <div class="icons"><i class="bi bi-facebook"></i></div>
          <div class="icons"><i class="bi bi-linkedin"></i></div>
          <div class="icons"><i class="bi bi-twitter-x"></i></div>
        </div>
      </div> 
      <div class="line py-3"></div>
      <div><h5 class="text-light text-center text-wrap py-3">Copyright Portfolio All Right Reserved</h5></div>
    </div>
  </section>
        </div>
    )
}
export default Projectpage;
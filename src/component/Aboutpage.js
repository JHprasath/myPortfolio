import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import my from './Screenshot_20241124-220626.png'
import './About.css'
function Aboutpage(){
    return(
        <div className='background'>

<section className="about">
    <div className="about_overall">
        <div><h1 style={{ fontFamily: 'sans-serif'}} className="text-light text-center">About</h1></div>
        <div className="about_para text-light"><q className="text-center">I'm a creative web designer who thrives on transforming  good ideas into visually stunning and functional digital experiences</q></div>
    </div>
</section>

<section className="about_details">
    <div className="home_about">
        <div className="container container-md">
        <h5 className="text-light py-2">Home / About</h5>
        </div>
    </div>
</section>


<section className="container about_details1">
    <div className="about_details1">
        <div>
           <div><img src={my} alt="myimage"/></div>
        </div>
        <div className="ps-3">
            <div>
            <div><h3 className="text-light py-2">Web Developer & Designer</h3></div>
            <div><q className="text-light text-wrap py-2">I specialize in solving complex design and development challenges, Whether it's building e-commerce platforms with high conversion rates or creating accessible responsive websites for diverse audiences</q></div>
            <div className="text-light py-2 inside-about">
                <div>
                     {/* <div  class="py-2"><h6><i class="bi bi-chevron-right text-success "></i> Birthday: 12 Dec 2003</h6></div> */}
                    <div  className="py-2"><h6><i className="bi bi-chevron-right text-success "></i> Website: WWW.example.com</h6></div>
                     {/* <div  class="py-2"><h6><i class="bi bi-chevron-right text-success "></i> Phone: 91+ 6384805049</h6></div> */}
                    <div  className="py-2"><h6><i className="bi bi-chevron-right text-success "></i> State: Tamilnadu,INDIA</h6></div>
                </div>
                <div>
                     {/* <div  className="py-2"><h6><i className="bi bi-chevron-right text-success "></i> Age: 21</h6></div> */}
                    <div  className="py-2"><h6><i className="bi bi-chevron-right text-success "></i> Degree: Bachelor</h6></div>
                     {/* <div  className="py-2"><h6><i className="bi bi-chevron-right text-success "></i> Email: tamilselvitex1970@gmail.com</h6></div> */}
                    <div  className="py-2"><h6><i className="bi bi-chevron-right text-success "></i> Freelance: Available</h6></div>
                </div>
            </div>
            <div className="py-2"><q className="text-light text-wrap">As a web developer and designer, I combine technical expertise with creative design to deliver seamless user experiences. Over the past 1 year, I've helped businesses build modern, responsive websites that are not only visually stunning but also function flawlessly</q></div>
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
    <div className="count row">
      <div className="text-light m-3 col-sm-12 col-md-3">
        <i className="bi bi-emoji-smile px-2 py-2"></i>
        <h1>0</h1>
        <p>Happy Clients</p>
      </div>
      <div className="text-light m-3 col-sm-12 col-md-3">
        <i className="bi bi-journal-richtext px-2 py-2"></i>
        <h1>0</h1>
        <p>Projects</p>
      </div>
      <div className="text-light m-3 col-sm-12 col-md-3">
        <i className="bi bi-headset px-2 py-2"></i>
        <h1>0</h1>
        <p>Hours Of Support</p>
      </div>
      <div className="text-light m-3 col-sm-12 col-md-3">
        <i className="bi bi-people-fill px-2 py-2"></i>
        <h1>0</h1>
        <p>Hard Workers</p>
      </div>
    </div>
</section>

<section className="container skill_progress">
    <div>
        <div NameclassName="d-flex flex-column"></div>
            <p className="text-light">SKILLS
            <span className="underline ">gvghvghv</span></p>
            <h1 className="my_skills">MY SKILLS</h1>
        </div>
        <div>
            <div  className="skills">
            <h5>HTML</h5>
            <div className="progress-bar">
                <div className="html z-n1"></div>                  
            </div>
            
            <h5>CSS</h5>
            <div className="progress-bar">
                <div className="css"></div>
            </div>
            
            <h5>BOOTSTRAP</h5>
            <div className="progress-bar">
                <div className="bootstrap"></div>
            </div>
            
            <h5>JAVASCRIPT</h5>
            <div className="progress-bar">
                <div className="javascript"></div>
            </div>     
        </div>
        </div>
</section>

<section className="container mb-5">
    <div>
        <div className="d-flex flex-column">
            <p className="text-light">FEATURES
            <span className="underline ">gvghvghv</span></p>
            <h1 className="my_skills">I'M INTERESTED IN</h1>
        </div>
         
        <div className="interestData">
        <div className="interestData" style={{textAlign: 'center'}}>
            <div className="m-2 pt-3 interest" style={{width: '290px', height: '60px', border:'1px solid #fff', color:' #fff', backgroundColor:'rgba(129, 123, 123, 0.158) '}}>Painting</div>
            <div className="m-2 pt-3 interest" style={{width: '290px', height: '60px', border:'1px solid #fff', color:' #fff', backgroundColor:'rgba(129, 123, 123, 0.158) '}}>Digital Art</div>
            <div className="m-2 pt-3 interest" style={{width: '290px', height: '60px', border:'1px solid #fff', color:' #fff', backgroundColor:'rgba(129, 123, 123, 0.158) '}}>Blender</div> 
            <div className="m-2 pt-3 interest" style={{width: '290px', height: '60px', border:'1px solid #fff', color:' #fff', backgroundColor:'rgba(129, 123, 123, 0.158) '}}>gaming</div>
            <div className="m-2 pt-3 interest" style={{width: '290px', height: '60px', border:'1px solid #fff', color:' #fff', backgroundColor:'rgba(129, 123, 123, 0.158) '}}>UX & UI Design</div>
            <div className="m-2 pt-3 interest" style={{width: '290px', height: '60px', border:'1px solid #fff', color:' #fff', backgroundColor:'rgba(129, 123, 123, 0.158) '}}>Video Editing</div>
        </div>
      </div>

    </div>
</section>
<section class="footer">
    <div class=" container2 py-5">
      <div><h2 class="text-light py-1">Portfolio</h2></div> 
      <div><p class="text-light py-3 Copyright">Let's build something amazing together! Creating beautiful user-centric design that solve real-world problems</p></div> 
      <div>
        <div class="icon1 ">
          <div class="icons"><i class="bi bi-instagram"></i></div>
          <div class="icons"><i class="bi bi-facebook"></i></div>
          <div class="icons"><i class="bi bi-linkedin"></i></div>
          <div class="icons"><i class="bi bi-twitter-x"></i></div>
        </div>
      </div> 
      <div class="line py-3"></div>
      <div><h5 class="text-light py-3 Copyright">Copyright Portfolio All Right Reserved</h5></div>
    </div>
  </section>
        </div>
    )
}
export default Aboutpage;
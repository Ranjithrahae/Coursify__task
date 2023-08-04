
import './App.css';
import logo from './logo.jpg'
import sengineer from './softwareengineer.jpg'
import datascience from './dataScientist.jpg'
import Computerlab from './computer-lab.jpg'
import image1 from './companylogos (1).svg'
import image2 from './companylogos (2).svg'
import image3 from './companylogos (3).svg'
import image4 from './companylogos (4).svg'
import image5 from './companylogos (5).svg'
import image6 from './companylogos (6).svg'
import image7 from './companylogos (7).svg'
import image8 from './companylogos (8).svg'
import image9 from './companylogos (9).svg'
import image10 from './companylogos (10).svg'


function HeroHeader() {
  const imageUrls = [
  image1,image2,image3,image4,image5,image6,image7,image8,image9,image10
  ];
  return (
    <div className="App">
     
       <nav className="nav-bar">
       <div className=" mx-5 h-fit-content"><img className="logo" src={logo}/></div>
        <li className="nav-list mx-2">
      <li className="navbutton">  <a href='#Aboutus'>Jobs</a></li>
      <li className="navbutton">  <a href='#Aboutus'>Employers</a></li>
      <li className="navbutton">  <a href='#Aboutus'>How it works</a></li>
      <li className="navbutton">  <a href='#footer'>AboutUs</a></li>
      <li className="navbutton">  <a href='#footer'>Contact</a></li>
        </li>
        <div className='menu'>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
        </div>
       </nav>     
     <div id="demo" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  </div>
  <div className="carousel-inner">
    {/* <div className="carousel-item active">
      <img src={pmanager} alt='product manager' className="d-block" style={{width:"100%"}}/>
      <p className="descript"> Are You <br/>Product Manager ?</p>
  </div> */}
    <div className="carousel-item active">
      <img src={sengineer} alt="Chicago" className="d-block" style={{width:"100%"}}/>
       <p className="descript"> Are You <br/>Software Engineer ?</p>
    </div>
    <div className="carousel-item">
      <img src={datascience} alt="New York" className="d-block" style={{width:"100%"}}/>
      <p className="descript"> Are You <br/>Data Scientist ?</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
  


    <section id="Aboutus">
    <div className="container tech-heading">
  <h3 className='fw-bold  text-center'>More than 10,000 top companies</h3>
  <p className='fs-4 lh-2 text-center'>Let leading technology companies to hire you</p>
</div>
    <div className='marquee-logos my-3'> 
    <marquee className="d-flex justify-content-around"> {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className='logos' />
        ))} </marquee> 
        </div>


<div className='employees  container'>
<h1 className='fw-bold'>Find your next job effortlessly</h1>
<div className=' employees-content'>
  <div className='my-3'><img className='w-50' src={Computerlab}/>
  </div>
  <div ><p className='my-3 fs-5 custom-justify'>
  Say goodbye to cover letters - your profile is all you need.<b> One click to apply </b>and you're done.
  You deserve better than spammy job boards.
In less than 5 mins, get matched to just the right opportunities you want. 
Connect with the actual hiring teams and get super fast responses back</p>
<button className='btn btn-success'>Apply for Job</button>
</div>
</div>

</div>

<div className='employer container'>
  <h1 className='fw-bold'>Hire the top tech talents</h1>
  <div className='employer-content'>
  <div><p className='my-3 fs-5 custom-justify'>
  Everything you need to kickstart your recruiting - get job posts, company branding, 
  and HR tools set up within 10 minutes, for free
    Cutshort is the <b>#1 tech hiring </b>platform. Connect with top talent,
   engage with them and close positions to execute your vision, faster.</p>
   <button className='btn btn-success'>Hire top talent</button>
   </div>
  <div className='d-flex justify-content-end my-3'><img className='w-50 cm-lab two' src={Computerlab}/></div>
</div>
</div>
    </section>

    <section id="footer">
    <div className="footer-flex w-100 justify-content-around my-5">
        <div className="footer-block-content">
                       
                        <h4>Jobs by Location</h4>
                            <li><a className="navbutton" href="/jobs-in-bangalore/">Jobs in Bangalore</a></li>
                            <li><a className="navbutton" href="/jobs-in-delhi-ncr/">Jobs in Delhi / NCR</a></li>
                            <li><a className="navbutton" href="/jobs-in-hyderabad/">Jobs in other parts of India</a></li>
                            <li><a className="navbutton" href="/jobs-in-mumbai/">Jobs in Abroad</a></li>
                </div>
                    <div className="footer-block-wrap">
                        <h4>Jobs by Function</h4>
                        <div className="footer-block-content">
                            <li><a className="navbutton" href="/software-engineering-jobs/">Software Engineering</a></li>
                            <li><a className="navbutton" href="/marketing-jobs/">Product Manager</a></li>
                            <li><a className="navbutton" href="/sales-and-business-jobs/">Data Science</a></li>
                    </div>
                </div>
                    <div className="footer-block-wrap">
                        <h4>For Employers</h4>
                        <div className="footer-block-content">
                            <li><a  className="navbutton" >Post Your Jobs</a></li>
                            <li><a  className="navbutton"  target="_blank">Success Stories</a></li>
                            <li><a  className="navbutton" target="_blank">Resources</a></li>
                        </div>
                </div>
                    <div className="footer-block-wrap">
                        <h4 className="footer-block-heading">Instant hire</h4>
                        <div className="footer-block-content">
                            <li><a className="navbutton"href="/about/">About</a></li>
                            <li><a className="navbutton"href="/privacy/">Privacy</a></li>
                            <li><a className="navbutton"href="/terms/">Terms</a></li>
                        </div>
                  
                </div>
                <div className="footer-connect footer-block">
                    <div className="footer-block-wrap">
                        <h4 className="footer-block-heading navbutton">Connect</h4>
                        <div className="footer-block-content">
                            <li><a className="navbutton" href="#" target="_blank">Help Center</a></li> 
                                <li><a className="navbutton" >Contact Us</a></li>
                            
                            
                        </div>
                    </div>
                </div>     
           </div>
</section>
  </div>
  );
}

export default HeroHeader;

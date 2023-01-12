import React from 'react';
// import Logo from '../assets/SJlogo.jpg';
import bgabout from '../assets/bgabout.jpg';
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'



const About = () => {
  return (
    <>
    <Navbar/>
   <div  

   name='about' className='w-full' style={{margin: "50px 0px", height:"fit-content", backgroundImage:`url(${bgabout})`, backgroundRepeat: "no-repeat",
   backgroundAttachment: "absolute",  backgroundPosition: "center"}}>
  
    
  
   <div className='items-center justify-center' style={{textAlign : "center"}}>
    <div className='mt-2' style={{display: "flex",
justifyContent: "center", }}>
    {/* <img className='rounded-xl' src={Logo} alt='Logo' style={{ width: '70px'}} /> */}
    </div>

    <div className='mt-8'>
    <h1 className='text-5xl'> About Us</h1>
    </div>
    <div className='mt-5'>
    <span className='text-xl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio quae saepe 
    </span>
    <br />
    <span className='text-xl'>Lorem, ipsum dolor.</span>
    <br />
    <span className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque</span>
    <br />
    <span className='text-xl'>Lorem ipsum</span>
    </div>

    <div className='mt-16'>
      <h1 className='text-3xl'>Vision</h1>
      <div  className='mt-5'>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur..</span>
    </div>
    </div>

    <div  className='mt-16'>
    <h1 className='text-3xl'>Mission</h1>
    <div  className='mt-5'>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae fugit rerum consectetur!</span>
      <br />
      <span>Lorem, ipsum dolor.</span>
    </div>

    </div>

    <div className='mt-16'>
      <div>
      <h1 className='text-3xl'>Who are we?</h1>
      <div  className='mt-5'>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit.</span>
        <br />
        <span> Lorem ipsum dolor sit, amet consectetur adipisicing.</span>
        <br/>
        <span>Lorem ipsum dolor sit amet..</span>
     
      </div>
      </div>


     
    </div>
    </div>
    </div>
  <Footer />
  
    </>
  );
};

export default About;
// import { FullPageChat } from "flowise-embed-react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { React } from 'react';
// import Fade from "react-reveal";
import { Link } from 'react-router-dom';
import '../App.css';
import img2 from '../images/CatNutrition.jpg';
import img1 from '../images/young-female-entrepreneur-works-from-home-office-sitting-her-laptop-with-her-dog-by-her-side-created-with-generative-ai-technology_132358-12174.jpg.avif';
import './Home.css';




const Home = () => {

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.type = 'module';
    //     script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    //     script.async = true;
    //     script.onload = () => {
    //         window.Chatbot.initFull({
    //             chatflowid: "74168cdd-c1b0-4c74-b815-f52bd8660b2d",
    //             apiHost: "https://fw.telaeris.com",
    //         });
    //     };
    //     document.body.appendChild(script);

    //     // Cleanup function to remove the script when component unmounts
    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    
  return (
    <div>
    <div className='hero-container'>
      {/* <image src={pet} alt="pet" /> */}
      {/* <Fade bottom> */}
      <h1>TAIL TALK ADVISORY</h1>
      {/* </Fade> */}
      {/* <Fade bottom duration={1200}> */}
      <p><i>Welcome to your pet solution stop: Where solutions are just a chat away!</i></p>
      <p><i>Fluent in furry, ready to assist!</i></p>
      {/* </Fade> */}
      {/* <div className='hero-btns'> */}
      <br></br>
      {/* <Fade bottom duration={2000}> */}
      <MDBBtn color='white' className='offering'>
    <Link to="/AI" className="text-decoration-none text-dark">
        <b>Chat Now</b>&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
    </Link>
</MDBBtn> 
{/* </Fade>      */}
      {/* </div> */}
    </div>

    {/* <div><flowise-fullchatbot></flowise-fullchatbot></div> */}
  
   
      
     {/* Motivation section */}
     <div className='motivation-container'>
        <h2><b>Motivation for Our Project</b></h2>
        <p>
        Our motivation for creating this chatbot for pet parents and young veterinary professionals stems from our own experiences as pet owners. We understand the desire to seek quick answers to small behavioral queries without necessarily wanting to incur the expense of consulting a professional for every little concern. As pet lovers ourselves, we often find ourselves turning to Google for guidance, but we recognize the limitations and uncertainties associated with online information. Therefore, we aim to provide a convenient and accessible platform where individuals can seek advice and information regarding their pets' behavior and well-being.           </p>
        <p>
        However, it's important to note that while our chatbot can offer insights and suggestions based on common knowledge and experiences, we do not claim to be medical professionals. We strongly advise pet owners to seek a second opinion from a qualified veterinary professional for any concerns regarding their pets' health or behavior. Our ultimate goal is to empower pet parents and young veterinary professionals with reliable resources while prioritizing the well-being and safety of our beloved animal companions.          </p>
        {/* <p>As pet lovers ourselves, we understand the challenges of caring for pets and wanted to create a solution that makes pet care more accessible, convenient, and effective for everyone.</p> */}

        {/* You can add videos or additional images here */}
      </div>

    {/* About section */}
    <div className='about-container'>
  <div className="about-content">
    {/* <Fade left> */}
    <div className="about-card about-left animate">
      <div className="about-text">
        <h2>What We Do?</h2>
        <p>We provide innovative pet care solutions powered by AI technology, helping pet owners ensure the well-being of their furry friends.</p>
        {/* <img src={img1} alt="Left Image" className="about-image" /> */}
        <img src={img1} alt="Left Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      </div>
    </div>
    {/* </Fade> */}
    {/* <Fade right> */}
    <div className="about-card about-right animate">
      {/* <img src="your-right-image-url" alt="Right Image" /> */}
      <div className="about-text">
        <h2>How We Do It?</h2>
        <p>Our AI ChatBot analyzes pet data and behavior patterns to offer personalized recommendations for nutrition, exercise, health care, and more.</p>
        <img src={img2} alt="Right Image" className="about-image" />
      </div>
    </div>
    {/* </Fade> */}
  </div>
</div>

    </div>
  );
}

export default Home;

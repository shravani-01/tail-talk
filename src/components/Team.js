// import { FullPageChat } from "flowise-embed-react";
import { React } from 'react';
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../App.css';
import shra from '../images/shra_pic.png';
import simran from '../images/simran.jpeg';

import './Home.css';
import './Team.css';




const Team = () => {

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
    <div className='team-container'>
      {/* <h1>TEAM WORK MAKES THE DREAM WORK.</h1> */}
     
    </div>
    <div>
      <h2 className='team-header'>Meet the Team</h2>
    </div>

    {/* <div><flowise-fullchatbot></flowise-fullchatbot></div> */}
  
   
    {/* Team members section */}
    {/* <div className="container"> */}
    
{/*      
      <Row className="align-items-center content teamintro my-4">
      <Col md={6} className="text-center order-md-2">
      <div className='about-container'>
  <div className="about-content">
    
    <div className="about-card about-left animate">
      <div className="about-text">
        <h2>Shravani Hariprasad</h2>
        <div className='profile-icons'>
                <Link
                  className='social-icon-link linkedin'
                  to='/'
                  target='_blank'
                  aria-label='Linked In'
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link
                  className='social-icon-link github'
                  to='/'
                  target='_blank'
                  aria-label='GitHub'
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
              </div>
        {/* <p>We provide innovative pet care solutions powered by AI technology, helping pet owners ensure the well-being of their furry friends.</p> */}
        {/* <p className="lead">
                Inspired by my beloved guinea pigs, I created an AI application for pet care. Luna's passing due to pneumonia motivated me to develop a tool that could provide real-time support for pet owners.
              </p>
              <p className="lead">
                I trained LLMs, implemented the RAG approach, and built a responsive and interactive website using React.js.
              </p>
              <p className="lead">
                Outside of tech, I enjoy sketching, exploring art, and dancing. These creative outlets not only fuel my work but also add a unique perspective to my projects.
              </p> */}
        {/* <img src={img1} alt="Left Image" className="about-image" /> */}
        {/* <img src={img1} alt="Left Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}

      {/* </div>
    </div>
    </div>
    </div>
    </Col>
    <Col md={6} className="text-center order-md-1">
        <div className="row justify-content-center">
            <div className="col-10 col-lg-6 profilepic">
                <img className="img-fluid w-60 " src={shra} alt="" />
            </div>
        </div>
    </Col>
</Row> */} 



<Row className="align-items-center content teamintro my-4">
<Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Shravani Hariprasad</h2>
                        <br></br>
                        {/* <br></br> */}
                        <img src={shra} alt="Right Image" className="about-image shravaniimg" />
                        <br></br>
                        <br></br>
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='https://www.linkedin.com/in/shravani-hariprasad-507280177/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='https://github.com/shravani-01'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                        {/* <p className="lead">
                            Inspired by my beloved guinea pigs, I created an AI application for pet care. Luna's passing due to pneumonia motivated me to develop a tool that could provide real-time support for pet owners.
                        </p>
                        <p className="lead">
                            I trained LLMs, implemented the RAG approach, and built a responsive and interactive website using React.js.
                        </p> */}
                        {/* <img src={shra} alt="Right Image" className="about-image shravaniimg" /> */}
                    </div>
                </div>
            </div>
        </div>
    </Col>

    <Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Sharanya Akkone</h2>
                        <br></br>
                        {/* <br></br> */}
                        <img src={shra} alt="Right Image" className="about-image shravaniimg" />
                        <br></br>
                        <br></br>
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='/'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                        {/* <p className="lead">
                            Inspired by my beloved guinea pigs, I created an AI application for pet care. Luna's passing due to pneumonia motivated me to develop a tool that could provide real-time support for pet owners.
                        </p>
                        <p className="lead">
                            I trained LLMs, implemented the RAG approach, and built a responsive and interactive website using React.js.
                        </p> */}
                        {/* <img src={shra} alt="Right Image" className="about-image shravaniimg" /> */}
                    </div>
                </div>
            </div>
        </div>
    </Col>

    <Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Simran Solanki</h2>
                        <br></br>
                        {/* <br></br> */}
                        <img src={simran} alt="Right Image" className="about-image shravaniimg" />
                        <br></br>
                        <br></br>
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='/'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                        {/* <p className="lead">
                            Inspired by my beloved guinea pigs, I created an AI application for pet care. Luna's passing due to pneumonia motivated me to develop a tool that could provide real-time support for pet owners.
                        </p>
                        <p className="lead">
                            I trained LLMs, implemented the RAG approach, and built a responsive and interactive website using React.js.
                        </p> */}
                        {/* <img src={shra} alt="Right Image" className="about-image shravaniimg" /> */}
                    </div>
                </div>
            </div>
        </div>
    </Col>
</Row>



    </div>
  );
}

export default Team;

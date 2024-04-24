import React from 'react';
// import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import rag from '../images/RAGApproach.png';
import chatscreenshot1 from '../images/chatscreenshot1.png'; // Import screenshots
import chatscreenshot2 from '../images/chatscreenshot2.png'; // Import screenshots

import chatscreenshot3 from '../images/chatscreenshot3.png'; // Import screenshots
import chatscreenshot4 from '../images/chatscreenshot4.png'; // Import screenshots
import chatscreenshot5 from '../images/chatscreenshot5.png'; // Import screenshots
import chatscreenshot6 from '../images/chatscreenshot6.png'; // Import screenshots
import chatscreenshot7 from '../images/chatscreenshot7.png'; // Import screenshots
import chatscreenshot8 from '../images/chatscreenshot8.png'; // Import screenshots
import chatscreenshot9 from '../images/chatscreenshot9.png'; // Import screenshots



import './RAG.css';

const RAG = () => {
    return (
        <div>
            <div className='rag-container'>
                {/* <Fade duration='1000' > */}
                    <h1 className='topic'>RAG</h1>
                {/* </Fade> */}
            </div>
            <div className='exp-container'>
                <h2>What is RAG?</h2>
                <p>
                    RAG, short for Retrieval-Augmented Generation, represents a cutting-edge approach in natural language processing (NLP) that combines the strengths of both retrieval-based and generation-based models. This innovative framework aims to address the limitations of traditional NLP systems by integrating retrieval and generation mechanisms, allowing for more accurate, relevant, and contextually appropriate responses.
                </p>
                <p>
                    In RAG, the retrieval component efficiently selects relevant information from a large knowledge base or corpus of text, while the generation component produces fluent and contextually relevant responses based on the retrieved information. By leveraging the strengths of both approaches, RAG can generate responses that are not only coherent and fluent but also factually accurate and contextually grounded.
                </p>
            </div>

            <div className='workflow'>
                {/* Workflow Flowchart */}
                <Row className="align-items-center content">
                    <Col className="text-center mx-auto">
                        <br></br>
                        <img className="img-fluid" style={{ width: '70%' }} src={rag} alt="Workflow Flowchart" />
                        <br></br>
                    </Col>
                </Row>
            </div>

            <div className='results'>
                {/* Results Section */}
                <h2 className="text-center">Results &nbsp;<i class="fa-brands fa-rocketchat"></i></h2>
                <div className="chat-screenshots">
                    {/* Chatbot's Questions and Responses Screenshots */}
                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot1} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>
                    <div className="chat-screenshot">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot2} alt="Chatbot Screenshot 2" />
                    </div>
                    <br></br>
                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot3} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>

                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot4} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>

                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot5} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>
                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot6} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>
                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot7} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>
                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot8} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>
                    <div className="chat-screenshot ">
                        <img className="img-fluid" style={{ maxWidth: '95%', height: 'auto' }} src={chatscreenshot9} alt="Chatbot Screenshot 1" />
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default RAG;

import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
// import Fade from "react-reveal";
import llms from '../images/LLMs.jpeg';
import gpt3img from '../images/gpt3img.png';
import llamaimg from '../images/llamaimg.png';
import mistralimg from '../images/mistralimg.webp';

import './LLM.css';
import './RAG.css';


const RAG = () => {

        const [showDropdown, setShowDropdown] = useState(false);
      
        const toggleDropdown = () => {
          setShowDropdown(!showDropdown);
        };

    return (
        <div>


    <div className='rag-container'>
        {/* <Fade bottom> */}
      <h1 className='topic'>LLMs</h1>
      {/* </Fade> */}
      
    </div>
    <div className='exp-container'>
      <h2>What are LLMs?</h2>
      <p>
        LLMs, or Large Language Models, are a class of artificial intelligence (AI) models that have revolutionized natural language processing (NLP) tasks. These models are designed to understand and generate human-like text based on vast amounts of training data.
      </p>
      <p>
        At their core, LLMs are deep learning models that use a neural network architecture to process and generate text. They are trained on large datasets containing billions of words from diverse sources such as books, articles, websites, and more. The training process involves exposing the model to this vast amount of text data and teaching it to understand the nuances of language, including grammar, semantics, and context.
      </p>
      <p>
        One of the key features of LLMs is their ability to generate coherent and contextually relevant text. By leveraging the patterns and structures present in the training data, LLMs can generate text that mimics human writing to a remarkable degree. This capability has led to various applications across multiple domains, including language translation, text summarization, question answering, and more.
      </p>
      <br></br>
      <div className="dropdown-container">
        <button className="dropdown-exp-toggle" onClick={toggleDropdown}>
          {showDropdown ? 'Hide Details' : 'Read More'}
        </button>
        {showDropdown && (
            
          <div className="dropdown-exp-content">
            
            <Row className="align-items-center content huggingfaceintro">
            <Col md={6} className="order-md-2">
            {/* <Fade right> */}
              <img className="img-fluid w-100" src={llms} alt="" />
              {/* </Fade> */}
            </Col>
            <Col md={6} className="text-center order-md-1">
                <div className="row justify-content-center first-content">
                    <div className="col-10 col-lg-8 blob mb-5 mb-md-0 parts">
                        <br></br>
                    <h3>Here's how LLMs contribute to creating a chatbot:</h3>
            <ul>
                {/* <Fade top> */}
              <li>1. Understanding Natural Language</li>
              {/* </Fade> */}
              {/* <Fade top duration={5000}> */}
              <li>2. Generating Responses</li>
              {/* </Fade> */}
              {/* <Fade top={2000}> */}
              <li>3. Personalization and Context</li>
              {/* </Fade> */}
              {/* <Fade top={2800}> */}
              <li>4. Handling Complex Queries</li>
              {/* </Fade> */}
              {/* <Fade top={3600}> */}
              <li>5. Continuous Learning</li>
              {/* </Fade> */}
              <br></br>
            </ul>
                    </div>
                </div>
            </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
    
    {/* Cards section */}
    <div className='about-container'>
        {/* <Fade bottom> */}
        <h3 className='cards-h3'>LLM models chosen for evaluation</h3>
        {/* </Fade> */}
        <br></br>
        {/* <Fade bottom duration={1200}> */}
  <div className="about-content">
    <div className="about-card about-left animate">
      <div className="about-text">
        <h2>LLAMA</h2>
        <p>

        The LLAMA (Large Language Model Meta AI) model, developed by Meta AI, represents a breakthrough in natural language processing (NLP) technology. It belongs to the family of autoregressive large language models (LLMs), which are designed to understand and generate human-like text based on extensive training data. LLAMA leverages advanced techniques in machine learning and deep neural networks to comprehend the nuances of language, enabling it to provide sophisticated responses to queries and tasks. Its release in February 2023 marked a significant advancement in the field of NLP, opening up new possibilities for AI-driven applications and solutions.            </p>
        <img src={llamaimg} alt="LLAMA Image" />
      </div>
    </div>
    <div className="about-card about-middle animate">
      <div className="about-text">
        <h2>GPT-3</h2>
        <p>
        GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing model developed by OpenAI. It represents the latest iteration in the GPT series of models, known for their exceptional ability to generate coherent and contextually relevant text. GPT-3 leverages a transformer architecture and is pre-trained on vast amounts of text data, allowing it to understand and produce human-like text across a wide range of tasks and domains. Its development by OpenAI has propelled the field of natural language processing forward, enabling breakthroughs in areas such as conversational AI, content generation, and language understanding.</p>
        <img src={gpt3img} alt="GPT-3 Image" />
      </div>
    </div>
    <div className="about-card about-right animate">
      <div className="about-text">
        <h2>Mistral</h2>
        <p>
        Mistral AI, a French company founded in April 2023 by former Meta Platforms and Google DeepMind employees, has quickly made its mark in the AI industry. With a €385 million funding round in October 2023 and a valuation exceeding $2 billion by December of the same year, Mistral AI focuses on developing and selling open-source AI products. They advocate for open-source models, releasing two models as open-source weights and offering three more via API access. This approach reflects their commitment to democratizing AI and fostering collaboration in the field.</p>
        <img src={mistralimg} alt="Mistral Image" />
      </div>
    </div>
  </div>
  {/* </Fade> */}
</div>


           {/* <div className='workflow'>
           <br></br>
            {/* Include a flowchart to explain the workflow */}
            {/* <img src={rag} alt="Workflow Flowchart" /> */}
            {/* <Row className="align-items-center content">
    <Col className="text-center mx-auto">
        <img className="img-fluid" style={{ width: '70%' }} src={rag} alt="Workflow Flowchart" />
    </Col>
</Row>
<br></br>
</div>  */}


         

            
            {/* Other sections and content as needed */}
        </div>
    );
};

export default RAG;

import ParticlesBg from "particles-bg";
// import React from "react";
import React, { useState } from 'react';
import { Carousel, Col, Collapse, Row } from "react-bootstrap";
import llm from '../images/LLM-Preprocessing-1.jpg';
import book1 from '../images/books/Book1.png';
import book2 from '../images/books/Book2.png';
import book3 from '../images/books/Book3.png';
import book4 from '../images/books/Book4.png';
import wf from '../images/embeddings/openaiembed.webp';
import openai from '../images/what-is-openai.webp';



import './Data.css';

const Data = () => {

    const [expandedItems, setExpandedItems] = useState([]);

    const toggleExpand = (index) => {
        if (expandedItems.includes(index)) {
            setExpandedItems(expandedItems.filter((item) => item !== index));
        } else {
            setExpandedItems([...expandedItems, index]);
        }
    };


  return (
    <div>
      <header>
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            {/* <Fade bottom> */}
              <h1 className="responsive-headline">Data</h1>
            {/* </Fade> */}
            {/* <Fade bottom duration={1200}> */}
              <h2><i>"Without data, you're just another person with an opinion."</i></h2>
              <h2><i>~ W. Edwards Deming, Statistician</i></h2>
            {/* </Fade> */}
            <hr />
            {/* <Fade bottom duration={2000}> */}
              <ul className="social">
                <li className="button btn project-btn">
                  <a href="#ourdata">
                  <i class="fa-solid fa-database"></i>Data
                  </a>
                </li>
                {/* <li className="button btn github-btn">
                  <a href="#ourdata">
                  <i class="fa-brands fa-github"></i>Github
                  </a>
                </li> */}
              </ul>
            {/* </Fade> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="/tail-talk/#/data/#/#ourdata">
            <i className="fa-solid fa-circle-arrow-down"></i>
          </a>
        </p>
      </header>

      {/* overview section */}
      <div className='overview-container' id="ourdata">
        <h2>Dataset Overview</h2>
        <p>The dataset comprises a diverse collection of PDF files gathered from various sources, covering a wide array of topics and subjects. Ranging from academic papers to industry reports, user manuals to research studies, the dataset offers a rich reservoir of textual information encapsulated within PDF documents. Within this dataset, you'll find a rich diversity of content, reflecting the multifaceted nature of human knowledge and information. Each PDF file contains unique insights, analyses, and narratives, contributing to a holistic understanding of the subjects they cover. From scientific breakthroughs to historical archives, technical specifications to literary works, the dataset spans an extensive spectrum of domains and disciplines.</p>
    </div>
        {/* carousel section */}
        <Carousel>
        <Carousel.Item>
            <div className='about-container'>
                <div className="about-content">
                <div className="about-card about-left animate">
                    <div className="about-text">
                    {/* <h2>Book 1</h2>
                    <p>We provide innovative pet care solutions powered by AI technology, helping pet owners ensure the well-being of their furry friends.</p> */}
                    <img src={book1} alt="Left Image" />

                    </div>
                </div>
                <div className="about-card about-right animate">
                    {/* <img src="your-right-image-url" alt="Right Image" /> */}
                    <div className="about-text">
                    {/* <h2>How We Do It?</h2>
                    <p>Our AI ChatBot analyzes pet data and behavior patterns to offer personalized recommendations for nutrition, exercise, health care, and more.</p> */}
                    <img src={book2} alt="Left Image" />
                    </div>
                </div>
                </div>
            </div>

        </Carousel.Item>
        <Carousel.Item>
            <div className='about-container'>
                <div className="about-content">
                <div className="about-card about-left animate">
                    <div className="about-text">
                    {/* <h2>Book 1</h2>
                    <p>We provide innovative pet care solutions powered by AI technology, helping pet owners ensure the well-being of their furry friends.</p> */}
                    <img src={book3} alt="Left Image" />

                    </div>
                </div>
                <div className="about-card about-right animate">
                    {/* <img src="your-right-image-url" alt="Right Image" /> */}
                    <div className="about-text">
                    {/* <h2>How We Do It?</h2>
                    <p>Our AI ChatBot analyzes pet data and behavior patterns to offer personalized recommendations for nutrition, exercise, health care, and more.</p> */}
                    <img src={book4} alt="Left Image" />
                    </div>
                </div>
                </div>
            </div>

        </Carousel.Item>
        
        </Carousel>



        {/* side to side description section */}
        {/* </section> */}


        {/* <!-- Where to start --> */}
        <section >
        <div id="where-to-start" className="data-preprocessing-section" bg={true}>
            <br></br>
      {/* <Container> */}
        <h1 className="section-title"><b>Data Preprocessing</b></h1>
        <br></br>
        {/* <h2 className="section-description">Let's discuss the steps involved in data preprocessing...</h2> */}
        <br></br>
        <br></br>
       
      {/* </Container> */}

      <div className="container-fluid alt-part">
    <Row className="align-items-center content huggingfaceintro">
        <Col md={6} className="order-md-2">
            <img className="img-fluid w-100" src={openai} alt="" />
        </Col>
        <Col md={6} className="text-center order-md-1">
            <div className="row justify-content-center first-content">
                <div className="col-10 col-lg-8 blob mb-5 mb-md-0 parts">
                   
                    <h2>Open AI Embeddings </h2>
                    <h2>(RAG Approach)</h2>
                    <hr></hr>
                    <p className="lead">
                    OpenAI embeddings are dense numerical representations of text generated by cutting-edge language models, facilitating efficient analysis and understanding of textual data across multiple languages and domains.                    </p>
                </div>
            </div>
        </Col>
    </Row>
    <br></br>
    <br></br>
    <br></br>
    <Row className="align-items-center content">
    <Col className="text-center mx-auto">
        <img className="img-fluid w-55" src={wf} alt="" />
    </Col>
</Row>
<br></br>
<br></br>
<div className="data-processing-steps">
    <div className="row">
    {/* <div className="col-md-0.8"></div> */}
    {/* <Fade left > */}
        <div className="col-md-3">
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(0)}>
                            <strong className="card-title">Loading PDF Documents</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(0) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(0)}>
                            <div className="card-body">
                                <p>This process involves retrieving PDF documents from our extensive repository.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade> */}
        <div className="col-md-1"><p className="arrow arrow1"><i className="fa-solid fa-right-long"></i></p></div>
        {/* <Fade left duration={1200}> */}

        <div className="col-md-3">
            {/* <p className="arrow"><i className="fa-solid fa-down-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(1)}>
                            <strong className="card-title">Text Segmentation</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(1) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(1)}>
                            <div className="card-body">
                                <p>Employing advanced text processing techniques, we segment these documents into smaller, more manageable chunks.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade > */}

        <div className="col-md-1"><p className="arrow arrow2"><i className="fa-solid fa-right-long"></i></p></div>
        {/* <Fade left duration={2000}> */}

        <div className="col-md-3">
            {/* <p className="arrow"><i className="fa-solid fa-down-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(2)}>
                            <strong className="card-title">Embedding Generation</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(2) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(2)}>
                            <div className="card-body">
                                <p>The segmented text chunks are transformed into dense numerical representations, or embeddings, utilizing cutting-edge language models such as Hugging Face's 'intfloat/multilingual-e5-large'.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade > */}

    </div>
    <p className="arrow arrow3"><i className="fa-solid fa-down-long"></i></p>
    <div className="row mt-4">
    <div className="col-md-4"></div>   
    {/* <Fade right duration={2800}> */}

    <div className="col-md-3">
            {/* <p className="arrow"><i className="fa-solid fa-left-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(4)}>
                            <strong className="card-title">Database Organization</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(4) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(4)}>
                            <div className="card-body">
                                <p>Finally, the embeddings are organized into a vector database using FAISS, facilitating rapid similarity search and clustering for enhanced data exploration.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade > */}

        <div className="col-md-1"><p className="arrow arrow1"><i className="fa-solid fa-left-long"></i></p></div>
        {/* <Fade top duration={3600}> */}

        <div className="col-md-3">
            {/* <p className="arrow"><i className="fa-solid fa-left-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(3)}>
                            <strong className="card-title">Semantic Meaning Capture</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(3) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(3)}>
                            <div className="card-body">
                                <p>These embeddings encapsulate the semantic meaning of the text, enabling efficient analysis and retrieval of relevant information.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade> */}

        </div>
        
    </div>
<br></br>
    {/* LLM Data Generation Section */}
    <Row className="align-items-center content huggingfaceintro">
        <Col md={6} className="order-md-2">
            <img className="img-fluid w-100 h-100 " src={llm} alt="" />
        </Col>
        <Col md={6} className="text-center order-md-1">
            <div className="row justify-content-center first-content">
                <div className="col-10 col-lg-8 blob mb-5 mb-md-0 parts">
                    <br></br>
                    <h2> Q&A Data Generation</h2>
                    <h2>(LLM Approach)</h2>
                    <hr></hr>
                    <p className="lead">
                    The data generation process utilizes the OpenAI API to gather information relevant to pet care, encompassing topics like nutrition, behavior, training, and overall well-being. By leveraging anonymization techniques and quality control measures, the dataset is refined and structured to train question-answering models effectively. This curated knowledge base serves as the foundation for empowering pet care AI chatbots, such as Tail Talk Advisory, in providing personalized and accurate guidance to pet parents.         </p></div>
            </div>
            <br></br>
        </Col>
    </Row>
    <br></br>
    <br></br>
    <div className="data-processing-steps">
    <div className="row">
    {/* <div className="col-md-0.8"></div> */}
    {/* <Fade left > */}
        <div className="col-md-3">
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(0)}>
                            <strong className="card-title">Convert PDFs to TXT File</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(0) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(0)}>
                            <div className="card-body">
                                <p>Convert the PDFs containing relevant information about pet care into one consolidated text file for processing.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade> */}
        <div className="col-md-1"><p className="arrow arrow1"><i className="fa-solid fa-right-long"></i></p></div>
        {/* <Fade left duration={1200}> */}

        <div className="col-md-3">
            {/* <p className="arrow"><i className="fa-solid fa-down-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(1)}>
                            <strong className="card-title">Preprocess and Clean Raw Text Data</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(1) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(1)}>
                            <div className="card-body">
                            Preprocess and clean the raw text data to remove any noise or irrelevant information, ensuring that the dataset is ready for further processing.                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade > */}

        <div className="col-md-1"><p className="arrow arrow2"><i className="fa-solid fa-right-long"></i></p></div>
        {/* <Fade left duration={2000}> */}

        <div className="col-md-3">
            {/* <p className="arrow"><i className="fa-solid fa-down-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(2)}>
                            <strong className="card-title">Utilize OpenAI API for Q&A Generation</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(2) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(2)}>
                            <div className="card-body">
                                <p>Utilize the OpenAI API to generate question and answer pairs from the preprocessed text data. This step involves sending the text data to the OpenAI API and receiving back the generated Q&A pairs.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade > */}

    </div>
    <p className="arrow arrow3"><i className="fa-solid fa-down-long"></i></p>
    <div className="row mt-4">
    <div className="col-md-3"></div>   
    {/* <Fade right duration={2800}> */}

    <div className="col-md-4">
            {/* <p className="arrow"><i className="fa-solid fa-left-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(4)}>
                            <strong className="card-title">Train Large Language Models (LLMs)</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(4) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(4)}>
                            <div className="card-body">
                                <p>Use the generated Q&A pairs as training data for large language models (LLMs) such as GPT-3, fine-tuning them on the specific task of pet care question-answering. This step involves training the models to understand and provide accurate responses to questions related to pet care.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade > */}

        <div className="col-md-1"><p className="arrow arrow1"><i className="fa-solid fa-left-long"></i></p></div>
        {/* <Fade top duration={3600}> */}

        <div className="col-md-3">
            {/* <p className="arrow"><i className="fa-solid fa-left-long"></i></p> */}
            <ul className="lead">
                <li className="step">
                    <div className="card zoom-on-hover">
                        <div className="card-header" onClick={() => toggleExpand(3)}>
                            <strong className="card-title">Generate Q&A Pairs from Text Data</strong>&nbsp;
                            <span className="expand-icon">
                                {expandedItems.includes(3) ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <Collapse in={expandedItems.includes(3)}>
                            <div className="card-body">
                                <p>Process the responses from the OpenAI API to extract the generated question and answer pairs.</p>
                            </div>
                        </Collapse>
                    </div>
                </li>
            </ul>
        </div>
        {/* </Fade> */}
        <br></br>

        </div>
        
    </div>

</div>



        </div>
{/* <br></br> */}




   
            </section>
      </div>
  );
}

export default Data;

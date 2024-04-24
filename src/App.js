import { default as React } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import AI from './components/AI';
import Analysis from './components/Analysis';
import Data from './components/Data';
import Footer from './components/Footer';
import Home from './components/Home';
import LLM from './components/LLM';
import NavBar from './components/NavBar';
import RAG from './components/RAG';
import Team from './components/Team';



const App = () => {
    return (
        <Router>
            <div className="app">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AI" element= {<AI />} />                  
                    <Route path="/data" element={<Data />} />
                    <Route path="/llm" element={<LLM approach="LLM" />} />
                    <Route path="/RAG" element={<RAG approach="RAG" />} />
                    <Route path="/Analysis" element={<Analysis />} />
                    <Route path="/team" element={<Team />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;



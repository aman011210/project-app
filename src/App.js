import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/Skills/Contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div style={
      {
        width:"100vw",
      }
    } >
      <Header/>
      <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>
    <Contact/>
    <Footer/>
      </main>
    </div>
  );
}

export default App;

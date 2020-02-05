import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import HomeSlider from './components/HomeSlider'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
// import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'


class App extends Component {

  render() {
    return (
      <div>
      <Navbar/>
      <HomeSlider/>
      <AboutMe/>
      <Skills/>
      {/* <Blog/> */}
      <Contact/>
      <Footer/>
      </div>
    );
  }
}

export default App;

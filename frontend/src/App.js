import React, { Component } from 'react';
import './App.css';
import './static/css/style.css'
import Navbar from './components/navbar/Navbar'
// import HomeSlider from './components/HomeSlider'
// import AboutMe from './components/AboutMe'
// import Skills from './components/Skills'
// import Blog from './components/Blog'
// import Contact from './components/Contact'
// import Footer from './components/Footer'



class App extends Component {
  state = {
    pages: null
  };

  componentWillMount() {
        console.log("Start data")
        fetch('http://172.17.0.2:8000/api/v1/pages/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ pages: data })
          console.log("Pages", this.state.pages)
        })
        .catch(console.log)
  }
  render() {
    return (
      <div>
      <Navbar pages={this.state.pages}/>
      
      {/* <HomeSlider/>
      <AboutMe/>
      <Skills/>
      {/* <Blog/> */}
      {/* <Contact/>
      <Footer/> */} 
      </div>
    );
  }
}

export default App;

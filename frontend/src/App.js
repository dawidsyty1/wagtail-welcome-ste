import React, { Component } from 'react';
import './App.css';
import './static/css/style.css'
import Navbar from './components/navbar/Navbar'
import HomeSlider from './components/HomeSlider'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesList from './components/ServicesList'


class App extends Component {
  state = {
    pages: null
  };

  renderAllPages(pages){
    if (pages === null) {
        return null;
    }

    let table  = pages.map((page) => {
       if(page.page_type === "welcomepage"){
          return <HomeSlider section={page.slug}/>
        } else if(page.page_type === "aboutpage") {
          return <AboutMe section={page.slug}/>
        } else if(page.page_type === "skillpage") {
          return <Skills section={page.slug}/>
        } else if(page.page_type === "contactpage") {
          return <Contact section={page.slug}/>
        }
       return ""        
    });
    return table
  }
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
      {this.renderAllPages(this.state.pages)}
      <Footer/> 
      </div>
    );
  }
}

export default App;

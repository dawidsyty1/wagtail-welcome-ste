import React, { Component } from 'react';

import './App.css';
import './static/css/style.css'
import './static/css/flaticon.css'
import './static/css/animate.css'
import Navbar from './components/navbar/Navbar'
import Welcome from './components/welcome/Welcome'
import AboutMe from './components/about/AboutMe'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Spinner from './components/spinner/Spinner'

class App extends Component {
  state = {
    pages: null,
    mounted:false
  };

  renderAllPages(pages){
    if (pages === null) {
        return null;
    }

    let table = pages.map((page) => {
       if(page.page_type === "welcomepage"){
          return <Welcome section={page.slug}/>
        } else if(page.page_type === "aboutpage") {
          return <AboutMe section={page.slug}/>
        } else if(page.page_type === "skillpage") {
          return <Skills section={page.slug}/>
        } else if(page.page_type === "contactpage") {
          return <Contact section={page.slug}/>
        }
       return ""        
    });
    table.push( <Navbar pages={this.state.pages}/>)
    table.push( <Footer/>)
    return table
  }
  componentWillMount() {
        console.log("Start data")
        fetch('http://172.17.0.2:8000/api/v1/pages/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ pages: data })
          this.setState({ mounted:true })
        })
        .catch(console.log("Eror"))
  };

  getPagesContent() {
    if(this.state.mounted === true) {
      return this.renderAllPages(this.state.pages)
    }
    return <Spinner/>;
  };


  render() {
    return (
      <div>
        {this.getPagesContent()}
      </div>
    );
  }
}

export default App;

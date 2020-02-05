import React, { Component } from 'react';
import '../static/css/style.css'
import '../static/css/flaticon.css'

const FooterTalkAbout = () => (

  <div class="col-md">
  <div class="ftco-footer-widget mb-4">
    <h2 class="ftco-heading-2">Lets talk about</h2>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
  </div>
  </div>
);

function FooterLinksList (props) { 

  function createLinksList (linkList) {
    let table  = linkList.map((link) =>
      <li><a href="/"><span class="icon-long-arrow-right mr-2"></span>{link}</a></li>
    );
    return table;
  };

	return (
    <div class="col-md">
      <div class="ftco-footer-widget mb-4 ml-md-4">
        <h2 class="ftco-heading-2">{props.title}</h2>
        <ul class="list-unstyled">
          {createLinksList(props.linkList)}
        </ul>
      </div>
    </div>
  );
};

const FooterQuestions = () => (
  <div class="col-md">
  <div class="ftco-footer-widget mb-4">
    <h2 class="ftco-heading-2">Have a Questions?</h2>
    <div class="block-23 mb-3">
      <ul>
        <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
        <li><a href="/"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
        <li><a href="/"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
      </ul>
    </div>
  </div>
</div>
);
  

class Footer extends Component {
  linkList = ["Github", "Linkedin"];
  linkServices = ["Web Design", "Web Development", "Business Strategy", "Data Analysis"];
  render() {
    return (
		<footer class="ftco-footer ftco-section">
      <div class="container">
        <div class="row mb-5">
          <FooterTalkAbout/>
          
          <FooterLinksList title="Links" linkList={this.linkList}/>
          <FooterLinksList title="Services" linkList={this.linkServices}/>

          <FooterQuestions/>


        </div>

        <div class="row">
          <div class="col-md-12 text-center">

        </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;

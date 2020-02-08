import React from 'react';
import aboutImage from '../../static/images/about.jpg'
import BaseSection from '../../containers/BaseSection'

const ContactIntroduction = () => (
  <div class="row justify-content-center mb-5 pb-3">
    <div class="col-md-7 heading-section text-center  ">
      <span class="subheading">Contact</span>
      <h2 class="mb-4">Contact Me</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    </div>
  </div>
);

const ContactForm = () => (
  <div class="col-md-6 order-md-last d-flex">
			
    <form action="#" class="bg-light p-4 p-md-5 contact-form">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Your Name"/>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Your Email"/>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Subject"/>
      </div>
      <div class="form-group">
        <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
      </div>
      <div class="form-group">
        <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
      </div>
    </form>  
    </div>
);

const ContactImage = () => (
  <div class="col-md-6 d-flex">
    <img class="img" src={aboutImage} alt="My Face"/>
  </div>
);

class Contact extends BaseSection {
  render() {
    return (
		<div class="container ftco-section contact-section ftco-no-pb" id={this.props.section}>
        <ContactIntroduction/>


        <div class="row no-gutters block-9">

            <ContactForm/>
            <ContactImage/>
        </div>
      </div>
	  
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import myImage from '../../static/images/bg_1.jpg'
import WelcomeText from './WelcomeText'

class Welcome extends Component {
  render(props) {
    return (	
		<div class="home-slider  owl-carousel" id={this.props.section}>
	      <div class="slider-item ">
	        <div class="container hero">
	          <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
	          	<img class="one-third order-md-last img" src={myImage} alt="My Face"/>
				  <WelcomeText className=""/>
	        	</div>
	        </div>
	      </div>
	    </div>
    );
  }
}

export default Welcome;

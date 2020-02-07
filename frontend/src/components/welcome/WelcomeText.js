import React, { Component } from 'react';

class WelcomeText extends Component {
  render() {
    return (
		  <div class="one-forth d-flex  align-items-center" data-scrollax=" properties: { translateY: '70%' }">
		 	<div class="text">
		 		<span class="subheading">Hello</span>
		 		<h1 class="mb-4 mt-3">I'm <span>Dawid Syty</span></h1>
		 		<h2 class="mb-4">A Software Developer</h2>
		 		<p><a href="#contact-section" class="btn-custom">Hire me</a></p>
		 	</div>
		 </div>
    );
  }
}

export default WelcomeText;

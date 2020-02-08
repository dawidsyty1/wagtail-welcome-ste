import React, { Component } from 'react';

class WelcomeText extends Component {
	render() {
		return (
			<div class="one-forth d-flex  align-items-center" data-scrollax=" properties: { translateY: '70%' }">
				<div class="text">
					<span class="subheading">
						{this.props.first_line}
					</span>
					<h1 class="mb-4 mt-3">
						{this.props.second_line}
					</h1>
					<h2 class="mb-4">
						{this.props.third_line}
					</h2>
					<p><a href="#contact-section" class="btn-custom">
						{this.props.button_name}
					</a></p>
				</div>
			</div>
		);
	}
}

export default WelcomeText;

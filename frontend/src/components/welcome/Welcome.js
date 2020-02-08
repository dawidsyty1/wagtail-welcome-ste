import React from 'react';

import BaseSection from '../../containers/BaseSection';

import myImage from '../../static/images/bg_1.jpg'
import WelcomeText from './WelcomeText'

class Welcome extends BaseSection {
	getComponent = () => {
		if (this.state.page_content !== null) {
			return (
				<div class="home-slider  owl-carousel" id={this.props.section}>
					<div class="slider-item ">
						<div class="container hero">
							<div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
								<img class="one-third order-md-last img" src={myImage} alt="My Face" />
								<WelcomeText className=""
									first_line={this.state.page_content.first_line}
									second_line={this.state.page_content.second_line}
									third_line={this.state.page_content.third_line}
									button_name={this.state.page_content.button_name}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return ""
	}
	render(props) {
		return this.getComponent()
	}
}

export default Welcome;

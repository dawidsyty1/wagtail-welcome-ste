import React from 'react';
import BaseSection from '../../containers/BaseSection';

import about_image from '../../static/images/about-1.jpg'

const AboutMeImage = () => (
	<div class="col-md-6 col-lg-5 d-flex">
		<div class="img-about img d-flex align-items-stretch">
			<div class="overlay"></div>
			<img class="one-third order-md-last img" src={about_image} alt="My Face" />
		</div>
	</div>
);

const AboutMeIntroduction = () => (
	<div class="row justify-content-start pb-3">
		<div class="col-md-12 heading-section ">
			<span class="subheading">Welcome</span>
			<h2 class="mb-4">About Me</h2>
			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		</div>
	</div>
);

function AboutMeServices(props) {
	return (
		<div class="col-md-6">
			<div class="media block-6 services d-block ">
				<div class="icon"><span class="flaticon-analysis"></span></div>
				<div class="media-body">
					<h3 class="heading mb-3">{props.title}</h3>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
};

function AboutMeFinishedProjects(props) {
	return (
		<div class="counter-wrap d-flex mt-md-3">
			<div class="text p-4 pr-5 bg-primary">
				<p class="mb-0">
					<span class="number" data-number="200">{props.value}</span>
					<span>Finished Projects</span>
				</p>
			</div>
		</div>
	);
};

class AboutMe extends BaseSection {

	getComponent = () => {
		return (
			<div class="container ftco-about ftco-counter img ftco-section" id={this.props.section}>
				<div class="row d-flex">
					<AboutMeImage />

					<div class="col-md-6 col-lg-7 pl-lg-5 py-5">
						<AboutMeIntroduction />

						<div class="row">

							<AboutMeServices title="Software Development"
								description="A small river named Duden flows by their place and supplies." />

							<AboutMeServices title="Web Application"
								description="A small river named Duden flows by their place and supplies." />

							<AboutMeFinishedProjects value="100" />
							

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;

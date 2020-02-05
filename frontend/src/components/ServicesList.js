import React, { Component } from 'react';
import '../static/css/style.css'
import '../static/css/flaticon.css'
import '../static/css/animate.css'

class Service extends Component {
	render() {
		return (
			<div class="col-md-4 text-center d-flex  ">
				<div class="services-1">
					<span class="icon">
						<i class={this.props.flaticon}></i>
					</span>
					<div class="desc">
						<h3 class="mb-5"><a href="/">{this.props.title}</a></h3>
						<h4>{this.props.firstLine}</h4>
						<h4>{this.props.secondLine}</h4>
						<h4>{this.props.thirdLine}</h4>
					</div>
				</div>
			</div>
		);
  	}
}
const ServicesList = () => (
	<div class="row">
		<Service flaticon="flaticon-analysis" title="Explore" firstLine="Information" secondLine="Design" thirdLine="Branding"/>
		<Service flaticon="flaticon-flasks" title="Create" firstLine="Information" secondLine="Design" thirdLine="Branding"/>
		<Service flaticon="flaticon-ideas" title="Learn" firstLine="Information" secondLine="Design" thirdLine="Branding"/>
	</div>
);

export default ServicesList;

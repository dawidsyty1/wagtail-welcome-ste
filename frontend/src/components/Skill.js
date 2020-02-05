import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../static/css/style.css'
import '../static/css/flaticon.css'
import '../static/css/animate.css'

class Skill extends Component {
	render() {
		return (
		<div class="col-md-6 animate-box">
			<div class="progress-wrap">
				<h3>{this.props.description}</h3>
					<ProgressBar now={this.props.progressValue}/>
			</div>
		</div>
		);
  	}
}

export default Skill;

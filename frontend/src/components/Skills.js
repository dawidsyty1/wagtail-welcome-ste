import React, { Component } from 'react';
import '../static/css/style.css'
import '../static/css/flaticon.css'
import Skill from '../components/Skill'
import ServicesList from '../components/ServicesList'

const SkillsIntroduction = () => (
	<div class="row justify-content-center pb-5">
		<div class="col-md-12 heading-section text-center  ">
			<span class="subheading">Skills</span>
			<h2 class="mb-4">My Skills</h2>
			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
		</div>
	</div>
);


const SkillsSummary = () => (
	<div class="row justify-content-center py-5 mt-5">
		<div class="col-md-12 heading-section text-center  ">
			<span class="subheading">What I Do</span>
			<h2 class="mb-4">Strategy, design and a bit of magic</h2>
			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
		</div>
	</div>
);

const SkillsList = () => (
	<div class="row">
		<Skill description="Software development" progressValue={70}/>
		<Skill description="Architecture" progressValue={70}/>
		<Skill description="Python" progressValue={70}/>
		<Skill description="React" progressValue={30}/>
		<Skill description="Cloud AWS/GCP" progressValue={30}/>
		<Skill description="Docker" progressValue={60}/>
	</div>
);


class Skills extends Component {
  render() {
    return (
		<div class="container ftco-about ftco-counter img ftco-section" id="skills-section">

			<SkillsIntroduction/>

			<SkillsList/>

			<SkillsSummary/>

			<ServicesList/>

		</div>
    );
  }
}

export default Skills;

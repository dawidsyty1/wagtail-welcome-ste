import React, { Component } from 'react';
import '../static/css/style.css'
import '../static/css/flaticon.css'
import image_1 from '../static/images/image_1.jpg'
import image_2 from '../static/images/image_2.jpg'
import image_3 from '../static/images/image_3.jpg'


class Blog extends Component {
  render() {
    return (
      <div class="container ftco-about ftco-counter img ftco-section" id="blog-section">
        <div class="row justify-content-center mb-5 pb-5">
          <div class="col-md-7 heading-section text-center  ">
            <span class="subheading">Blog</span>
            <h2 class="mb-4">Our Blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-md-4 d-flex  ">
          	<div class="blog-entry justify-content-end">
              {/* <a href="single.html" class="block-20" style="background-image: url('images/image_1.jpg');"> */}
              {/* </a> */}
              <img class="block-20" src={image_1} alt="My Face"/>
              <div class="text mt-3 float-right d-block">
              	<div class="d-flex align-items-center mb-3 meta">
	                <p class="mb-0">
	                	<span class="mr-2">March 23, 2019</span>
	                	<a href="/" class="mr-2">Admin</a>
	                	<a href="/" class="meta-chat"><span class="icon-chat"></span> 3</a>
	                </p>
                </div>
                <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex  ">
          	<div class="blog-entry justify-content-end">
              {/* <a href="single.html" class="block-20" style="background-image: url('images/image_2.jpg');"> */}
              {/* </a> */}
              <img class="block-20" src={image_2} alt="My Face"/>
              <div class="text mt-3 float-right d-block">
              	<div class="d-flex align-items-center mb-3 meta">
	                <p class="mb-0">
	                	<span class="mr-2">March 23, 2019</span>
	                	<a href="/" class="mr-2">Admin</a>
	                	<a href="/" class="meta-chat"><span class="icon-chat"></span> 3</a>
	                </p>
                </div>
                <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex  ">
          	<div class="blog-entry">
              {/* <a href="single.html" class="block-20" style="background-image: url('images/image_3.jpg');">
              </a> */}
              <img class="block-20" src={image_3} alt="My Face"/>
              <div class="text mt-3 float-right d-block">
              	<div class="d-flex align-items-center mb-3 meta">
	                <p class="mb-0">
	                	<span class="mr-2">March 23, 2019</span>
	                	<a href="/" class="mr-2">Admin</a>
	                	<a href="/" class="meta-chat"><span class="icon-chat"></span> 3</a>
	                </p>
                </div>
                <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;

import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {

    state={
         settings : {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
    }
    render() {
        
        return (
          <div>
           
            <Slider {...this.state.settings} >
				<div><img src='http://placekitten.com/g/400/200' /></div>
				<div><img src='http://placekitten.com/g/400/200' /></div>
				<div><img src='http://placekitten.com/g/400/200' /></div>
				<div><img src='http://placekitten.com/g/400/200' /></div>
				
			</Slider>
          </div>
        );
      }
}

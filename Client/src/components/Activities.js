import React, { Component } from 'react';
import '../App.css'; 
import Homeicon from './footer';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import {getActivities} from '../actions/activityAction';
import Comments from './comments';



class Activities extends Component {

    constructor(){
        super();
        this.state = {
            activities: []
        };
    }

    componentDidMount() {
        console.log(this.props.itineraryId)
        const itineraryId = this.props.itineraryId
        console.log('parrot',this.props);
       this.props.getActivities(itineraryId);
    };


 render(){
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    console.log(this.props)
    return(

        <div>
            <h4>ACTIVITIES</h4>
            <Slider  {...settings}>
                {this.props.myActivities.activities.map(activity =>{
                    return (
                    <div key={activity._id}>
                        <img className="activityPic" src={"/uploads/"+activity.activityPic} alt="activityPic"/>
                    </div>
                )

            })}

            </Slider>
            <Comments/>
        </div>
    );
 }
};

const mapStateToProps = (state) =>{
    return{
    myActivities: state.activities
 }
};

export default connect(mapStateToProps, {getActivities})(Activities);
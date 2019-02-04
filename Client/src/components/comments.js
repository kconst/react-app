import React, { Component } from 'react';
import '../App.css';
import { postComments } from '../actions/commentAction';
import { getComments } from '../actions/commentAction';
import { connect } from 'react-redux';
import send from '../images/descargas.png';

class comments extends Component{

    constructor(){
        super();
        this.state={
            comment:'',
            itinerary_id:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const itineraryId = this.props.itineraryId
        this.props.getComments(itineraryId)
        
    }
    
    handleChange(event){
        this.setState({
            comment:event.target.value, 
            itinerary_id: this.props.itineraryId //se ejecuta en cada pulsacion de la tecla que actualizar el estado
        })
    };

    handleSubmit(event){
        event.preventDefault();
        this.props.postComments(this.state)
    }
    
    render(){
        return(
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <h4>Comments</h4>
                    <input type="text" placeholder="Type your comment here" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="submit" value="submit"><img src={send} className="sendImg"/></button>
                </form>
                <div>
                {this.props.myComments.comments.map(comment =>{
                    return (
                        <div key={comment._id}>
                            {comment.comments}
                        </div>
                    )
                })}
              </div>  
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        myComments: state.comments
    }
};

export default connect(mapStateToProps, {postComments, getComments})(comments);
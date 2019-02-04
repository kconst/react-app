import React, { Component } from 'react';

class Member extends Component {
    render() {
      return (
        <div>
            <h1>esto viene del componente {this.props.titulo}</h1>
            <h2>{this.props.subtitulo}</h2>
        </div>
      );
    }
  }
  
  export default Member;

  
import React, { Component } from 'react';

export default class InputError extends Component{
  render(){
    if(this.props.errorVisible === true)
      return <div className='error-message'>{this.props.errorMessage}</div>
    else 
      return false
  }
}
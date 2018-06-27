import React, { Component } from 'react';
import InputError from './inputError';

export default class Input extends Component {

  constructor(props){
    super(props);
    this.state = {
      errorVisible: false,
      errorMessage: 'Error',
    }
  }

  componentWillReceiveProps(nextProps) {
    const { validate } = this.props;
    if(nextProps.validate === false){
      this.setState({
        errorVisible: true
      });
    }
    else{
      this.setState({
        errorVisible: false
      });
    }
  }

  render(){

    return(
      <div className="form-group">
        <span className="form-label">{this.props.label} : </span>
        <input className="form-input" type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} ref={this.props.refs}/><br/>
        <InputError
          errorMessage={this.state.errorMessage}
          errorVisible={this.state.errorVisible}
        />
      </div>
    )
  }
}
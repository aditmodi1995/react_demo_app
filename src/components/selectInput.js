import React, { Component } from 'react';

export default class SelectInput extends Component{

  render(){
    const { options } = this.props;
    const option = options.map((item, i) => {
      return(
        <option key={i} value={item}>{item}</option>
      )
    });
    return(
      <div><span className = "form-label">{this.props.label} : </span>
        <select className="form-input" name={this.props.name} onChange={this.props.onSelectChange}>
          {option}
        </select>
      </div>
    )
  }
}
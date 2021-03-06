import React, { Component } from 'react';
import Input from './input';
import SelectInput from './selectInput';
import { createPost } from '../actions/postAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Form extends Component {

  constructor(props){
    super(props);
    this.valid_name = true;
    this.valid_phone = true;
    this.valid_age = true;
    this.valid_emp_id = true;
    this.state = {
      name: '',
      emp_id: '',
      age: 0,
      dept: 'Software',
      phone: 0,
      gender: 'Male'
    }
  }

  onChange = (e) => {
    switch(e.target.name){
      case 'name':
        this.valid_name = this.validate(/^[A-Za-z0-9]+$/i, e.target.value) && e.target.value.length != 0;
        break;
      case 'emp_id':
        this.valid_emp_id = this.validate(/^[A-Za-z0-9]+$/i, e.target.value) && e.target.value.length != 0;
        break;
      case 'phone':
        this.valid_phone = this.validate(/^[0-9]+$/i, e.target.value) && e.target.value != 0;
        break;
      case 'age':
        this.valid_age = this.validate(/^[0-9]+$/i, e.target.value) && e.target.value != 0;
        break;
      default:
        break;
    }

    this.setState({
      [e.target.name] : e.target.value
    });
  }

  validate = (regex, text) =>{
    return regex.test(text);
  }

  onSubmit = (e) => {
    e.preventDefault();

    // if(this.valid_name && this.valid_age && this.valid_emp_id && this.valid_phone){
      let postData = {
        name: this.state.name,
        emp_id: this.state.emp_id,
        dept: this.state.dept,
        gender: this.state.gender,
        age: this.state.age,
        phone: this.state.phone
      }
  
      this.props.createPost(postData);
      // window.location.href = '/show';
    // }

  }

  render(){
    const dept_options = ['Software', 'Business_Analyst', 'Business_Developer'];
    const gender_options = ['Male', 'Female', 'Other'];
    return(
      <form className="employee-form">
        <Input
          label='Name' type='text' name='name'
          value={this.state.name}
          onChange={this.onChange}
          validate={this.valid_name}
        />
        <Input
          label='Employee ID' type='text' name='emp_id'
          value={this.state.emp_id}
          onChange={this.onChange}
          validate={this.valid_emp_id}
        />
        <Input
          label='Age' type='number' name='age'
          value={this.state.age}
          onChange={this.onChange}
          validate={this.valid_age}
        />
        <SelectInput
          label='Department' name='dept'
          options={dept_options}
          value={this.state.dept}
          onSelectChange={this.onChange}
        />
        <Input
          label='Phone' type='number' name='phone'
          value={this.state.phone}
          onChange={this.onChange}
          validate={this.valid_phone}
        />
        <SelectInput
          name='gender' label='Gender'
          options={gender_options}
          value={this.state.gender}
          onSelectChange={this.onChange}
        />
        <button className="btn btn-warning" onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}

const propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(Form);
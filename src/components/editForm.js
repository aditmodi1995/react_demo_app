import React, { Component } from 'react';
import Input from './input';
import SelectInput from './selectInput';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../actions/postAction';

class EditForm extends Component{

  constructor(props){
    super(props);
    this.valid_name = true;
    this.valid_phone = true;
    this.valid_age = true;
    this.valid_emp_id = true;
    this.dept_options = ['Software', 'Business_Analyst', 'Business_Developer'];
    this.gender_options = ['Male', 'Female', 'Other'];
    this.state = {
      showForm: false,
      id: 'id',
      name: 'name',
      emp_id: 'emp_id',
      age: 0,
      dept: 'software',
      phone: 0,
      gender: 'male'
    }
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.posts !== this.props.posts){
      this.updateOptions(nextProps.posts.dept, nextProps.posts.gender);
      console.log('dept:', this.dept_options, 'gender:', this.gender_options);
      this.setState({
        name: nextProps.posts.name,
        emp_id: nextProps.posts.emp_id,
        age: nextProps.posts.age,
        dept: nextProps.posts.dept,
        phone: nextProps.posts.phone,
        gender: nextProps.posts.gender
      });
    }
  }

  updateOptions = (dept, gender) => {
    if(dept != undefined && gender != undefined){
      let arr1 = [];
      let arr2 = [];
  
      this.dept_options.forEach((item, i) => {
        arr1[0] = dept;
        if(item != dept){
          arr1.push(item);
        }
      })
  
      this.gender_options.forEach((item, i) => {
        arr2[0] = gender;
        if(item != gender){
          arr2.push(item);
        }
      })
  
      this.dept_options = arr1;
      this.gender_options = arr2;
  
      return;
    }
  }

  onClick = () => {
    this.props.fetchPost(this.state.id);

    this.setState({
      showForm: true
    })
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
        this.valid_age = this.validate(/^[0-9]+$/i, e.target.value) && e.target.value != 0;;
        break;
      default:
        break;
    }
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate = (regex, text) =>{
    return regex.test(text);
  }

  onSubmit = (e) => {
    e.preventDefault();

    let postData = {
      name: this.state.name,
      emp_id: this.state.emp_id,
      dept: this.state.dept,
      gender: this.state.gender,
      age: this.state.age,
      phone: this.state.phone
    }

    this.props.editPost(postData, this.state.emp_id);

    this.setState({
      showForm: false,
      id: 'id',
      name: 'name',
      emp_id: 'emp_id',
      age: 0,
      dept: 'software',
      phone: 0,
      gender: 'male'
    })
  }

  renderForm = () => {
    return(
      <div>
        <form>
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
            onChange={this.onChange}
            value={this.state.age}
            validate={this.valid_age}
          />
          <SelectInput
            label='Department' name='dept'
            options={this.dept_options}
            onSelectChange={this.onChange}
          />
          <Input
            label='Phone' type='number' name='phone'
            onChange={this.onChange}
            value={this.state.phone}
            validate={this.valid_phone}
          />
          <SelectInput
            name='gender' label='Gender'
            options={this.gender_options}
            onSelectChange={this.onChange}
          />
          <button className="btn btn-warning" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }

  renderEmpid = () => {
    return(
      <div>
        <Input
          label='Enter the employee id'
          type='text'
          name='id'
          onChange={this.onChange}
          value={this.state.id}
        />
        <button className="btn btn-danger" onClick={this.onClick}>Edit</button>
      </div>
    )
  }

  render(){
    return(
        this.state.showForm == true ? this.renderForm() : this.renderEmpid()
    )
  }
}

const MapStateToProps = state => ({
    posts: state.posts.item
  });

export default connect(MapStateToProps, { fetchPost, editPost })(EditForm);
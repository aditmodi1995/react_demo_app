import React, { Component } from 'react';
import Input from './input';
import SelectInput from './selectInput';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postAction';

class EditForm extends Component{

  constructor(props){
    super(props);
    this.valid_name = true;
    this.valid_phone = true;
    this.valid_age = true;
    this.valid_emp_id = true;
    this.state = {
      showForm: false,
      id: '',
      name: '',
      emp_id: '',
      age: 0,
      dept: 'software',
      phone: 0,
      gender: 'male'
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      name: nextProps.posts.name,
      emp_id: nextProps.posts.emp_id,
      age: nextProps.posts.age,
      dept: nextProps.posts.dept,
      phone: nextProps.posts.phone,
      gender: nextProps.posts.gender
    })
  }

  onClick = () => {
    this.props.fetchPost(this.state.id, (res) => {
        console.log('res:', res);
      });

    console.log('asdasdasd:', this.props.posts);
    this.setState({
      showForm: true
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderForm = () => {
    console.log('form details:', this.props.posts);
    // const dept_options = [
    //   { display_name: 'Software', value: 'software' },
    //   { display_name: 'Business Anlalyst', value: 'ba' },
    //   { display_name: 'Businees Development', value: 'bd' }
    // ];
    // const gender_options = [
    //   { display_name: 'Male', value: 'male' },
    //   { display_name: 'Female', value: 'female' },
    //   { display_name: 'Other', value: 'other' }
    // ];
    // const form = this.props.posts;
    const dept_options = ['Software', 'Business_Analyst', 'Business_Developer'];
    const gender_options = ['Male', 'Female', 'Other'];
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
            options={dept_options}
            value={this.state.dept}
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
            options={gender_options}
            value={this.state.gender}
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

export default connect(MapStateToProps, { fetchPost })(EditForm);
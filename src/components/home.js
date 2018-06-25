import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './form';
import List from './list';
import EditForm from './editForm';

export default class Home extends Component{

  render(){
    return(
      <Router>
        <div>
          <div className=""></div>
          <div></div>
          <Link to="/form"><button className="btn btn-primary">Open form</button></Link>
          <Link to="/show"><button className="btn btn-warning">Show employees</button></Link>
          <Link to="/edit"><button className="btn btn-success">Edit details</button></Link>
          <hr/>
          <Route exact path="/form" component={Form}/>
          <Route path="/show" component={List}/>
          <Route path="/edit" component={EditForm}/>
        </div>
      </Router>
    )
  }
}
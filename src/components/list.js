import React, { Component } from 'react';
import { fetchPosts } from '../actions/postAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    const postItems = this.props.posts.map((post) => {
      return(
      <tr key={post.emp_id}>
        <th>{post.name}</th>
        <th>{post.emp_id}</th>
        <th>{post.age}</th>
        <th>{post.dept}</th>
        <th>{post.phone}</th>
        <th>{post.gender}</th>
      </tr>
      )
    })
    return(
      <div>Employee List<br/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee Id</th>
              <th>Age</th>
              <th>Department</th>
              <th>Phone No.</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {postItems}
          </tbody>
        </table>
      </div>
    )
  }
}

List.proptypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const MapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(MapStateToProps, { fetchPosts })(List);
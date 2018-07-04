import { FETCH_POSTS, NEW_POST, FETCH_POST, EDIT_POST } from './types';
import Config from '../config';

export const fetchPosts = () => dispatch => {
  fetch(`${Config.address}/posts`)
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}

export const createPost = (postData) => async(dispatch) => {

  fetch(`${Config.address}/post`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then((post) => {
    console.log('post:', post.json());
    dispatch({
      type: NEW_POST,
      payload: post
    })
  })
  .then(post => post.json())
}

export const fetchPost = id => dispatch => {
  fetch(`${Config.address}/getForm/${id}`)
    .then(res => res.json())
    .then(post => dispatch({
      type: FETCH_POST,
      payload: post
    }))
}

export const editPost = (postData, id) => dispatch => {
  fetch(`${Config.address}/editForm/${id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(post => dispatch({
    type: EDIT_POST,
    payload: post
  }))
}
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './components/home';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <Home/>
        </div>
      </Provider>
    );
  }
}

export default App;

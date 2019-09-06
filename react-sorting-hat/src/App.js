import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Questions from './components/Questions';
import Welcome from './components/Welcome';
import Results from './components/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Welcome} />
        <Route path='/question/:id' component={Questions} />
        <Route path='/results' component={Results} />
      </div>
    );
  }
}

export default App;

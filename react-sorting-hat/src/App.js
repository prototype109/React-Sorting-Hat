import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Questions from './components/Questions';
import Welcome from './components/Welcome';
import Results from './components/Results';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: [
        {
          houseName: 'Gryffindor',
          points: 0
        },
        {
          houseName: 'Slytherin',
          points: 0
        },
        {
          houseName: 'Ravenclaw',
          points: 0
        },
        {
          houseName: 'Hufflepuff',
          points: 0
        }
      ]
    }
  }

  results = (res) => {
    let tempArr = [...this.state.results];
    res.forEach((answer) => {
      this.state.results.forEach((house, index) => {
        if(house.houseName === answer){
          tempArr[index].points += 1;
        }
      })
    })
    this.setState({results: tempArr})
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Welcome} />
        <Route path='/question/:id' render={props => <Questions {...props} getRes={this.results} />} />
        {/* <Route path='/question/:id' component={Questions}  /> */}
        <Route path='/results' render={props => <Results {...props} res={this.state.results} />} />
        {/* <Route path='/results' component={Results} /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/feeling" component={Feeling}/>
          <Route path="/understanding" component={Understanding}/>
          <Route path="/support" component={Support}/>
          <Route path="/comments" component={Comments}/>
          <Route path="/review" component={Review}/>
        </Router>
      </div>
    );
  }
}

export default App;

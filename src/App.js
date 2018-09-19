import React, { Component } from 'react';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';
import NavBar from './components/NavBar/NavBar';

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/projects" component={Projects} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;

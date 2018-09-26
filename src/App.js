import React, { Component } from 'react';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';
import Team from './screens/Team/Team';
import NavBar from './components/NavBar/NavBar';

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/projects" component={Projects} />
        <Route path="/eerl-website/home" component={Home} />
        <Route path="/eerl-website/team" component={Team} />
      </div>
    );
  }
}

export default App;

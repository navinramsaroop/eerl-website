import React, { Component } from 'react';
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects';
import Team from './screens/Team/Team';
import NavBar from './components/NavBar/NavBar';
import Publications from './screens/Publications/Publications';
import News from './screens/News/News';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/projects" component={Projects} />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/publications" component={Publications} />
        <Route path="/news" component={News} />
      </div>
    );
  }
}

export default App;

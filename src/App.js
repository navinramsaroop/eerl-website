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
    console.log('Your process.env.PUBLIC_URL', process.env.PUBLIC_URL);
    return (
      <div>
        <NavBar />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/publications" component={Publications} />
        <Route exact path="/news" component={News} />
      </div>
    );
  }
}

export default App;

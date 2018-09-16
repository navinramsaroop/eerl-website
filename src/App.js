import React, { Component } from 'react';
import Home from './screens/Home/Home';
import NavBar from './components/NavBar/NavBar';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;

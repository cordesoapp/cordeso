// @flow

import React from 'react';
import Example from './components/Example';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import Clicker from './components/Clicker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySB: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar = () => {
    this.setState((prevState, props) => ({
      displaySB: !prevState.displaySB,
    }));
  }
  render() {
    console.log('How many renders am I doing?');
    return (
      <div className="App">
        <NavigationBar toggleSB={this.toggleSidebar}/>
        <Sidebar sidebar={this.state.displaySB} toggleSidebar={this.toggleSidebar}/>
        <header className="App-header">
          <h1>Devons Docker Linode React App!
          </h1>
          <p>This website IP is address 45.79.99.242</p>
          <Example/>
          <Clicker/>
        </header>
      </div>
    );
  }
}

export default App;

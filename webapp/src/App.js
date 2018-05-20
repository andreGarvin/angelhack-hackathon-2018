import React, { Component } from 'react';
import './App.css';

// import Chat from './components/chat/Index'
import Login from './components/login/Index';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Chat /> */}
        <Login />
     </div>
    );
  }
}

export default App;

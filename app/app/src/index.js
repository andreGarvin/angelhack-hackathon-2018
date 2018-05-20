import React, { Component } from 'react';
import { render } from 'react-dom';

// COMPONENTS
import Chat from './components/chat/Index'
import Login from './components/login/Index'

class App extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'red' }}>
                <Login />
                {/* <Chat /> */}
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
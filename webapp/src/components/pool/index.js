import React, {Component} from 'react'
import './style.css'
import snaptechapi from 'snaptechapi'
import Chat from '../chat/Index'

class PoolList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionId: "014de2ee-1f31-4b42-9330-b8d45b9f3edf",
      ready: false,
    }
  }

  render(){
    if(!this.state.ready) {
      return this.props.sessions.map((poolSession, key) => {
        return(
          <div className='card' key={key} onClick={() => this.handleClick(poolSession.sessionId, poolSession.username)}>
            <h1>{poolSession.username}</h1>
            <div>{poolSession.timestamp}</div>
          </div>
        )
  
      })
    } else {
        return (
          <Chat username={this.state.username} sessionId={this.state.sessionId} />
        )
      }
  }

  handleClick(sessionId, username) {
    this.setState({
      sessionId,
      username,
      ready: true,
    })
  }
}



export default class Pool extends Component {
  constructor(props){
    super(props)
    this.state = {
      sessions: this.props.sessions
    }
  }

  render(){
    return(
      <div className="cardBox">
        <PoolList
          sessions = {this.state.sessions}
        />
      </div>
    )
  }
}

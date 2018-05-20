import React, {Component} from 'react'
import './style.css'
import snaptechapi from 'snaptechapi'

class PoolList extends Component {
  render(){
    return this.props.sessions.map((poolSession, key) => {
      return(
        <div key={key}>
          <h1>{poolSession.username}</h1>
          <div>{poolSession.timestamp}</div>
        </div>
      )
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
      <PoolList
        sessions = {this.state.sessions}
      />
    )
  }
}

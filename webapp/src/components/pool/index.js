import React, {Component} from 'react'
import './style.css'
import snaptechapi from 'snaptechapi'

class PoolList extends Component {
  render(){
    var List = this.props.sessions.map(poolSession =>{
      return(
        <div key={this.props.sessionId}>
          <h1>{poolSession.username}</h1>
          <div>{poolSession.timestamp}</div>
        </div>
      )
    })
    return(
      {List}
    )
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
  console.log(this.props.sessions)
  var sessions = {sessions: this.state.sessions}
  return(
    <PoolList
    sessions = {sessions}
    />
  )
}

}
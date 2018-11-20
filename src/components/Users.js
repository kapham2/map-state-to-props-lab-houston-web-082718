import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        <ul>
          { this.props.userCount } User(s):
          {
            this.props.users.map(user => {
              return <li key={user.username} >{user.username}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger
  return { 
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)

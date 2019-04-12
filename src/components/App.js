import React, { Component } from 'react';
import { observer } from "mobx-react"
import User from './User'

const logo = "https://www.discworldemporium.com/img/turtle3.gif"

class App extends Component {
  state = {
    selectedUser: null
  }

  onSelectUser = (event) => {
    this.setState({ selectedUser: event.target.value })
  }

  render() {
    const { group } = this.props
    const selectedUser = group.users.get(this.state.selectedUser)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wish list</h1>
        </header>
        <select onChange={this.onSelectUser}>
          <option>- Select user -</option>
          {Array.from(group.users.values()).map(user =>
            <option key={user.id} value={user.id}>
              {user.name}
            </option>)}
        </select>
        <button onClick={group.drawLots}>Draw lots</button>
        { selectedUser && <User user={selectedUser} /> }
      </div>
    );
  }
}

export default observer(App);

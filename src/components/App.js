import React, { Component } from 'react';
import WishListView from "./WishListView"

const logo = "https://www.discworldemporium.com/img/turtle3.gif"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wish list</h1>
        </header>
        <WishListView wishList={this.props.wishList} />
      </div>
    );
  }
}

export default App;

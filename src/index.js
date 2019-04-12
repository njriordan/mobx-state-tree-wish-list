import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { getSnapshot } from "mobx-state-tree"

import { Group } from './models/Group'

let initialState = {
  users: {
    baf70cf4: {
      id: "baf70cf4",
      name: "Chicard",
      gender: "m"
    },
    baf712b2: {
      id: "baf712b2",
      name: "Vimaire",
      gender: "m"
    },
    baf71442: {
      id: "baf71442",
      name: "Carotte",
      gender: "m"
    },
    baf71582: {
      id: "baf71582",
      name: "Hilare",
      gender: "f"
    },
  }
}

let group = Group.create(initialState)

function renderApp() {
  ReactDOM.render(<App  group={group} />, document.getElementById('root'));
}

renderApp()

if (module.hot) {
  module.hot.accept(["./components/App"], () => {
    // new components
    renderApp()
  })

  module.hot.accept(["./models/WishList", () => {
    // new model definitions
    const snapshot = getSnapshot(group)
    group = Group.create(snapshot)
    renderApp()
  }])
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { getSnapshot } from "mobx-state-tree"

import { WishList } from './models/WishList'

let initialState = {
  items: [
    {
      name: "Pyramides",
      price: 7.9,
      image: "https://images-na.ssl-images-amazon.com/images/I/71LRdzX5HyL.jpg"
    },
    {
      name: "Allez les mages!",
      price: 9.8,
      image: "https://m.media-amazon.com/images/I/71P8zySaR8L._AC_UL872_QL65_.jpg"
    }
  ]
}


let wishList = WishList.create(initialState)

function renderApp() {
  ReactDOM.render(<App  wishList={wishList} />, document.getElementById('root'));
}

renderApp(wishList)

if (module.hot) {
  module.hot.accept(["./components/App"], () => {
    // new components
    renderApp()
  })

  module.hot.accept(["./models/WishList", () => {
    // new model definitions
    const snapshot = getSnapshot(wishList)
    wishList = WishList.create(snapshot)
    renderApp()
  }])
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { onSnapshot } from "mobx-state-tree"

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

if (localStorage.getItem('wishListApp')) {
  const json = JSON.parse(localStorage.getItem('wishListApp'))
  if (WishList.is(json)) {
    initialState = json
  }
}

const wishList = WishList.create(initialState)

onSnapshot(wishList, snapshot => {
  localStorage.setItem('wishListApp', JSON.stringify(snapshot))
})

ReactDOM.render(<App  wishList={wishList} />, document.getElementById('root'));



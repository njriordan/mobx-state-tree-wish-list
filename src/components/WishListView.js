import React from 'react'
import { observer } from "mobx-react"

import WishListItemView from './WishListItemView'
import WishListItemEntry from './WishListItemEntry'

const WishListView = ({ wishList, readonly }) => (
  <div className="list">
    <ul>{wishList.items.map((item, idx) => <WishListItemView key={idx} item={item} readonly={readonly}/>)}</ ul>
    Total: {wishList.totalPrice.toFixed(2)} €
    { !readonly && <WishListItemEntry wishList={wishList} /> }
  </div>
)

export default observer(WishListView)
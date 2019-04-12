
import React from "react"
import { observer } from "mobx-react"
import WishListView from "./WishListView"

const User = ({ user }) => (
  <div>
    <WishListView wishList={user.wishList} />
    <button onClick={user.getSuggestions}>Suggestions</button>
    <hr />
    <h2>{user.recipient ? user.recipient.name : ""}</h2>
    { user.recipient && <WishListView readonly wishList={user.recipient.wishList } /> }
  </div>
)

export default observer(User)
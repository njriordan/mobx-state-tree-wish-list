import React, { Component } from "react"
import { observer } from 'mobx-react'
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree"

import WishListItemEdit from './WishListItemEdit'

class WishListItemView extends Component {
  state = { isEditing: false }

  onToggleEdit = () => {
    this.setState({
      isEditing: true,
      clone: clone(this.props.item)
    })
  }

  onCancelEdit = () => {
    this.setState({ isEditing: false})
  }

  onSaveEdit = () => {
    applySnapshot(this.props.item, getSnapshot(this.state.clone))
    this.setState({
      isEditing: false,
      clone: null
    })
  }

  renderEditable = () => {
    return (
      <li className="item">
        <WishListItemEdit item={this.state.clone} />
        <button onClick={this.onSaveEdit}>Save</button>
        <button onClick={this.onCancelEdit}>Cancel</button>
      </li>
    )
  }

  render() {
    const { item } = this.props
    return this.state.isEditing ? (
      this.renderEditable()
    ) : (
      <li className="item">
        {item.image && <img alt="item" src={item.image} />}
        <h3>{item.name}</h3>
        <span>{item.price.toFixed(2)}</span>
        <span>
          <button onClick={this.onToggleEdit}>Edit</button>
        </span>
      </li>
    )
  }
}

export default observer(WishListItemView)
import { types, flow, getSnapshot, onSnapshot } from "mobx-state-tree"

export function createStorable(collection, attribute) {
  return types.model({}).actions(self => ({
    save: flow(function*() {
      try {
        yield window.fetch(`http://localhost:3001/${collection}/${self[attribute]}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(getSnapshot(self))
        })
      } catch(e) {
        console.error("Failed to save: ", e)
      }
    }),
    afterCreate() {
      onSnapshot(self, self.save)
    }
  }))
}
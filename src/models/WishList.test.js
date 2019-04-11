import { getSnapshot, onSnapshot, onPatch } from "mobx-state-tree"
import { WishListItem } from "./WishList"
import { WishList } from "./WishList"
import { reaction } from "mobx"

it("can create an instance of a model", () => {
  const item = WishListItem.create({
    name: "Chronicles of Narnia",
    price: 28.5,
    image: "http://aurl.com"
  })

  expect(item.price).toBe(28.5)

  item.changeName("Narnia")
  expect(item.name).toBe("Narnia")
})

it("can create a wishlist", () => {
  const list = WishList.create({
    items: [{
      name: "Chronicles of Narnia",
      price: 28.5,
      image: "http://aurl.com"
    }]
  })

  expect(list.items.length).toBe(1)
})


it("can add new items", () => {
  const list = WishList.create()

  // Every time we change the mode we create a snapshot
  const states = []
  onSnapshot(list, snapshot => {
    states.push(snapshot)
  })

  // Every time we change the mode we create a patch
  const patches = []
  onPatch(list, patch => {
    patches.push(patch)
  })

  list.add({
    name: "Pieds d'argile",
    price: 22.29
  })

  list.items[0].changeName("Au guet !")

  // Can match against json object
  expect(getSnapshot(list)).toEqual({
    items: [{
      name: "Au guet !",
      price: 22.29,
      image: ""
    }]
  })

  // Can also match against snapshot
  expect(getSnapshot(list)).toMatchSnapshot()

  expect(states).toMatchSnapshot()
  expect(patches).toMatchSnapshot()
})

it("can calculate the total price of a wishlist", () => {
  const list = WishList.create({
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
  })

  expect(list.totalPrice).toBe(7.9 + 9.8)

  let changed = 0
  reaction(() => list.totalPrice, () => changed++)
  expect(changed).toBe(0)

  list.items[0].changeName("Pyramides!")
  expect(changed).toBe(0)

  list.items[0].changePrice(10)
  expect(changed).toBe(1)
})
import { WishListItem } from "./WishList"
import { WishList } from "./WishList"

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
  list.add(WishListItem.create({
    name: "Pieds d'argile",
    price: 22.29
  }))

  expect(list.items.length).toBe(1)
  expect(list.items[0].name).toBe("Pieds d'argile")
  list.items[0].changeName("Au guet !")
  expect(list.items[0].name).toBe("Au guet !")
})
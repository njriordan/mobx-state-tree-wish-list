import { WishListItem } from "./WishList"
import { WishList } from "./WishList"

it("can create an instance of a model", () => {
  const item = WishListItem.create({
    name: "Chronicles of Narnia",
    price: 28.5,
    image: "http://aurl.com"
  })

  expect(item.price).toBe(28.5)
})

it ("can create a wishlist", () => {
  const list = WishList.create({
    items: [{
      name: "Chronicles of Narnia",
      price: 28.5,
      image: "http://aurl.com"
    }]
  })

  expect(list.items.length).toBe(1)
})
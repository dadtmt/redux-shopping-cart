# Redux design

[Wireframe](https://assets.justinmind.com/blog/wp-content/uploads/2016/12/shopping-cart.gif)

## Actions

- ADD_TO_CART

```javascript
{
  itemId: "34567",
  quantity: 4,
  price: 45,
}
```

- REMOVE_FROM_CART

```javascript
{
  itemId: "34567";
}
```

- VIEW_CART
- VIEW_SELECT_ITEMS

- SEARCH_ITEMS

```javascript
{
  s: "chausset";
}
```

## Reducers

- viewReducer

handles displayed page name

```javascript
const initialState = {
  currentPage: "catalog";
}
```

- cartReducer

handles add and remove item from the cart

```javascript
const initialState = {
  cart: [];
}
```

- catalogReducer

gives the items list

```javascript
const initialState = {
  catalog: [
    {
      itemId: "34567",
      price: 45
    },
    {
      itemId: "34545",
      price: 42
    },
    {
      itemId: "34578",
      price: 5
    }
  ]
};
```

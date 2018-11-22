import React from "react";

const ItemCatalog = ({ itemId, price, addToCart }) => (
  <div>
    <h3>Id: {itemId}</h3>
    <p>{price} €</p>
    <button
      onClick={() =>
        addToCart({
          itemId,
          price
        })
      }
    >
      Add to cart
    </button>
  </div>
);

export default ItemCatalog;

import React from "react";
import ItemCatalog from "./ItemCatalog";

const Catalog = ({ items, addToCart }) => (
  <div>
    {items.map(item => (
      <ItemCatalog {...item} addToCart={addToCart} />
    ))}
  </div>
);

export default Catalog;

/* eslint-disable @next/next/no-img-element */
import React from 'react';
5814;

const ItemCard = ({ item }) => {
  const price = +item.price;
  return (
    <div className="item-card">
      {item.images && (
        <img
          src={item.images[0]}
          alt={item.title}
          style={{ width: '100%', height: 'auto' }}
        />
      )}

      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Condition: {item.condition}</p>
    </div>
  );
};

export default ItemCard;

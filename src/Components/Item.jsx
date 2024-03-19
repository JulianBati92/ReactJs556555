import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <Link to={{ pathname: `/item/${item.id}`, state: { product: item } }}>
        Ver más
      </Link>
    </div>
  );
};

export default Item;

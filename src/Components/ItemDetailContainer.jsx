import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetailContainer = ({ product, productImage }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
    setCartItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setCartItemQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="card mb-4">
      <img src={productImage} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: ${product.price}</p>
        <div className="d-flex align-items-center">
          {cartItemQuantity > 0 ? (
            <div className="btn-group">
              <button className="btn btn-outline-primary" onClick={handleRemoveFromCart}>
                -
              </button>
              <button className="btn btn-primary">{cartItemQuantity}</button>
              <button className="btn btn-outline-primary" onClick={handleAddToCart}>
                +
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          )}
          <Link to={`/item/${product.id}`} className="btn btn-outline-primary ms-2">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

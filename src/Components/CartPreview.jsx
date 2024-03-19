import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPreview = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart-preview" style={{ position: 'absolute', top: '100px', left: '20px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
      <h4>Carrito de compras:</h4>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-preview-item">
              <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
              <span>{item.title}</span>
              <span className="cart-preview-item-price">${item.price}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPreview;
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    console.log('Producto eliminado del carrito:', productId);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(product.id)}>Eliminar</button>
            </div>
          ))}
          <button>Realizar compra</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;


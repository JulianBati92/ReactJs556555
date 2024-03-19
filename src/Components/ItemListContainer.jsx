import React, { useEffect, useState } from 'react';
import { getItems } from '../async-mocks/productsData';
import ItemDetailContainer from './ItemDetailContainer';

import setCompletoImage from '../assets/imgproduct/set_completo.jpg';
import mateImperialImage from '../assets/imgproduct/mate_imperial.jpg';
import mateTorpedoImage from '../assets/imgproduct/mate_torpedo.jpg';
import mateCamioneroImage from '../assets/imgproduct/mate_camionero.jpg';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const getProductImage = (productId) => {
    switch (productId) {
      case 1:
        return setCompletoImage;
      case 2:
        return mateImperialImage;
      case 3:
        return mateTorpedoImage;
      case 4:
        return mateCamioneroImage;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Catálogo de productos</h2>
      {isLoading ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <ItemDetailContainer product={item} productImage={getProductImage(item.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;


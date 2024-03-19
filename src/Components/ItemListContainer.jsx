import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setIsLoading(false); // Si hay un error, detener el indicador de carga
      }
    };

    fetchItems(); // Llamada a la función de carga al montar el componente

    // Agregamos un cleanup para cancelar la solicitud en caso de que el componente se desmonte antes de que se complete
    return () => {
      // Cancelar la solicitud fetch si aún está en curso
    };
  }, []); // Este efecto solo se ejecuta una vez al montar el componente, por lo que no tiene dependencias

  return (
    <div className="container">
      <h2 className="text-center mt-5">Catálogo de productos</h2>
      {isLoading ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <ItemDetailContainer product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

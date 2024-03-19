import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Formulario from './Components/Form';
import { CartContextProvider } from './Components/CartContext'; // Importar el CartContextProvider
import Checkout from './Components/Checkout';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <Navbar navbarLogo={'Tu Matteoli'} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Formulario />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;

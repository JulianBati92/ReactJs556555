import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Formulario from './Components/Form';
import { CartContextProvider } from './Components/CartContext'; 
import Checkout from './Components/Checkout';

function App() {

  // const [products, setProducts] = useState([]);
  // const [prev, setPrev] = useState(null);
  // const [next, setNext] = useState(null);
  // useEffect(() => {
  //   axios("http://localhost:8080/api/events")
  //     .then((res) => {
  //       console.log(res.data.response);
  //       setProducts(res.data.response.docs);
  //       setPrev(res.data.response.prevPage);
  //       setNext(res.data.response.nextPage);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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

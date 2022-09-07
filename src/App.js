
  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buybar from './components/Buybar/Buybar';
import Contactbar from './components/Contactbar/Contactbar';
import Navigationbar from './components/Navigationbar/Navigationbar'; 
import Contact from './pages/Contact'
import Footer from './pages/Footer'; 
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
// import { CartContext } from './context/CartContext';
// import CartProvider from './context/CartContext';  

 
import './App.css';

function App() {
  return (
   <>
      {/* <CartProvider > */}
        <BrowserRouter>
              {/* <Buybar /> */}
              <Contactbar />
              <Navigationbar />
              <Routes>
              <Route path="/nosotros" element={<Aboutus />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="*" element={<h1>ERROR 404 - PAGINA NO ENCONTRADA</h1>} />
              </Routes>
              <Footer /> 
            </BrowserRouter>
          {/* </CartProvider> */}

        </>
        );
}

        export default App;

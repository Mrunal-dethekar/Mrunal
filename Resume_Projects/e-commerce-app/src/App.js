import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';


function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
      <Announcement />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      <Footer />
      </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import TopMenuBar from "./Components/Includes/TopMenuBar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Includes/Footer";
import Sample from "./Components/ProductsDetails/Sample";
import { Provider } from "react-redux";
import store from "./Store";
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <TopMenuBar />
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/sample" element={<Sample />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

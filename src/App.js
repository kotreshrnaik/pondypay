import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import TopMenuBar from "./Components/Includes/TopMenuBar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Footer from "./Components/Includes/Footer";
import VanjaramFish from "./Components/Products/VanjaramFish";
import { Provider } from "react-redux";
import store from "./Store";
import Cart from './Components/Cart/Cart';
import Dashboard from './Components/Dashboard/Dashboard';
import Prawns from './Components/Products/Prawns';
import Cobia from './Components/Products/Cobia';
import RedSnappers from './Components/Products/RedSnappers';
import BlackSnapper from "./Components/Products/BlackSnapper";
import BlackPomfret from './Components/Products/BlackPomfret';
import WhitePomfret from './Components/Products/WhitePomfret';
import MahiFish from './Components/Products/MahiFish';
import IndianSalmonFish from './Components/Products/IndianSalmonFish';
import SoleFish from './Components/Products/LadyFish';
import LadyFish from "./Components/Products/LadyFish";
import YellowFinTunaFish from './Components/Products/YellowFinTunaFish';
import WhiteSnapper from './Components/Products/WhiteSnapper';
import PearlSpotFish from './Components/Products/PearlSpotFish';
import SquidFish from './Components/Products/SquidFish';
import AyalaFish from './Components/Products/AyalaFish';
import SharkFish from './Components/Products/SharkFish';
import TunaFish from './Components/Products/TunaFish';
import GrouperFish from './Components/Products/GrouperFish';
import SardineFish from './Components/Products/SardineFish';
import EditProduct from './Components/Dashboard/EditProduct';
import AyalaFishinfo from "./Components/ProductsDetails/AyalaFishinfo";
import BlackPomfretinfo from "./Components/ProductsDetails/BlackPomfretinfo";
import VanjaramFishinfo from "./Components/ProductsDetails/VanjaramFishinfo";
import Prawnsinfo from "./Components/ProductsDetails/Prawnsinfo";
import Cobiainfo from "./Components/ProductsDetails/Cobiainfo";
import RedSnapperinfo from "./Components/ProductsDetails/RedSnapperinfo";
import BlackSnapperinfo from "./Components/ProductsDetails/BlackSnapperinfo";
import WhitePomfretinfo from "./Components/ProductsDetails/WhitePomfretinfo";
import MahiFishinfo from "./Components/ProductsDetails/MahiFishinfo";
import IndianSalmonFishinfo from "./Components/ProductsDetails/IndianSalmonFishinfo";
import SoleFishinfo from "./Components/ProductsDetails/SoleFishinfo";
import LadyFishinfo from "./Components/ProductsDetails/LadyFishinfo";
import YellowfrinTunaFishinfo from "./Components/ProductsDetails/YellowfrinTunaFishinfo";
import WhiteSnapperinfo from "./Components/ProductsDetails/WhiteSnapperinfo";
import PearlSpotFishinfo from "./Components/ProductsDetails/PearlSpotFishinfo";
import SquidFishinfo from "./Components/ProductsDetails/SquidFishinfo";
import SharkFishinfo from "./Components/ProductsDetails/SharkFishinfo";
import Tunainfo from "./Components/ProductsDetails/Tunainfo";
import Grouperinfo from "./Components/ProductsDetails/Gouperinfo";
import SardineFishinfo from "./Components/ProductsDetails/SardineFishinfo";
import Checkout from "./Components/Checkout/Checkout";
import Register from './Components/Checkout/Register';
import Login from "./Components/Checkout/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Payment from "./Components/Checkout/Payment";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <TopMenuBar/>  
          <Routes>
            <Route path="/pondybay" index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/vanjaram-fish" element={<VanjaramFish />}></Route>
            <Route path="/prawns" element={<Prawns />}></Route>
            <Route path="/cobia" element={<Cobia />}></Route>
            <Route path="/red-snapper" element={<RedSnappers />}></Route>
            <Route path="/black-snapper" element={<BlackSnapper />}></Route>
            <Route path="/black-pomfret" element={<BlackPomfret />}></Route>
            <Route path="/white-snapper" element={<WhitePomfret />}></Route>
            <Route path="/mahi-fish" element={<MahiFish />}></Route>
            <Route path="/indian-salmon-fish" element={<IndianSalmonFish />}></Route>
            <Route path="/sole-fish" element={<SoleFish />}></Route>
            <Route path="/lady-fish" element={<LadyFish />}></Route>
            <Route path="/yellowfin-tuna-fish" element={<YellowFinTunaFish />}></Route>
            <Route path="/white-snapper" element={<WhiteSnapper />}></Route>
            <Route path="/pearl-spot-fish" element={<PearlSpotFish />}></Route>
            <Route path="/squid-fish" element={<SquidFish />}></Route>
            <Route path="/ayala-fish" element={<AyalaFish />}></Route>
            <Route path="/shark-fish" element={<SharkFish />}></Route>
            <Route path="/Tuna-fish" element={<TunaFish />}></Route>
            <Route path="/grouper-fish" element={<GrouperFish />}></Route>
            <Route path="/sardine-fish" element={<SardineFish />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/product/edit/:id" element={<EditProduct />}></Route>
            <Route path="/product/vanjaram-fish" element={<VanjaramFishinfo />}></Route>
            <Route path="/product/prawns" element={<Prawnsinfo />}></Route>
            <Route path="/product/cobia" element={<Cobiainfo />}></Route>
            <Route path="/product/red-snapper" element={<RedSnapperinfo />}></Route>
            <Route path="/product/black-snapper" element={<BlackSnapperinfo />}></Route>
            <Route path="/product/black-pomfret" element={<BlackPomfretinfo />}></Route>
            <Route path="/product/white-snapper" element={<WhiteSnapperinfo />}></Route>
            <Route path="/product/mahi-fish" element={<MahiFishinfo />}></Route>
            <Route path="/product/indian-salmon-fish" element={<IndianSalmonFishinfo />}></Route>
            <Route path="/product/sole-fish" element={<SoleFishinfo />}></Route>
            <Route path="/product/lady-fish" element={<LadyFishinfo />}></Route>
            <Route path="/product/yellowfin-tuna-fish" element={<YellowfrinTunaFishinfo />}></Route>
            <Route path="/product/white-pomfret" element={<WhitePomfretinfo />}></Route>
            <Route path="/product/pearl-spot-fish" element={<PearlSpotFishinfo />}></Route>
            <Route path="/product/squid-fish" element={<SquidFishinfo />}></Route>
            <Route path="/product/ayala-fish" element={<AyalaFishinfo />}></Route>
            <Route path="/product/shark-fish" element={<SharkFishinfo />}></Route>
            <Route path="/product/Tuna-fish" element={<Tunainfo />}></Route>
            <Route path="/product/grouper-fish" element={<Grouperinfo />}></Route>
            <Route path="/product/sardine-fish" element={<SardineFishinfo />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

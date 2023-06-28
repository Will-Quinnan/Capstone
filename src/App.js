import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import About from './pages/about';
import Help from './pages/help';
import Catalog from './pages/catalog';
import YourOrder from './pages/yourOrders';
import Checkout from './pages/checkout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalState from './store/globalState';

function App() {
    return (
      <GlobalState>

      
        <div className='App'>

          <Router>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/catalog" element= {<Catalog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/yourOrders" element={<YourOrder />} />
              <Route path="/checkout" element={<Checkout />} />

            </Routes>

            <Footer />

          </Router>




        </div>
      </GlobalState>
    );
}


export default App;
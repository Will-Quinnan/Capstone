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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
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

          </Routes>

          <Footer />

        </Router>

        


      </div>

    );
}


export default App;
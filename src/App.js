import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
      <div className='App'>

        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />

        </Router>

        


      </div>

    );
}


export default App;
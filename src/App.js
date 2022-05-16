import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;

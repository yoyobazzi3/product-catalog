import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetProducts from './Pages/GetProducts';
import Product from './Pages/Product';

function App() {
  return (
    <Router basename="/product-catalog">
      <Routes>
        <Route path='/' element={<GetProducts />} />
        <Route path='product/:id' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
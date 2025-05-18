import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GetProducts from './Pages/GetProducts'
function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<GetProducts/>}/>
      </Routes>
    </Router>

  );
}

export default App;

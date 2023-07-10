import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import CartPage from './CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [history, setHistory] = useState([]);

  const addToHistory = (imageUrl) => {
    setHistory([...history, imageUrl]);
  };

  return (
    <Router>
      <div>
        <div className='d-flex mt-2' style={{ gap: 10 }}>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/cart">Cart</Link>
        </div>


        <Routes>
          <Route path="/" element={<HomePage addToHistory={addToHistory} />} />
          <Route path="/history" element={<HistoryPage history={history} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

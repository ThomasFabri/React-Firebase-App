import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import Principal from './pages/principal';
import Cadastro from './pages/cadastro';
import Sobre from './pages/sobre';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: 10 }}>principal</Link>
          <Link to="/cadastro" style={{ marginRight: 10 }}>Cadastro</Link>
          <Link to="/sobre" style={{ marginRight: 10 }}>Sobre</Link>
          <Link to="/login">Login</Link>
        </nav>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Principal />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Materials from './components/Materiais';
import Lists from './components/Lists';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </Router>
  );
}

export default App;

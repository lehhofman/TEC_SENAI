// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Login from './components/Login';
import Home from './components/Home';
import Expenses from './components/ExpensesList'; 
import Records from './components/ExpenseForm';
import Reminders from './components/Reminders';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleRegister = (userData) => {
    setCurrentUser(userData);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login onLogin={handleLogin} onRegister={handleRegister} />} />
          ) : (
            <>
              <Route path="/" element={<Home currentUser={currentUser} />} />
              <Route path="/expenseform" element={<Expenses />} />
              <Route path="/expenses" element={<Records />} />
              <Route path="/reminders" element={<Reminders />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

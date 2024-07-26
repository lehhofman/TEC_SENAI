import React, { useState } from 'react';
import './styles.css';
import Login from './components/Login';
import Home from './components/Home';
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';
import Reminders from './components/Reminders';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [reminders, setReminders] = useState([]);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleAddReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Home />
          <hr />
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpensesList expenses={expenses} />
          <hr />
          <Reminders onAddReminder={handleAddReminder} />
          <div>
            <h2>Lembretes</h2>
            <ul>
              {reminders.map((reminder, index) => (
                <li key={index}>{reminder}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const Login = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'email') {
       document.getElementById('passwordInput').focus();
      } else if (e.target.name === 'password') {
         handleLogin();
      }
    }
  };

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      onLogin(true);
      setError('');
    } else {
      setError('Email ou senha incorretos.');
    }
  };

  const handleRegister = () => {
    if (email && password) {
      onRegister({ name: 'Novo Usuário', email, password });
      setIsRegistering(false);
      setError('');
      onLogin(true);
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
    setError('');
  };

  return (
    <div>
      <h2>{isRegistering ? 'Cadastro' : 'Login'}</h2>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="passwordInput"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isRegistering ? (
        <button onClick={handleRegister}>Cadastrar</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <p>
        {isRegistering
          ? 'Já tem uma conta?'
          : 'Ainda não tem uma conta?'}
        <button onClick={toggleRegister}>
          {isRegistering ? 'Login' : 'Cadastrar'}
        </button>
      </p>
    </div>
  );
};

export default Login;

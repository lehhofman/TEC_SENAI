import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.1vh;
  background: linear-gradient(to top right, #f0f4f8, #007bff); /* Gradiente azul e cinza claro */
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #0033a0; /* Azul escuro */
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: #007bff; /* Azul */
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3; /* Azul mais escuro */
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #007bff; /* Azul */
  cursor: pointer;
  text-decoration: underline;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'email') {
        document.getElementById('passwordInput').focus();
      } else if (e.target.name === 'password') {
        isRegistering ? handleRegister() : handleLogin();
      }
    }
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setError('');
      navigate('/home');
    } else {
      setError('Email ou senha incorretos.');
    }
  };

  const handleRegister = () => {
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsRegistering(false);
    setError('');
    navigate('/home');
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
    setError('');
  };

  return (
    <Container>
      <LoginBox>
        <Title>{isRegistering ? 'Cadastro' : 'Login'}</Title>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          id="passwordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {isRegistering ? (
          <Button onClick={handleRegister}>Cadastrar</Button>
        ) : (
          <Button onClick={handleLogin}>Entrar</Button>
        )}
        <p>
          {isRegistering ? 'Já tem uma conta?' : 'Não tem conta?'}
          <ToggleButton onClick={toggleRegister}>
            {isRegistering ? 'Entrar' : 'Cadastrar'}
          </ToggleButton>
        </p>
      </LoginBox>
    </Container>
  );
};

export default Login;

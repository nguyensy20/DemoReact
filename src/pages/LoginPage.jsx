// src/pages/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import LoginForm from '../components/LoginForm';
import { login } from '../services/authService';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const token = await login(values.username, values.password);
    localStorage.setItem('token', token);
    navigate('/products');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
      <Card title="Login" style={{ width: 300 }}>
        <LoginForm onFinish={handleLogin} />
      </Card>
    </div>
  );
};

export default LoginPage;

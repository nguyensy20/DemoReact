// src/App.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const App = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
      <Button type="primary" onClick={handleLoginRedirect}>
        Login
      </Button>
    </div>
  );
};

export default App;

// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = ({ onFinish }) => {
  const [error, setError] = useState('');

  const handleFinish = async (values) => {
    try {
      await onFinish(values);
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={handleFinish}
    >
      {error && <Alert message={error} type="error" showIcon />}
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

// src/components/login/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../redux/slices/authSlices';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Card, Button, Input, Spin } from 'antd';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    dispatch(loginStart());
    setLoading(true);
    try {
      // Fake login API call
      const fakeToken = 'fakeToken';
      dispatch(loginSuccess(fakeToken));
      navigate('/home'); // Navigate to the home page
    } catch (error) {
      dispatch(loginFailure());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card
        title="Login"
        style={{ width: 300 }}
        className="shadow-lg"
      >
        {loading ? (
          <Spin />
        ) : (
          <>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <Button
              type="primary"
              onClick={handleLogin}
              block
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default Login;

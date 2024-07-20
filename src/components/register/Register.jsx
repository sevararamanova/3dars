// src/components/register/Register.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerStart, registerSuccess, registerFailure } from '../../redux/slices/authSlices';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Input, Spin } from 'antd';
import './Register.css'; // Import CSS file

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    dispatch(registerStart());
    setLoading(true);
    try {
      // Fake register API call
      const fakeToken = 'fakeToken';
      dispatch(registerSuccess(fakeToken));
      navigate('/home');
    } catch (error) {
      dispatch(registerFailure());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Card
        title="Register"
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
              onClick={handleRegister}
              block
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default Register;

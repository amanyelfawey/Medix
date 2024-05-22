// src/app/ResetPassword/page.jsx
'use client'
import { useState } from 'react';
import axios from 'axios';

export default function ResetPassword() {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
    email: '',
    token: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('Password', form.password);
    formData.append('ConfirmPassword', form.confirmPassword);
    formData.append('Email', form.email);
    formData.append('token', form.token);

    try {
      const { data } = await axios.post(
        'http://154.38.186.138:5000/api/Authentication/ResetPassword',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', data);
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </div>
        <div>
          <label>Token:</label>
          <input type="text" name="token" value={form.token} onChange={handleChange} required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

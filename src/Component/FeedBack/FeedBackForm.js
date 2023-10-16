// FeedbackForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../Resources/StyleSheet/FeedbackForm.css';

function FeedBackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [len, setLen] = useState(0);

  const handleInput = (e) => {
    setMessage(e.target.value);
    setLen(e.target.value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://portfolio-server-u2yh.onrender.com/add-feedback', {
        name,
        email,
        message,
      });
      console.log('Response:', response.data);

      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setLen(0);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container my-5 FeedbackForm'>
      <h1 className='text-center'>Hello there! Hope you are having a nice day!</h1>
      <p className='text-center'>Please provide a review:</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            className='form-control'
            id='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            className='form-control'
            id='email'
            placeholder='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='form-control'
            id='message'
            placeholder='Message'
            maxLength={200}
            value={message}
            onChange={handleInput}
            required={true}
          />
          <small className='text-muted'>{len}/200</small>
        </div>
        <hr />
        <button type='submit' className='btn btn-primary btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedBackForm;

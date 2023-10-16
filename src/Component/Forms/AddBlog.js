import React, { useState } from 'react';
import '../Resources/StyleSheet/BlogCard.css';
import axios from 'axios';

function AddBlog() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio-server-u2yh.onrender.com/add-blogs', formData);
      console.log('Data added successfully');
    } catch (err) {
      console.error('Data cannot be added:', err.message);
      // Optionally, you can add some feedback to the user after failed submission.
      // For example, you can display an error message.
    }
  };

  return (
    <div className='Blog-form-layout'>
      <h2>Add New Blogs</h2>
      <form onSubmit={handleSubmit} className='blog-form'>
        <div className='blog-input'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Title of Blog'
          />
        </div>
        <div className='blog-input'>
          <label>Content</label>
          <textarea
            name='content'
            value={formData.content}
            onChange={handleChange}
            placeholder='Title of Content'
          />
        </div>
      </form>
        <button className='Add_Blog_btn btn btn-outline-light w-25 m-4' data-bs-dismiss="modal" type='submit'>Add Blog</button>
    </div>
  );
}

export default AddBlog;

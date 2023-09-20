import React, { useState } from 'react';
import axios from 'axios';
import '../Resources/StyleSheet/Project.css'

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portfolio-17hx.onrender.com/add-project', formData);

      if (response.status === 201) {
        alert("added successfully")
      } else {
        // Handle error response from the server
        // You can display an error message to the user
        alert("couldnt be added")
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div className='project-form-layout'>
      <h2>Add a Project</h2>
      <form onSubmit={handleSubmit} className='project-form'>
        <div className='form-input'>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder='Title of project'
            required
          />
        </div>
        <div className='form-input'>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder='Description of project'
            required
          />
        </div>
        <div className='form-input'>
          <label>Link:</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            placeholder='Link of project'
            required
          />
        </div>
        <button type="submit" className='btn btn-outline-light w-25 mt-5 m-auto'>Submit</button>
      </form>
    </div>
  );
};

export default AddProjectForm;

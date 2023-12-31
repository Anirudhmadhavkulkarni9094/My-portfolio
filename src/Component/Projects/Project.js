import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Resources/StyleSheet/Project.css';

function Project({auth}) {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://portfolio-server-u2yh.onrender.com/get-projects") // Replace with your API URL
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects");
      });
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`https://portfolio-server-u2yh.onrender.com/project/${_id}`); // Replace with your API URL
      // Reload projects after deletion if needed
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='project'>
      {projects.map((project) => (
        <div className='project-card' key={project._id}>
          <h3>{project.title}</h3>
          <span className='Project_desc'>{project.description}</span>
          <div>
            {auth && <button className='btn btn-danger m-1' onClick={() => handleDelete(project._id)}>Delete</button>}
            <a href={project.link} className="btn btn-dark project-link m-1">Link</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;

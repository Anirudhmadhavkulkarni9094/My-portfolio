import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Resources/StyleSheet/Project.css'
function Project() {
  const [Project , setProject] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/get-projects").then(res=>{
      setProject(res.data.data);
    })
  },[Project])

  const handleDelete = async (_id) => {
    try {
        await axios.delete(`https://portfolio-17hx.onrender.com/project/${_id}`);
        
    } catch (error) {
        console.log("Error deleting blog:", error);
    }
};

  
  return (
    <div className='project'>
      {Project.map(project=>{
        return <div className='project-card'>
          <h3>{project.title}</h3>
          <span>{project.description}</span>
          <div>  
            <button className='btn btn-danger m-1' onClick={()=>handleDelete(project._id)}>Delete</button>
          <button href={project.link} className="btn btn-dark project-link m-1">Link</button>
          </div>
        </div>
      })}
    </div>
  )
}

export default Project
import React from 'react'
import AddBlog from '../Forms/AddBlog'
import AddProject from '../Forms/AddProject'
import '../Resources/StyleSheet/AdminPanel.css'
function AdminPanel() {
  return (
    <div>
        <div className='admin-panel'>
            <div className='w-100'>
                <AddBlog/>
            </div>
            <div className='w-100'>
                <AddProject/>
            </div>
        </div>
    </div>
  )
}

export default AdminPanel
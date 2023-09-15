import React from 'react'
import '../Resources/StyleSheet/Login.css'
function Login() {

    const HandleLogin = ()=>{
        
    }
  return (
    <div className='form'>
        <form>
            <div className='form_comp'>
                <label>
                    Project Name
                </label>
                <input type='text'>
                </input>
            </div >
            <div className='form_comp'>
                <label>
                    Project Description
                </label>
                <input type='text'>
                </input>
            </div>
            <div className='form_comp'>
                <label>
                    Link
                </label>
                <input type='text'>
                </input>
            </div>
        </form>
        <button className='btn btn-primary' onClick={()=>HandleLogin()}>Login</button>
    </div>
  )
}

export default Login
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/HomePage/Home';
import Blog from './Component/My_Blog/Blog';
import NavBar from './Component/NavBar/NavBar';
import Project from './Component/Projects/Project';
import About from './Component/AboutMe/About';
import FeedBack from './Component/FeedBack/FeedBack';
import AdminPanel from './Component/Admin-page/AdminPanel';
import { useState } from 'react';

function App() {
  const [auth , setAuth] = useState(false);

  const authorize = ()=>{
    setAuth(true);
  }
  return (
    
    <BrowserRouter>
      <NavBar authorize = {authorize} auth = {auth}></NavBar>
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/my-blog" element={<Blog />} />
        <Route path="/My-Project" element={<Project auth = {auth}/>} />
        <Route path="/about-me" element={<About />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/Admin-panel" element={<AdminPanel/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

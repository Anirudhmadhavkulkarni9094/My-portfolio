import React from 'react';
import '../Resources/StyleSheet/Home.css'
import FeedbackTest from '../FeedBack/FeedbackTest';
function Home() {

  return (
    <>
      <div className='row home'>
        <div className='col-lg-6 text-light d-flex justify-content-center align-items-center my-5'>
          <h1 className='Intro-home'>Welcome to My portfolio</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-center W-50'>
          <img src={require("../Resources/Img/Earth.gif")} className='image'  alt='Earth' />
        </div>
      </div>
      <div className='testimonial'>
        <h1>Look what others have to say!</h1>
        <div className='test-card'>
        <FeedbackTest/>
        </div>
      </div>
    </>
  );
}

export default Home;

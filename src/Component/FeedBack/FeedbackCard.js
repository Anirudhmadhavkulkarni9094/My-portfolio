import React from 'react'
import '../Resources/StyleSheet/FeedbackCard.css'
function FeedbackCard({feedback}) {
  return (
    <>
    <div className='Feedback-card'>
        <div className='feedback-name'>
            <h5>{feedback.name}</h5>
        </div>
        <div className='feedback-message'>
            <p>{feedback.message}</p>
        </div>
    </div>
    </>
  )
}

export default FeedbackCard
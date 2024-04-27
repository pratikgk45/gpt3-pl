import React from 'react'
import './Possibility.css'
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Over 300 applications are delivering GPT-3–powered search, conversation, text completion, and other advanced AI features through our API.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
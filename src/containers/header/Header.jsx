import React, { useEffect, useState } from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  const [count, setCount] = useState(1600 + Math.floor(Math.random() * 50));

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + Math.floor(Math.random() * 20));
    }, 30000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something awesome with GPT-3
        </h1>
        <p>
          Over 300 applications are delivering GPT-3–powered search, conversation, text completion, and other advanced AI features through our API.
        </p>
        <div className="gpt3__header-content__input">
          <input  type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>
            <b>{count}</b> sign ups in the last 24 hours
          </p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div>
    </div>
  );
};

export default Header;

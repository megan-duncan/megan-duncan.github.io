import React from "react";

const BlogIndex = ({ setView }) => {
  const handleClick = (string) => {
    setView(string)
  }
   return (
    <>
      <div className="blogindex">
        <div className="blogname" onClick={() => handleClick('identity')}>
          <p className="bloglink">My Identity, Values and Strengths</p>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="learning-plan2.html"><p>My Bootcamp Learning Plan</p></a>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="html-css.html"><p>Margin, Border or Padding</p></a>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="emotional-quotient.html"><p>Emotional Quotient</p></a>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="javascript-dom.html"><p>Javascript and The DOM</p></a>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="neuroplasticity.html"><p>Neuroplasticity and Growth Mindset</p></a>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="problem-solving.html"><p>Problem Solving</p></a>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="learning-plan.html"><p>My Foundations Learning Plan</p></a>
        </div>
        <div className="blogname" onClick={() => handleClick('home')}>
          <a className="bloglink" href="foundations-reflection.html"><p>Foundations Reflection</p></a>
        </div>
      </div>
    </>
    )
};

export default BlogIndex;
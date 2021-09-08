import React from "react";

const Home = () => {
   return (
     <>
      <div className='page'>
        <p className="page-title">Kia ora, Welcome to my webpage!</p> 
        <div className='pageContent'>
          <div className="section">
            <p>This is where you will one day be able to read blog posts written by me. It is currently somewhat light on the content, so do bear with.</p>
            <p>For now, you can use this page to learn a bit about me, Megan (aka the gal staring at you from that photo on the left down there vv)</p>
            <p>I'm based in Wellington, though I am originally from the West Coast of the South Island, and I spend most weekends in Waikanae Beach.</p>
          </div>
        </div>
        <div className='pageContent'>
          <div className="headerimage">
            <img src="images/headshot.jpg" alt="A picture of Megan Duncan" className="headshot"/>
            <p>This is me posing for a headshot.</p>
          </div>
          <div className="headerimage">
            <img src="images/Pipi.jpg" alt="A picture of Megan's dog Pipi" className="headshot"/>
            <p>This is Pipi posing for a headshot.</p>
          </div>
        </div>
        <div className='pageContent'>
          <div>
            <p>I enjoy surfing, reading, going for walks with my girlfriend and our dog Pipi (aka the gal staring at you from that photo on the right up there ^^), and I spend far too much time watching Netflix.</p>
            <p>I've been in the hairdressing industry for 12 years and I am ready for a change, so here I am.</p>
          </div>
        </div>
      </div>
    </>
    )
};

export default Home;
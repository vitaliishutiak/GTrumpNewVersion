import React from 'react';
import './About.css';

const About = React.forwardRef(({ titleImg }, ref) => (
  <div className="about_page" ref={ref}>
    <div className="about_left-context">
      <h2 className='about_title'>GIGATRUMP</h2>
      <div className="context_button"><h3>$GTRUMP</h3></div>
      <p className='about_text'>
        GigaTrump is the bullish narrative of the Trump 
        meta representing our conviction for the better 
        future with the right president.
      </p>
      <button className='about_button'>Buy Token</button>
    </div>
    <div className='about_right-img'>
      <img className='about_img' src={titleImg} alt="Title" />
    </div>
  </div>
));

export default About;

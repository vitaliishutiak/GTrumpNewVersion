import React from 'react';
import './Art.css';

const Art = React.forwardRef(({ artImgs }, ref) => (
  <div className="links_wrap" ref={ref}>
    <div className="links_container-left">
      <h2 className='links_title'>The art.</h2>
      <p className='links_text'>We don’t just make content — we create experiences. Our team is dedicated to pushing the boundaries of digital art, ensuring that every image, every design, and every piece of storytelling reflects the passion and precision we put into our work.</p>
     </div>
    <div className="links_container-right">
      {artImgs.map((img, index) => (
        <img key={index} className={`links_img${index + 1}`} src={img} alt={`Art ${index + 1}`} />
      ))}
    </div>
  </div>
));

export default Art;

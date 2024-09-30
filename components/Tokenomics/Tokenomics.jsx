import React from 'react';
import './Tokenomics.css';

const Tokenomics = React.forwardRef(({ copyImg, tokenAddress, copyToClipboard, tokenomicsImg, isPopupVisible }, ref) => (
  <div className="tokenomics_wrap" ref={ref}>
    <div className="token_wrap">
      <h4 className='token_text'>TOKEN ADDRESS:</h4>
      <div className="token_address_container">
        <img className='token_copy' onClick={copyToClipboard} src={copyImg} alt="Copy Icon" />
        <h5 className='token_address'>{tokenAddress}</h5>
        <div className={`popup ${isPopupVisible ? 'show' : ''}`}>Copied to clipboard</div>
      </div>
    </div>
    <div className="tokenomics_content">
      <div className="tokenomics_content_left">
        <h2 className='tokenomics_title1'>WHAT IS</h2>
        <h3 className='tokenomics_title2'>$GTRUMP?</h3>
        <p className='tokenomics_text'>
          $GTRUMP is the next gem of the Trump meta, launched on PumpFun 
          with a mission to become the best Trump related memecoin on SOL.
        </p>
        <button className='tokenomics_button'>Buy Token</button>
      </div>
      <div className="tokenomics_content_right">
        <img className='tokenomics_img' src={tokenomicsImg} alt="Tokenomics" />
      </div>
    </div>
  </div>
));

export default Tokenomics;

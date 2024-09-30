import React from 'react'
import './HowToBuy.css'


const HowToBuy = React.forwardRef(({ dolarImgs }, ref) => (
  <div className="howToBuy_wrap" ref={ref}>
    {/* {dolarImgs.map((img, index) => (
      <img key={index} className={`dolar${index + 1}`} src={img} alt={`Dolar ${index + 1}`} />
    ))} */}
      <div className="tokenomics_bottom_blocks">
        <div className="block">
          <h2 className='block_title'>Supply:</h2>
          <h3 className='block_text'>1 B</h3>
        </div>
        <div className="block">
          <h2 className='block_title'>Tax</h2>
          <h3 className='block_text'>0.00%</h3>
        </div>
      </div>
      <h2 className='howToBuy_title'><h2>How to buy</h2><h2>$GTRUMP?</h2></h2>
      <div className="howToBuy_cards_container">
        <div className="howToBuy_container-left">
          <div className="howToBuy_card">
            <h2 className='card_title'>1</h2>
            <h3 className='card_text'>Create a wallet with Phantom</h3>
            <p className='card_description'>Visit phantom.app and follow the simple steps to create a new account with the Phantom app or browser extension.</p>
          </div>
          <div className="howToBuy_card">
          <h2 className='card_title'>2</h2>
            <h3 className='card_text'>Get some $SOL</h3>
            <p className='card_description'>Tap the BUY button in the app to purchase Solana, or deposit $SOL to your Phantom wallet from the crypto exchange of your choice.</p>  
          </div>
        </div>
        <div className="howToBuy_container-right">
          <div className="howToBuy_card">
          <h2 className='card_title'>3</h2>
            <h3 className='card_text'>Swap $SOL for $GTRUMP</h3>
            <p className='card_description'>Tap the SWAP icon in your Phantom wallet and paste the $GTRUMP token address.Swap your $SOL for $GTRUMP.</p>
          </div>
          <div className="howToBuy_card">
          <h2 className='card_title'>4</h2>
            <h3 className='card_text'>You are now a $GTRUMP holder!</h3>
            <p className='card_description'>Welcome to the #GTrump Army!</p>
          </div>
        </div>
      </div>
  </div>
));

export default HowToBuy;

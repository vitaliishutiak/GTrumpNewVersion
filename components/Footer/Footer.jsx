import React from 'react'
import './Footer.css'
import telegramImg from '../../src/assets/telegramImg.png'
import twitterImg from '../../src/assets/twitterImg.png'
import tokenImg from '../../src/assets/tokenImg.png'
import dextoolsImg from '../../src/assets/dextoolsImg.png'

export default function 
() {
  return (
    <div className='footer' >
        <div className="social_wrap">
            <div className="social_bloks-left">
                <a href="https://x.com/GTRUMP_Sol" className='twitter'><div className="social_bloks">
                    <img className='social_img' src={twitterImg} alt="" />
                    <h2 className='bloks_text'>Twitter</h2>
                </div></a>
                <a href="https://t.me/GTRUMP_Sol" className='telegram'><div className="social_bloks">
                   <img className='social_img' src={telegramImg} alt="" />
                    <h2 className='bloks_text'>Telegram</h2>
                </div> </a> 
            </div>
            <div className="social_bloks-left">
                <a href="#" className='token'><div className="social_bloks">
                    <img className='social_img' src={tokenImg} alt="" />
                    <h2 className='bloks_text'>Dexscreener</h2>
                </div></a>
                <a href="#" className='dextools'><div className="social_bloks">
                    <img className='social_img' src={dextoolsImg} alt="" />
                    <h2 className='bloks_text'>Dextools</h2>
                </div></a>
            </div>
        </div>
    </div>
  )
}

import React from 'react';
import './Footer.css';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import YouTube from '../../assets/youtube.svg';

const Footer = () => {

  return (
    <footer className='footer'>
      <p>&copy; 2018 Slvsh LLC | All rights reserved</p>
      <section className='social-media-div'>
        
        <a target='_blank' 
          href='https://www.instagram.com/theslvsh'
          rel='noopener noreferrer'>
          <img 
            className='social-media-logos sml-ig' 
            src={Instagram}
            alt='instagram'
          />
        </a>

        <a target='_blank'
          href='https://youtube.com/theslvsh'
          rel='noopener noreferrer'>
          <img 
            className='social-media-logos sml-yt' 
            src={YouTube}
            alt='you-tube'
          />
        </a>

        <a target='_blank' 
          href='https://www.facebook.com/theslvsh'
          rel='noopener noreferrer'>
          <img 
            className='social-media-logos sml-fb' 
            src={Facebook}
            alt='facebook'
          />
        </a>
      </section>
    </footer>
  )
}

export default Footer


import React from 'react';
import './Card.css';
import Logo from '../../images/logo.png';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { CgWebsite } from 'react-icons/cg';

const Card = () => {
  return (
    <div className='card'>
      <div className='hero'>
        <h2>DEATH WISH COFFEE</h2>
        <h4>World's Strongest Coffee</h4>
      </div>
     <div className='price'>
      <div className='exact'>
        $15.50
        </div>
        </div>

      <div className='socials'>
        <div className='message lightBtn'>
          <AiOutlineMessage />
          <h4 class="messageTitle">MESSAGE</h4>
        </div>
        <div className='message lightBtn'>
          <AiOutlinePlus />
          <h4 className='messageTitle'>FOLLOW</h4>
        </div>
      </div>

      <div className='center'>
          <img src={Logo} className="logo" alt="logo" />
        </div>

      <div className='numbers'>

        <div className='number'>
          <h4>38.9K</h4>
          <span>Followers</span>
        </div>
        <div className='number'>
          <h4>4,948</h4>
          <span>Following</span>
        </div>
        <div className='number'>
          <h4>12.7K</h4>
          <span>Likes</span>
        </div>

      </div>

    <div className='info'>
      <div class="space">
        <CiLocationOn size={20} />
       <span>Nakuru,Kenya </span>
      </div>
      <div className='space'>
        <CgWebsite size={20} />
        <span>deathwishcoffee.com</span>
      </div>
      </div>

      <button>BUY NOW</button>
    </div>
  )
}

export default Card

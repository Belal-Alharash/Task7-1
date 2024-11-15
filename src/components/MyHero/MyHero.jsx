import React from 'react'
import './MyHero.css'
import heroShape1 from "./../../assets/Images/heroShape1_1.webp"
import heroShape2 from "./../../assets/Images/heroShape1_2.webp"
import person from "./../../assets/Images/heroThumb1_1.webp"
import profilePicture from "./../../assets/Images/profileShape1_1.webp"
import circle from "./../../assets/Images/heroShape1_3.webp"
import { PiPulse } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsCursorFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";


export default function MyHero() {
  return (
    <>
      <section className='bh-hero'>
        <img src={person} alt="lines" className='bh-hero-person' />

        <div className='bh-part1'>
          <button className='bh-button1'><span className='pulse'><PiPulse /></span>Everything You Need To Create A Website</button>
          <h2><span className='span3'>Business Innovation</span> With <span className='span1'>IT <span className='span2'>Servicse <span className='span4'>Expertise</span> </span></span></h2>
          <div className='bh-ul'>
            <ul>
              <li><span><GiCheckMark /></span>Deplayment and Support</li>
              <li><span><GiCheckMark /></span>Discovery and Analysis</li>
            </ul>
            <ul>
              <li><span><GiCheckMark /></span>Flexibility and Adaptability</li>
              <li><span><GiCheckMark /></span>Competitive Advantage</li>
            </ul>
          </div>
          <button className='bh-button2' >GET STARTED <span className='bh-arrow-span'><HiArrowNarrowRight /></span></button>
        </div>
        <img src={heroShape1} alt="lines" className='bh-hero-lines' />
        <div className='bh-hero-cursor1'><BsCursorFill /></div>
        <div className='bh-hero-cursor1-word1'>Solation</div>
        <div className='bh-hero-cursor2'><BsCursorFill /></div>
        <div className='bh-hero-cursor1-word2'>Technology</div>
        <img src={heroShape2} alt="lines" className='bh-hero-lines2' />

        <div className='bh-hero-profile'>
          <div className='bh-hero-profile-border'>
            <h3 ><FaStar className='star' /> Trustipilot </h3>
            <div className='bh-hero-profile-picture'>
              <img src={profilePicture} alt='profile' />
              <div className='bh-hero-profile-star'>
                <FaStar className='star' />
                <FaStar className='star' />
                <FaStar className='star' />
                <p>450+ reviews</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Google</h3>
            <div className='bh-hero-profile-picture '>
              <img src={profilePicture} alt='profile' />
              <div className='bh-hero-profile-star'>
                <FaStar className='star' />
                <FaStar className='star' />
                <FaStar className='star' />
                <p>450+ reviews</p>
              </div>
            </div>
          </div>
        </div>
        <img src={circle} alt="circle" className='bh-hero-circle' />
        <div className="bh-hero-point">
          <TbPointFilled />
        </div>

      </section>

    </>
  )
}

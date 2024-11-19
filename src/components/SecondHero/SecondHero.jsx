import React from 'react'
import './SecondHero.css'
import Hero2 from './../../assets/Images/SecondHero/SecondHero.webp'
import lineElement from './../../assets/Images/SecondHero/line-element.webp'
import element from './../../assets/Images/SecondHero/element.webp'
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";

export default function SecondHero({point ,title}) {
  return (
    <>
        <div className='bh-father-hero2'>
            <img src={Hero2} alt="hero" className='bh-hero2'/>
            <div className='bh-bg-hero2'></div>
            <img src={lineElement} alt="line" className='bh-hero2-line'/>
            <img src={element} alt="element" className='bh-hero2-element'/>
            <div className='bh-hero2-title'>
                <h2>{title}</h2>
                <p>Home <IoIosArrowForward />{title}</p>
            </div>
            <div className={ point ? "bh-hero2-point" : "bh-hero2-about-point"}>
                <TbPointFilled />
            </div>
        </div>
    </>
  )
}

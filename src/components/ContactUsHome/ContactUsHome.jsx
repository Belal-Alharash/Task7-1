import React from 'react'
import './ContactUsHome.css'
import person from './../../assets/Images/ContactUsHome/ctaThumb1_1.webp'
import lines from './../../assets/Images/ContactUsHome/ctaShape1_1.webp'
import Title from './../Title/Title'
import MyButton from './../MyButton/MyButton'


export default function ContactUsHome() {
  return (
    <>
      <section className='bh-ContactUsHome'>
        <div className='bh-ContactUsHome-title-img'>
          <img className='bh-ContactUsHome-person me-4' src={person} />
          <div className='mt-4'>
            <Title title={"CONTACT US"} white={true} />
            <h3>24/7 Expert Hosting Support Our <span>Customers Love</span></h3>
          </div>
        </div>
          <MyButton buttonText={"TALK TO A SPECIALIST"} buttonClass={"bh-ContactUsHome-button"}/>
        <img className='bh-ContactUsHome-line' src={lines} />
      </section>
    </>
  )
}

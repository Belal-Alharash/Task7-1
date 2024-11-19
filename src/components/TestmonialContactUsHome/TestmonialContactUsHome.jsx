import React from 'react'
import './TestmonialContactUsHome.css'
import ContactUsHome from '../ContactUsHome/ContactUsHome'
import Testmonial from '../Testmonial/Testmonial'

export default function TestmonialContactUsHome() {
  return (
    <>
      <section className='bh-TestmonialContactUsHome'>
        <div className='container'>
          <ContactUsHome />
          <Testmonial />
        </div>

      </section>
    </>
  )
}

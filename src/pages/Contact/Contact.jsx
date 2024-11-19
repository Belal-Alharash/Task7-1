import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SecondHero from '../../components/SecondHero/SecondHero'
import MovingBarBrands from './../../components/MovingBarBrands/MovingBarBrands'
import ContactSection from '../../components/ContactSection/ContactSection'
import Footer from '../../components/Footer/Footer'


export default function Contact() {
  return (
    <>
      <NavBar show={false} />
      <SecondHero point={true} title={"Contact Us"} />
      <ContactSection /> 
      <Footer />

    </>
  )
}

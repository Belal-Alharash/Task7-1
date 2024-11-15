import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SecondHero from '../../components/SecondHero/SecondHero'

export default function Contact() {
  return (
    <>
      <NavBar show={false}/>
      <SecondHero point={true} title={"Contact Us"}/>
    </>
  )
}

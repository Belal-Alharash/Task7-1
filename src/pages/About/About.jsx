import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SecondHero from '../../components/SecondHero/SecondHero'

export default function About() {
  return (
    <>
      <NavBar show={false}/>
      <SecondHero point={false} title={"About Us"}/>
    </>
  )
}

import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MyHero from '../../components/MyHero/MyHero'

export default function Home() {
  return (
    <>
      <NavBar show={true}/>
      <MyHero /> 
    </>
  )
}

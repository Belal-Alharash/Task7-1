import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SecondHero from '../../components/SecondHero/SecondHero'
import MovingBarBrands from './../../components/MovingBarBrands/MovingBarBrands'
import aboutBrandLogo from './../../assets/Images/MovingSlide/asterisk.svg'
import TeamMembers from '../../components/TeamMembers/TeamMembers'
import Footer from '../../components/Footer/Footer'




export default function About() {
  return (
    <>
      <NavBar show={false} />
      <SecondHero point={false} title={"About Us"} />
      <MovingBarBrands
        border={false}
        img1={aboutBrandLogo}
        img2={aboutBrandLogo}
        img3={aboutBrandLogo}
        img4={aboutBrandLogo}
        text={true}
        text1={"Cyber Security"}
        text2={"IT Solution"}
        text3={"Technology"}
        text4={"Data Security"}
      />
      <TeamMembers />
      <Footer />
    </>
  )
}

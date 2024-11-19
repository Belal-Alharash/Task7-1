import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MyHero from '../../components/MyHero/MyHero'
import MovingBarBrands from './../../components/MovingBarBrands/MovingBarBrands'
import Pricing from '../../components/Pricing/Pricing'
import Services from '../../components/Services/Services'
import brands1 from './../../assets/Images/MovingSlide/brandLogo1_1.svg'
import brands2 from './../../assets/Images/MovingSlide/brandLogo1_2.svg'
import brands3 from './../../assets/Images/MovingSlide/brandLogo1_3.svg'
import brands4 from './../../assets/Images/MovingSlide/brandLogo1_4.svg'
import brands5 from './../../assets/Images/MovingSlide/brandLogo1_5.svg'
import TestmonialContactUsHome from '../../components/TestmonialContactUsHome/TestmonialContactUsHome'
import Blogs from '../../components/Blogs/Blogs'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <NavBar show={true}/>
      <MyHero />
      <MovingBarBrands
        border={true}
        img1={brands1}
        img2={brands2}
        img3={brands3}
        img4={brands4}
        img5={brands5}
        text={false}
      /> 
      <Services />
      <Pricing />
      <TestmonialContactUsHome />
      <Blogs />
      <Footer />
    </>
  )
}

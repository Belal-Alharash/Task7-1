 import React from 'react'
import './MovingBarBrands.css'
import brands1 from './../../assets/Images/MovingSlide/brandLogo1_1.svg'
import brands2 from './../../assets/Images/MovingSlide/brandLogo1_2.svg'
import brands3 from './../../assets/Images/MovingSlide/brandLogo1_3.svg'
import brands4 from './../../assets/Images/MovingSlide/brandLogo1_4.svg'
import brands5 from './../../assets/Images/MovingSlide/brandLogo1_5.svg'

export default function MovingBarBrands({border ,img1 ,img2 ,img3 ,img4 ,img5 ,text ,text1 ,text2 ,text3 ,text4}) {
  return (
    <section className={`bh-brands ${border ? "bh-brand-border" : ""}`}>
      <div className='bh-brand-logo'>
        <div className='d-flex align-items-center mx-3'>
          <img src={img1} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span className='bh-brand-about-text'>{text1}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img2} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text2}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img3} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text3}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img4} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text4}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img5} className='bh-brand-img'/>
        </div>

        <div className='d-flex align-items-center mx-3'>
          <img src={img1} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text1}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img2} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text2}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'> 
          <img src={img3} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text3}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img4} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text4}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img5} className={text ? "bh-brand-about-img" : "bh-brand-img"}/>
        </div>

        <div className='d-flex align-items-center mx-3'>
          <img src={img1} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text1}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img2} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text2}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img3} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text3}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img4} className={text ? "bh-brand-about-img" : "bh-brand-img"} alt="brands-img" />
          {
            text && (<span span className='bh-brand-about-text'>{text4}</span>)
          }
        </div>
        <div className='d-flex align-items-center mx-3'>
          <img src={img5} className='bh-brand-img'/>
        </div>
      </div>
    </section>
  );
}

import React from 'react'
import './Pricing.css'
import Title from './../Title/Title'
import arrowPrice from './../../assets/Images/Pricing/pricingIcon1_2.svg'
import { Col, Row } from 'react-bootstrap'
import PricingCard from '../PricingCard/PricingCard'
import img from './../../assets/Images/Pricing/pricingShape1_1.webp'
import img2 from './../../assets/Images/Pricing/pricingShape1_2.webp'


export default function Pricing() {
    return (
        <>
            <section className='bh-pricing'>
                <div className='bh-pricing-text'>
                    <Title title={"OUR PRICING"} />
                    <h3>Our Awesome Pricing <span> Plans</span></h3>
                </div>
                <div className='bh-pricing-button-arrow'>
                    <div className='bh-pricing-father-yearly'>
                        <span className='bh-pricing-monthly'>Monthly</span>
                        <span className='bh-pricing-yearly'>Yearly</span>
                    </div>
                    <div className='bh-pricing-arrow'>
                        <img src={arrowPrice} alt="arrowPrice" />
                        <span>Save 25%</span>
                    </div>
                </div>
                <div className='container my-4'>
                    <Row >
                        <Col lg={4} md={6} sm={12} className='mb-4'>
                            <PricingCard blue={true} />
                        </Col>
                        <Col lg={4} md={6} sm={12} className='mb-4'>
                            <PricingCard blue={false} />
                        </Col>
                        <Col lg={4} md={12} sm={12} className='mb-4'>
                            <PricingCard blue={true} />
                        </Col>
                    </Row>
                </div>
                <img src={img} className='bh-pricing-hand' />
                <img src={img2} className='bh-pricing-dimaond' />
            </section>

        </>
    )
}

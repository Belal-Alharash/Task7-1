import React from 'react'
import './Services.css'
import Title from './../Title/Title.jsx'
import MyButton from '../MyButton/MyButton.jsx'
import ServicesCard from '../ServicesCard/ServicesCard.jsx'
import ServicesCardData from './../../data/ServicesCardData.jsx'
import { Col, Row } from 'react-bootstrap'
import ServicseVideo from '../ServicseVideo/ServicseVideo.jsx'

export default function Services() {
    return (
        <>
            <section className='my-5 py-5'>
                <div className="container">
                    <Title title={"OUR SERVICES"} />
                    <div className='bh-services-text'>
                        <h3>Elvating Businesses With IT <span> Ingenuity </span></h3>
                        <div className='bh-services-cursore-button'>
                            <div className='bh-services-button-makingleft'>
                                <MyButton buttonClass={"bh-services-button bh-services-button-left"} />
                            </div>
                            <MyButton buttonClass={"bh-services-button bh-services-button-right"} />
                        </div>
                    </div>
                    <div className='bh-services-marginbottom-video'>
                        <Row>
                            {ServicesCardData.map((info, index) => (
                                <Col
                                    key={index}
                                    lg={3}
                                    md={6}
                                    sm={12}
                                >
                                    <ServicesCard
                                        iconImg={info.iconImg}
                                        title={info.title}
                                        description={info.description}
                                        buttonTrue={true}
                                        isVideo= {false}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <ServicseVideo/>
                
                

            </section>
        </>
    )
}
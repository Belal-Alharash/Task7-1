import React from 'react'
import './ServicseVideo.css'
import ServicesCard from '../ServicesCard/ServicesCard'
import { Col, Row } from 'react-bootstrap'
import ServicesCardVideoData from '../../data/ServicesCardVideoData'


export default function ServicseVideo() {
    return (
        <>
            <div className='bh-services-video mt-5'>
                <div className='container bh-services-videoplay-position'>
                    <iframe className='bh-services-videoplay'
                        src="https://www.youtube.com/embed/GDlkCkcIqTs?si=1q3bpyml4eZDYp85"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className='bh-services-video-cards'>
                    <div className='container'>

                        <Row className='bh-services-video-card-Acard '>
                            {ServicesCardVideoData.map((info, index) => (
                                <Col
                                    key={index}
                                    lg={3}
                                    md={6}
                                    sm={12}
                                >
                                    <ServicesCard
                                        theNum={info.theNum}
                                        position={info.position}
                                        secondDescription={info.secondDescription}
                                        buttonTrue={false}
                                        isVideo={true}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>

        </>
    )
}
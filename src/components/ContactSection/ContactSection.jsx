import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactCard from '../ContactCard/ContactCard'
import { Col, Row } from 'react-bootstrap'


export default function ContactSection() {
    return (
        <>
            <Row className='container py-5 g-5 my-2 mx-auto d-flex align-items-center'>
                <Col lg={6} md={12} sm={12}>
                    <ContactCard />
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <ContactForm />
                </Col>
            </Row>
            <iframe className='w-100 my-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.0001592752315!2d35.804181225371394!3d35.52899373832377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ada7c38f8879%3A0x5f66e4e99dbb7a47!2sfocal%20X%20agency!5e0!3m2!1sar!2snl!4v1731881910055!5m2!1sar!2snl" height="400px" loading="lazy"></iframe>
        </>
    )
}

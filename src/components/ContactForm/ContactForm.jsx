import React from 'react'
import './ContactForm.css'
import { Col, Row } from 'react-bootstrap'
import MyButton from '../MyButton/MyButton'

export default function ContactForm() {
    return (
        <>
            <div className="bh-contact-form">
                <h3>Ready to Get Started?</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis eius obcaecati doloremque recusandae, error deserunt reiciendis,
                    tenetur esse blanditiis sed nulla. Incidunt.
                </p>
                <form className='w-100 my-4'>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='mb-4'>
                            <label htmlFor="name">Your Name*</label>
                            <input id="name" type="text" />
                        </Col>
                        <Col lg={6} md={6} sm={12} className='mb-4'>
                            <label htmlFor="email">Your Email*</label>
                            <input id='email' type="email" />
                        </Col>
                        <Col lg={12} md={12} sm={12} >
                            <label htmlFor="message">Write Message*</label>
                            <textarea className='bh-contact-textarea' id="message" type='text'></textarea>
                        </Col>
                    </Row>
                </form>
                <MyButton buttonText="Send Message" buttonClass='bh-contact-form-button' />
            </div>
        </>
    )
}

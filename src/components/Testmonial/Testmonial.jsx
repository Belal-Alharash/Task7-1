import React from 'react'
import './Testmonial.css'
import TestmonialCard from './../TestmonialCard/TestmonialCard'
import TestmonialCardData from '../../data/TestmonialCardData'
import Title from './../Title/Title'
import { Col, Row } from 'react-bootstrap'
import { IoIosCube } from "react-icons/io";
import { PiCubeTransparentFill } from "react-icons/pi";






export default function Testmonial() {
  return (
    <>
      <section className='bh-test'>
        <div className='bh-test-text mb-5'>
          <Title title={"TESTIMONIALS"} />
          <h3>Our Latest Client <span> Feedback</span></h3>
        </div>
        <Row className='d-flex justify-content-center'>
          {TestmonialCardData.map((info, index) => (
            <Col
              key={index}
              lg={4}
              md={6}
              sm={12}
              className=' mb-4'
            >
              <TestmonialCard
                OpinionPerson={info.OpinionPerson}
                personImg={info.personImg}
                personName={info.personName}
                personeJop={info.personeJop}
                active={info.active}
              />
            </Col>
          ))}
        </Row>
        <div className='bh-test-scroll'>
          <div></div>
        </div>
        <IoIosCube className='bh-test-cube-yellow'/>
        <PiCubeTransparentFill className='bh-test-cube-blue'/>


      </section>
    </>
  )
}

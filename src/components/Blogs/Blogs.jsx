import React from 'react'
import './Blogs.css'
import Title from '../Title/Title'
import MyButton from '../MyButton/MyButton'
import BlogCardData from "./../../data/BlogCardData"
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../BlogCard/BlogCard'

export default function Blogs() {
    return (
        <section className="container my-5 py-5">
            <Title title={"BLog & NEWS"} />
            <div className='bh-blog-text'>
                <h3>Featured News And Insights <span> Ingenuity </span></h3>
                <div className='bh-blog-cursore-button'>
                    <div className='bh-blog-button-makingleft'>
                        <MyButton buttonClass={"bh-blog-button bh-blog-button-left"} />
                    </div>
                    <MyButton buttonClass={"bh-blog-button bh-blog-button-right"} />
                </div>
            </div>
            <Row className='d-flex justify-content-center'>
                {BlogCardData.map((data, index) => (
                    <Col
                        key={index}
                        lg={4}
                        md={6}
                        sm={12}
                    >
                       <BlogCard 
                       cardBg={data.cardBg}
                       title={data.title}
                       date={data.date}
                       desc={data.desc}
                       personImg={data.personImg}
                       personName={data.personName}
                       position={data.position}
                       /> 




                    </Col>
                ))}
                
            </Row>



        </section>
    )
}

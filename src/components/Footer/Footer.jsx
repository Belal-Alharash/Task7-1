import React from 'react'
import './Footer.css'
import { Col, Row } from 'react-bootstrap'
import logo from './../../assets/Images/Footer/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import post1 from './../../assets/Images/Footer/footerThumb1_1.webp'
import post2 from './../../assets/Images/Footer/footerThumb1_2.webp'
import MyButton from './../MyButton/MyButton'




export default function Footer() {
    return (
        <>
            <section className='bh-footer-bg'>
                <div className='container '>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='p-1 mb-5' >
                            <div className='bh-footer-logo'>
                                <img src={logo} />
                                <span>Extech</span>
                            </div>
                            <p className='bh-footer-part-p'>
                                Extexh IT is a Phasellus ultricies aliquam volutpat ullamcorper loareet neque, a lachinia curabitur lacinia mollis
                            </p>
                            <div>
                                <a href='#' className='bh-footer-icon'><FaFacebookF /></a>
                                <a href="#" className='bh-footer-icon'><FaTwitter /></a>
                                <a href="#" className='bh-footer-icon'><FaYoutube /> </a>
                                <a href="#" className='bh-footer-icon'><FaInstagram /></a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-1 mb-5'>
                            <h3 className='bh-footer-h3'>Quick Links</h3>
                            <div className="bh-footer-lineLeftArrow"></div>
                            <Link to={"/About"} className='bh-footer-part2-a my-3'>
                                <MdKeyboardDoubleArrowRight className='bh-footer-part2-icon' />
                                Extech About
                            </Link>
                            <Link to={"/"} className='bh-footer-part2-a my-3'>
                                <MdKeyboardDoubleArrowRight className='bh-footer-part2-icon' />
                                Our Services
                            </Link>
                            <Link to={'/'} className='bh-footer-part2-a my-3'>
                                <MdKeyboardDoubleArrowRight className='bh-footer-part2-icon' />
                                Our Blogs
                            </Link>
                            <Link to={'/'} className='bh-footer-part2-a my-3'>
                                <MdKeyboardDoubleArrowRight className='bh-footer-part2-icon' />
                                FAQ'S
                            </Link>
                            <Link to={'/Contact'} className='bh-footer-part2-a mt-3'>
                                <MdKeyboardDoubleArrowRight className='bh-footer-part2-icon' />
                                Contact US
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-1 mb-5'>
                            <h3 className='bh-footer-h3'>Recent Posts</h3>
                            <div className="bh-footer-lineLeftArrow"></div>
                            <div className='bh-footer-part3 mb-4'>
                                <img src={post1} />
                                <div className='bh-footer-part3-text'>
                                    <div className='bh-footer-part3-text-date'>
                                        <MdDateRange />
                                        <span>15th April, 2024</span>
                                    </div>
                                    <p>Top 5 Most Famous Technology Trend In 2024</p>
                                </div>
                            </div>
                            <div className='bh-footer-part3 mb-4'>
                                <img src={post2} />
                                <div className='bh-footer-part3-text'>
                                    <div className='bh-footer-part3-text-date'>
                                        <MdDateRange />
                                        <span>20th June, 2024</span>
                                    </div>
                                    <p>The Surfing Man Will Blow Your Mind</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-1 mb-5'>
                            <h3 className='bh-footer-h3'>Recent Posts</h3>
                            <div className="bh-footer-lineLeftArrow"></div>
                            <a className='bh-footer-part4-p'><span><MdEmail /></span>info@example.com</a>
                            <p className='bh-footer-part4-p'><span><FaPhoneAlt /></span>+208-6666-0112</p>
                            <form className='bh-footer-part4-form'>
                                <div className='bh-footer-part4-father-input'>
                                    <input type="email" placeholder='Your email address'/>
                                    <MyButton buttonClass={"bh-footer-part4-button"}/>
                                </div>
                                <div className='bh-footer-part4-father-checkbox'>
                                    <input type="checkbox" />
                                    <p>I agree to the <a href="#">Privacy Policy</a></p>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

import React from 'react'
import './TestmonialCard.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { RiDoubleQuotesR } from "react-icons/ri";
import line from './../../assets/Images/Testimonials/testimonialShape3_1.webp'

export default function TestmonialCard({ OpinionPerson, personImg, personName, personeJop, active }) {
    return (
        <>
            <div className={`bh-test-card ${!active ? 'bh-test-card-active' : ""} `}>
                <div className='bh-test-star mb-3'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                </div>
                <p className={`bh-test-card-opinion ${!active ? 'bh-test-card-opinion-active' : ""} `}>
                    <q>{OpinionPerson}</q>
                </p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img src={personImg} alt="person img" />
                        <div className='bh-test-card-name '>
                            <p className={`bh-test-card-name-p1 ${!active ? "bh-test-card-name-p1-active" : ""}`}>
                                {personName}
                            </p>
                            <p className={`bh-test-card-name-p2 ${!active ? "bh-test-card-name-p2-active" : ""}`}>
                                {personeJop}
                            </p>
                        </div>
                    </div>
                    <span className={`bh-test-card-comma ${!active ? "bh-test-card-comma-active" : ""}`}>
                        <RiDoubleQuotesR />
                    </span>
                </div>
                <img src={line} className={`bh-test-card-line ${!active ? "bh-test-card-line-active" : ""}`} />

            </div>
        </>
    )
}

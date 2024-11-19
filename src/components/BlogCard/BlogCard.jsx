import React from 'react'
import './BlogCard.css'
import MyButton from '../MyButton/MyButton'

export default function BlogCard({ cardBg, title, date, desc, personImg, personName, position }) {
    return (
        <>
            <div className='bh-blog-card'>
                <img className='bh-blog-card-bg' src={cardBg} />
                <div className='bh-blog-card-content'>
                    <div className='bg-blog-card-header'>
                        <h3>{title}</h3>
                        <span>{date}</span>
                    </div>
                    <p className='bh-blog-card-content-desc'>{desc}</p>
                    <div className='bh-blog-card-end'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <img src={personImg} alt="person img" />
                            <div className='bh-blog-card-father-name'>
                                <p className='bh-blog-card-name'>
                                    {personName}
                                </p>
                                <p className='bh-blog-card-position'>
                                    {position}
                                </p>
                            </div>
                        </div>
                        <MyButton buttonClass={"bh-blog-card-button"} />
                    </div>
                </div>
            </div>
        </>
    )
}

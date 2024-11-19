import React from 'react'
import './ServicesCard.css'
import MyButton from '../MyButton/MyButton'

export default function ServicesCard({ iconImg, title, description, theNum, position, secondDescription, isVideo, buttonTrue }) {
    return (
        <>
            <div className={!isVideo ? 'bh-services-card' : 'bh-services-card-video'}>
                {
                    !isVideo && (
                        <div className='bh-services-card-icon-father'>
                            <img src={iconImg} alt="icon" />
                        </div>
                    )
                }
                {
                    isVideo && (
                        <span className='bh-services-card-number'>{theNum}</span>
                    )
                }
                <h3>{title}{position}</h3>
                <p>{description}{secondDescription}</p>
                {
                    buttonTrue && (
                        <MyButton buttonText={"Read more >>"} buttonClass={"bh-services-card-button"} />
                    )
                }
            </div>
        </>
    )
}

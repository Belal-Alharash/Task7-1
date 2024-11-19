import React from 'react'
import './ContactCard.css'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";


export default function ContactCard() {
    return (
        <>
            <div className='bh-contact-card'>
                <div className='bh-contact-card-part'>
                    <div className='bh-contact-card-icon'>
                        <BiSolidPhoneCall />
                    </div>
                    <div className='bh-contact-card-info'>
                        <p>Call Us 7/24</p>
                        <p className='bh-contact-card-info-num'>+208-555-0112</p>
                    </div>
                </div>
                <div className='bh-contact-card-part'>
                    <div className='bh-contact-card-icon'>
                        <MdAttachEmail />
                    </div>
                    <div className='bh-contact-card-info'>
                        <p>Make a Quote</p>
                        <p className='bh-contact-card-info-num'>Infotech@gmail.com</p>
                    </div>
                </div>
                <div className='bh-contact-card-part bh-contact-card-part-border-none'>
                    <div className='bh-contact-card-icon'>
                        <ImLocation2 />
                    </div>
                    <div className='bh-contact-card-info'>
                        <p>Location</p>
                        <p className='bh-contact-card-info-num'>4517 Washington ave.</p>
                    </div>
                </div>
                <div className='bh-contact-card-video'>
                    <iframe
                        className='bh-contact-card-videoplay'
                        src="https://www.youtube.com/embed/QFaFIcGhPoM?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>

                </div>
            </div>




        </>
    )
}

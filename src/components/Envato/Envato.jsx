import React from 'react'
import './Envato.css'
import envatoG from './../../assets/Images/envato/envatoGrey.jpg'
import envatoB from './../../assets/Images/envato/envatoBlue.jpg'


export default function Envato() {
    return (
        <>
            <div className='container my-5 py-3'>
                <div className='bh-envato-font'>
                    <div className='bh-envato-line mb-5 me-3'></div>
                    <p className='text-center mb-5'>1k + Brands Trust Us</p>
                    <div className='bh-envato-line mb-5 ms-3'></div>
                </div>

                <div className="bh-envato-imgs">
                    <img src={envatoG} alt="envato" className='bh-envato-img bh-envato-img-none' />
                    <img src={envatoG} alt="envato" className='bh-envato-img bh-envato-img-none' />
                    <img src={envatoB} alt="envato" className='bh-envato-img' />
                    <img src={envatoG} alt="envato" className='bh-envato-img bh-envato-img-none' />
                    <img src={envatoG} alt="envato" className='bh-envato-img bh-envato-img-none' />
                </div>

            </div>
        </>
    )
}

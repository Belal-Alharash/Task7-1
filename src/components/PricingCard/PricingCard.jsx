import React from 'react'
import './PricingCard.css'
import icon from './../../assets/Images/Pricing/pricingIcon1_1.svg'
import MyButton from './../MyButton/MyButton'
import { GiCheckMark } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";

export default function PricingCard({blue}) {
    return (
        <>
            <div className='bh-pricing-card'>
                <div className={ blue ? 'bh-pricing-card-header' : 'bh-pricing-card-header bh-pricing-card-header2'}>
                    <div>
                        <p className='bh-bh-pricing-card-header-p'>Regular Plans</p>
                        <p><span>$49</span>/Month</p>
                    </div>
                    <img src={icon} alt="icon" />
                </div>
                <div className='bh-pricing-card-body'>
                    <div className='bh-pricing-card-body-part mt-2 mb-2'>
                        <div>
                            <span><GiCheckMark /></span>
                            <p>100 GB SSD Storage</p>
                        </div>
                        <span className='bh-quse'><RxQuestionMarkCircled /></span>
                    </div>
                    <div className='bh-pricing-card-body-part mb-2'>
                        <div>
                            <span><GiCheckMark /></span>
                            <p>Weekly Backups</p>
                        </div>
                        <span className='bh-quse'><RxQuestionMarkCircled /></span>
                    </div>
                    <div className='bh-pricing-card-body-part mb-2'>
                        <div>
                            <span><GiCheckMark /></span>
                            <p>Unlimited Free SSL</p>
                        </div>
                        <span className='bh-quse'><RxQuestionMarkCircled /></span>
                    </div>
                    <div className='bh-pricing-card-body-part mb-2'>
                        <div>
                            <span><GiCheckMark /></span>
                            <p>24/7 System Monitoring</p>
                        </div>
                        <span className='bh-quse'><RxQuestionMarkCircled /></span>
                    </div>
                    <div className='bh-pricing-card-body-part mb-2'>
                        <div>
                            <span><GiCheckMark /></span>
                            <p>Free Domain ($9.99 Value)</p>
                        </div>
                        <span className='bh-quse'><RxQuestionMarkCircled /></span>
                    </div>


                    <div className='bh-pricing-card-body-part mb-2'>
                        <div>
                            <span className='bh-Xmark'><FaXmark /></span>
                            <p>Frame 164326</p>
                        </div>
                        <span className='bh-quse'><RxQuestionMarkCircled /></span>
                    </div>
                    <div className='bh-pricing-card-body-part mb-2'>
                        <div>
                            <span className='bh-Xmark'><FaXmark /></span>
                            <p>20+ Payment Methods</p>
                        </div>
                        <span className='bh-quse'><RxQuestionMarkCircled /></span>
                    </div>
                </div>
                <MyButton
                    buttonText={"GET STARTED NOW"}
                    buttonClass={`${blue ? 'bh-pricing-card-button' : 'bh-pricing-card-button2'}`}
                />
            </div>



        </>
    )
}

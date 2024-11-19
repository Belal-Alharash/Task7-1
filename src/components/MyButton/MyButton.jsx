import React from 'react'
import './MyButton.css'
import { FaArrowRightLong } from "react-icons/fa6";

export default function MyButton({buttonText , buttonClass}) {
  return (
    <>
        <button className={buttonClass}>{buttonText}<span><FaArrowRightLong /></span></button>
    </>
  )
}
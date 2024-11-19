import React from 'react'
import './Title.css'
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


export default function Title({ title, white }) {
  return (
    <>
      <div className='bh-title d-flex align-items-center'>
        <div className='bh-title-iconLine d-flex align-items-center'>
          <IoMdArrowDropleft className={ !white ? 'bh-title-leftarrow' : 'bh-title-leftarrow bh-title-arrow-white '} />
          <div className={ !white ? 'bh-title-lineLeftArrow' : 'bh-title-lineLeftArrow bh-title-lineLeftArrow-white'}></div>
        </div>
        <h2 className={ !white ? 'bh-title-h2' : 'bh-title-h2 bh-title-h2-white'}>{title}</h2>
        <div className='bh-title-iconLine d-flex align-items-center'>
          <div className={ !white ? 'bh-title-lineRightArrow' : 'bh-title-lineRightArrow bh-title-lineRightArrow-white'}></div>
          <IoMdArrowDropright className={ !white ? 'bh-title-rightarrow' : 'bh-title-rightarrow bh-title-arrow-white '} />
        </div>


      </div>
    </>
  )
}

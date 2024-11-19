import React from 'react'
import './TeamMembersCard.css'
import { FaShareAlt } from "react-icons/fa";

export default function TeamMembersCard({personeImg ,personeName ,personePosition}) {
  return (
    <>  
        <div className='bh-members-card'>
            <img src={personeImg} alt="persone" />
            <a className='bh-member-icon'>
                <FaShareAlt />
            </a>
            <div className='bh-members-desc'>
                <h3>{personeName}</h3>
                <p>{personePosition}</p>
            </div>
        </div>
    </>
  )
}

import React from 'react'
import './TeamMembers.css'
import Title from '../Title/Title'
import TeamMembersCard from '../TeamMembersCard/TeamMembersCard'
import TeamCardData from './../../data/TeamCardData'
import { Col, Row } from 'react-bootstrap'
import Envato from '../Envato/Envato'
import MyButton from '../MyButton/MyButton'

export default function TeamMembers() {
    return (
        <>
            <section className='team-members container'>
                <Title title={"TEAM MEMBERS"} />
                <div className='team-member-text'>
                    <h3>Our Dedicated Team Members</h3>
                    <MyButton buttonClass={"bh-team-members-button"} buttonText={"All Members"} />
                </div>
                <Row>
                    {TeamCardData.map((data, index) => (
                        <Col
                            key={index}
                            lg={3}
                            md={6}
                            sm={12}
                            className="mb-4"
                        >
                            <TeamMembersCard
                                personeImg={data.personeImg}
                                personeName={data.personeName}
                                personePosition={data.personePosition}
                            />
                        </Col>
                    ))}
                </Row>
                <Envato />
            </section>
        </>
    )
}

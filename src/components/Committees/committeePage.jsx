import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import sektionsorgan from "./sektionsorgan.json";
import MemberCard from './memberCard';
const CommitteePage = () => {
    const { route } = useParams();
    const committee = sektionsorgan.committees.find(s => s.route === route);
    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col>
                    <h1 className="fw-bold">{committee.name}</h1>
                </Col>
            </Row>
            <Row>
                <p>{committee.longDescription}</p>
            </Row>
            <Row xs="auto" className="g-2 row-cols-auto justify-content-center">
                {committee.members?.map((member) => {
                    return <MemberCard member={member} key={member.name} />;
                })}
            </Row>

        </Container>
    )
}

export default CommitteePage;
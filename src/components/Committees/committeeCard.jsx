import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function CommitteeCard({ committee }) {
  const navigate = useNavigate();

  const handleCommitteeCardClick = () => {
    navigate(committee.route)
  }

  const handleChildElementClick = (e) => {
    e.stopPropagation()
    // Stop routing to committee page in card footer
  }

  return (
    <Card onClick={handleCommitteeCardClick} className="mt-5 m-4" style={{ width: '18rem' }}>
      <Card.Img style={{ height: '18rem', marginTop: '0' }} variant="top" src={`${process.env.PUBLIC_URL}/committees/${committee.imageUrl}`} />
      <Card.Body>
        <Card.Title className="fw-bold">{committee.name}</Card.Title>
        <Card.Text>
          {committee.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer onClick={(e) => handleChildElementClick(e)} className="text-muted">Kontakt: <a href={`mailto:${committee.email}`}>{committee.email}</a></Card.Footer>
    </Card>
  );
}

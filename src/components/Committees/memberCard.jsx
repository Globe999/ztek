import React from "react";
import { Card } from "react-bootstrap";

export default function MemberCard({ member }) {
    console.log(member.name)


  return (
    <Card className="mt-5 m-4" style={{ width: '18rem' }}>
      <Card.Img style={{ height: '18rem', marginTop: '0' }} variant="top" src={`${process.env.PUBLIC_URL}/committees/members/${member.imageUrl}`} />
      <Card.Body>
        <Card.Title className="fw-bold">{member.name}</Card.Title>
        <Card.Text>
          {member.role}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Kontakt: <a href={`mailto:${member.email}`}>{member.email}</a></Card.Footer>
    </Card>
  );
}

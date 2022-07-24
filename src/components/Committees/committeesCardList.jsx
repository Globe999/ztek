import React from "react";
import { Row } from "react-bootstrap";
import CommitteeCard from "./committeeCard";

export default function CommitteeList({ committees }) {
    return (
        // <div className="row row-cols-auto g-4 justify-content-center">
            <Row xs="auto" className="g-2 row-cols-auto justify-content-center">
                {committees?.map((committee) => {
                    return <CommitteeCard committee={committee} key={committee.route} />;
                })}
            </Row>
    );
}
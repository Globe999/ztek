import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Commitee from "./committee";

export default function CommitteeList({ committees }) {
    return (
        // <div className="row row-cols-auto g-4 justify-content-center">
        <Row xs="auto" className="g-2 row-cols-auto justify-content-center">
            {committees?.map((committee) => {
                console.log(committee.name)
                return <Commitee committee={committee} key={committee.route} />;
            })}
        </Row>
    );
}

import React, { useState } from 'react';
import { CardGroup } from "react-bootstrap";
import sektionsorgan from "./sektionsorgan.json";
import CommitteesList from './committeesCardList';

const Committees = () => {
    return (
        <React.Fragment>
            <CardGroup>
                <CommitteesList committees={sektionsorgan.committees} />
            </CardGroup>

            {/* <CardGroup>
                <CommitteesList committees={utskott} />
            </CardGroup> */}
        </React.Fragment>
    )

}

export default Committees
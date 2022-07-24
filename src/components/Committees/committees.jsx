import React, { useState } from 'react';
import { CardGroup } from "react-bootstrap";
import sektionsorgan from "./sektionsorgan.json";
import CommitteesList from './committeesList';

const Committees = () => {
    const [committees, setCommittees] = useState(sektionsorgan.committees)
    const [utskott, setUtskott] = useState(sektionsorgan.utskott)
    return (
        <React.Fragment>
            <CardGroup>
                <CommitteesList committees={committees} />
            </CardGroup>

            {/* <CardGroup>
                <CommitteesList committees={utskott} />
            </CardGroup> */}
        </React.Fragment>
    )

}

export default Committees
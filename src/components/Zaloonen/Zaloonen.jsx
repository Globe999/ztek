import React from 'react'
import Container from 'react-bootstrap/Container';

const Zaloonen = () => {
    return (
        <Container>
            <h1 className="fw-bold mt-4">Om Zaloonen</h1>
            <p>Zaloonen är Z-sektionens sektionslokal och är belägen på bottenplan i HB. Som Z-teknolog finns det möjlighet att hålla arrangemang i Zaloonen.</p>
            <br />
            <p>Inför arrangemang i Zaloonen kommer ZÅG ta ut en städdeposition som återfås vid godkänd avsyning. När man arrangerar i Zaloonen är det viktigt att tänka på att lokalen tillhör alla Z-teknologer mellan 08:00 och 17:00.
                Under tentaveckorna är vi väldigt restriktiva med arrangemang i Zaloonen då den behövs som studielokal.</p>
            <br />
            <p>Då det ofta är högt söktryck på Zaloonen har vi i stort sett ingen möjlighet att tillåta arrangemang som inte har med Z-sektionen att göra. Vi rekomenderar er som studerar på annan sektion att i första hand söka lokal inom egen sektion eller någon av chalmers icke sektionsbunda lokaler.</p>
            {/* TODO: Add calendar events */}
            <h1 className="fw-bold">Kommande bokningar</h1>

        </Container>
    );
}


export default Zaloonen
import React, { useContext } from 'react';
import { Card, Col, Row, Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import PoemsContext from "../utils/PoemsContext"
import PoemItem from "../components/poemItem"

const OnePoet = () => {
  const { poetId } = useParams();
  const { poets } = useContext(PoemsContext);
  if(poets.length === 0) return <h1>Loading... </h1>
  let poet = poets.find(poet => poet._id === poetId);
  
  return (
    <Container>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${poet.photo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
          minHeight: 400,
        }}
      >
        <Col md="4">
          <img variant="top" src={poet.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>
            {poet.firstName} {poet.lastName}
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Description</h3>
        <Card border="light" style={{ maxHeight: "500px", overflow: "auto" }}>
            {poet.description}
        </Card>
      </Row>
      <Row className="mt-5">
        <h3>Poems</h3>
        {poet.poems.map(poem => (
          <PoemItem poemId={poem} key={poem} />
        ))}
      </Row>
    </Container>
  );
}

export default OnePoet;

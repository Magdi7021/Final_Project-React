import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import PoemsContext from '../utils/PoemsContext';
import { Container, Card, Col } from 'react-bootstrap';

const Search = () => {
  const { poems, poets } = useContext(PoemsContext);
  const { key } = useParams();
  let poemsFound = [];
  let poetsFound = [];
  let isEmpty = true;
  poems.forEach(poem => {
    if (poem.title.includes(key)) {
      poemsFound.push(poem);
    }
  });
  poets.forEach(poet => {
    if (poet.firstName.includes(key)) {
      poetsFound.push(poet);
    }
    if (poet.lastName.includes(key)) {
      poets.push(poet);
    }
  });

  if (poemsFound.length > 0 || poetsFound.length > 0)
    isEmpty = false;

  return (
    <>
      {
        isEmpty ?
          (
            <Container className="my-5 text-center">
              <h1 style={{color: "#c00", fontWeight: 'bold', marginRight: "auto"}}>Ops!! NO Such Search Found!...</h1>
            </Container>
          )
        :
        (<></>)
      }
      {
        poemsFound.length > 0 ?
          (
            <Container>
              {poemsFound?.map(poem => (
                <Col md="4" key={poem._id}>
                  <Card border="light" style={{maxWidth: "200px" }}>
                    <Link to={`/poem/${poem._id}`}>
                      <Card.Img variant="top" src={poem.poster} style={{ borderRadius: "10px", objectFit: "cover" }} />
                    </Link>
                    <Card.Body>
                      <Link to={`/poem/${poem._id}`} className="text-black" style={{ textDecoration: "none" }}>
                        <Card.Title>{poem.title}</Card.Title>
                      </Link>
                      {poem.poets.map(poet => (
                        <Card.Text className="text-muted">{poet.firstName} {poet.lastName}</Card.Text>
                      ))}
                      {/* <Card.Text className="text-muted">{poem.description}</Card.Text> */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Container>
          )
        :
        (<></>)
      }
      {
        poetsFound.length > 0 ?
          (
            <Container>
              {poetsFound.map(poet => (
                <Col md="2">
                  <Card border="light" style={{ maxWidth: "200px" }}>
                    <Link to={`/poet/${poet._id}`}>
                      <Card.Img
                        variant="top"
                        src={poet.photo}
                        height="220px"
                        style={{ borderRadius: "10px", objectFit: "cover" }}
                      />
                    </Link>
                    <Card.Body>
                      <Link
                        to={`/poet/${poet._id}`}
                        className="text-black"
                        style={{ textDecoration: "none" }}
                      >
                        <Card.Title>
                          {poet.firstName} {poet.lastName}
                        </Card.Title>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Container>
          )
          :
          (<></>)
      }
    </>
  );
}

export default Search;

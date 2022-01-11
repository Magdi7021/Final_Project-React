import React, { useEffect, useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PoemsContext from '../utils/PoemsContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { profile } = useContext(PoemsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.tokenPoems)
      navigate('/login');
  });

  if (Object.keys(profile).length === 0) return <h1>Loading...</h1>;
  return (
    <>
      <Container fluid style={{
            backgroundColor: `#03DAC6`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            height: "400px"
          }}>
        <Container>
        <Row>
          <Col md={{ offset: 0, span: 3}}>
            <img
              variant="top"
              src={profile.avatar}
              width="100%"
              alt=""
              style={{
                borderRadius: "50%", maxHeight: "300px", margin: "20px"
              }}
            />
          </Col>
          <Col md={{offset: 2}}  className="my-auto">
            <h1>
              {profile.firstName} { profile.lastName}
            </h1>
            <p>{ profile.email }</p>
          </Col>
        </Row>
        </Container>
      </Container>
      <Container>
        <Row className="mt-5">
          <h3>Favourite Poems</h3>
          {profile.likes.map(poem => (
            <Col key={poem._id} md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/poem/${poem._id}`}>
                  <Card.Img
                    variant="top"
                    src={poem.poster}
                    height="220px"
                    style={{ borderRadius: "10px" }}
                  />
              </Link>
              <Card.Body>
                <Link
                  to={`/poem/${poem._id}`}
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <Card.Title>{poem.title}</Card.Title>
                  </Link>
                  {poem.poets?.map(poet => (
                    <Card.Text className="text-muted">{poet.firstName} {poet.lastName}</Card.Text>
                  ))}
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Profile;

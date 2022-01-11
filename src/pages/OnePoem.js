import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Col, Form, Image, Row, Tooltip } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import PoemsContext from "../utils/PoemsContext"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { toast } from "react-toastify"
import RatingStars from "../components/RatingStars"
import { Container } from "react-bootstrap";

const OnePoem = () => {
  const { poemId } = useParams();
  const { poems, profile, addComment, toggleLike } = useContext(PoemsContext);
  const poem = poems.find(poem => poem._id === poemId);
  const [like, setLike] = useState(false);

  console.log({ poem });
  
  useEffect(() => {
    setLike(!!poem?.like.find(id => id === profile?._id));
  });

  if (poems.length === 0)
    return <h1>Loading... </h1>;
  
  return (
    <Container>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${poem.poster}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={poem.poster} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{poem.title}</h1>
          <div className="mb-2">
            {poem.category.map(category => (
              <span>{category.name}</span>
            ))}
          </div>
          <h3>Rating</h3>
          <Row className="d-flex align-items-center">
            <Col md="2">
              <span>{poem.ratingAverage} / 5</span>
            </Col>
            <Col md="3">
              <RatingStars poemId={poem._id} />
            </Col>
            <Col md="2">

              {
                like ? 
                  (
                    <AiFillLike size={40} color={`rgb(32, 120, 244)`} onClick={() => {
                      setLike(false);
                      toggleLike(poem._id);
                    }} />
                  )
                  :
                  (
                    <AiOutlineLike size={40} onClick={() => {
                      setLike(true);
                      toggleLike(poem._id)
                    }} />
                  )
              }
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Description</h3>
        <Card border="light" style={{ maxHeight: "500px", overflow: "auto" }}>
            {poem.description}
        </Card>
      </Row>
      <Row className="mt-5">
        <h3>Poets</h3>
        {poem.poets.map(poet => (
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
                <Link to={`/poet/${poet._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>
                    {poet.firstName} {poet.lastName}
                  </Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row clasName="mt-5" style={{marginTop: "20px"}}>
        <Form onSubmit={addComment}>
          <Form.Group as={Row} className="mb-3">
            <Col md="8">
              <Form.Control type="text" name="comment" required />
              <Form.Control type="hidden" name="poemId" value={poemId} />
              <Form.Control type="hidden" name="owner" value={profile?._id} />
              {/* {localStorage.tokenPoems? (<Form.Control type="hidden" name="owner" value={profile._id} />) : (<Form.Control type="hidden" name="owner" />)} */}
            </Col>
            <Col md="4">
              <Button variant="primary" type="submit">
                Comment
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Row>
      <Row className="mt-5">
        <h3>Comments</h3>

        {poem.comments.map(comment => (
          <Card style={{ margin: 20, maxWidth: 1100 }}>
            <Row>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col md="1">
                  <Image src={comment.owner.avatar} width="80px" roundedCircle />
                </Col>
                <Col>
                  {comment.owner.firstName} {comment.owner.lastName}
                </Col>
              </Row>
              <Row>
                <Col md={{ offset: 1 }}>{comment.comment}</Col>
              </Row>
            </Row>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default OnePoem;

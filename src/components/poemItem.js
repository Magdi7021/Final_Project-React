import { useContext } from 'react';
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import PoemsContext from "../utils/PoemsContext"

function PoemItem(props) {
  const { poem, poemId } = props;
  const { poems } = useContext(PoemsContext);
  let poemItem = poem;

  if (!poem) {
    poemItem = poems.filter(poem => poem._id === poemId)[0];
  }
  
  return (
    <Col>
      <Card border="light" style={{ maxWidth: "200px" }}>
        <Link to={`/poem/${poemItem._id}`}>
          <Card.Img variant="top" src={poemItem.poster} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        <Card.Body>
          <Link to={`/poem/${poemItem._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{poemItem.title}</Card.Title>
          </Link>
          {poemItem.poets?.map(poet => (
            <Card.Text className="text-muted">{poet.firstName} {poet.lastName}</Card.Text>
          ))}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PoemItem

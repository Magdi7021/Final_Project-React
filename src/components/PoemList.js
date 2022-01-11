import React, { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import PoemsContext from "../utils/PoemsContext"

function PoemList(props) {
  const { listTitle, categoryType } = props;
  const { poems } = useContext(PoemsContext)
  let poemsCategory;
  if (categoryType) {
    poemsCategory = poems.filter(poem => poem.category.find(category => category.name === categoryType));
    poemsCategory = poemsCategory.sort((a, b) => b.ratingAverage - a.ratingAverage);
    poemsCategory = poemsCategory.slice(0, 7);
  }

  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4" style={{color: "#c00"}}>{listTitle?.charAt(0).toUpperCase() + listTitle?.slice(1)}</h4>
      </Row>
      <Row>
        {poemsCategory?.map(poem => (
          <Col md="4" key={poem._id}>
            <Card border="light"  style={{ maxWidth: "200px" }}>
              <Link to={`/poem/${poem._id}`}>
                <Card.Img variant="top" src={poem.poster} height="220px"  style={{ borderRadius: "10px", objectFit: "cover" }} />
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
      </Row>
    </>
  )
}

export default PoemList

import { Col, Form, Row, Button } from "react-bootstrap";
import bannerImage from "../assets/poems.jpg";

function Showcase() {
  return (
    <Row>
      <Col
        style={{
          backgroundImage: `url("${bannerImage}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <h1 className="text-white mb-3">Welcome</h1>
        <h2 className="text-white"> Millions of poems and people to discover. Explore now.</h2> */}
        {/* <Form className="mt-5">
          <Row>
            <Col md="8">
              <Form.Group>
                <Form.Control type="search" placeholder="Search for a movie, person" />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form> */}
      </Col>
    </Row>
  );
}

export default Showcase;

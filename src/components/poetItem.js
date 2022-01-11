import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PoetItem(props) {
  const { poet } = props;
  return (
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
  );
}

export default PoetItem;

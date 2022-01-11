import React, { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import PoetItem from '../components/poetItem';
import PoemsContext from '../utils/PoemsContext';

const AllPoets = () => {
  const { poets } = useContext(PoemsContext);

  return (
    <Container>
      <Row>
        <h4 className="mt-5 mb-4">All poets</h4>
      </Row>
      <Row md={5}>
        {poets.map(poet => (
          <PoetItem poet={poet} />
        ))}
      </Row>
    </Container>
  );
}

export default AllPoets;

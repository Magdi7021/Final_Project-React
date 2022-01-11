import React, { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import PoemItem from '../components/poemItem';
import PoemsContext from '../utils/PoemsContext';

const AllPoems = () => {
  const { poems } = useContext(PoemsContext);
  console.log({ poems });
  return (
    <Container>
      <Row>
        <h4 className="mt-5 mb-4">All Poems</h4>
      </Row>
      <Row md={5}>
        {poems.map(poem => (
          <PoemItem poem={poem} key={poem._id} />
        ))}
      </Row>
    </Container>
  );
}

export default AllPoems;

import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import PoemsList from '../components/PoemList';
import ShowCase from '../components/ShowCase';
import PoemsContext from '../utils/PoemsContext';

const Home = () => {
  const { categories } = useContext(PoemsContext);

  return (
    <Container>
      <ShowCase />
      <Row>
        <h2 className="mt-5">What's Popular</h2>
        {/* <PoemsList listTitle="What's Popular" /> */}
        {categories.map(category => <PoemsList key={category._id} listTitle={category.name} categoryType={category.name} />)}
        {/* <PoemsList listTitle="romantic" categoryTye="romantic" /> */}
      </Row>
    </Container>
  );
}

export default Home;

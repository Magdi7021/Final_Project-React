import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';
import { useParams } from 'react-router-dom';
import PoemList from '../components/PoemList';

const Category = () => {
  const {categories, poems} = useContext(PoemsContext);
  const { categoryId } = useParams();
  const category = categories.find(category => category._id == categoryId);


  console.log()
  return (
    <Container>
      <PoemList key={category?._id} listTitle={category?.name} categoryType={category?.name} />
    </Container>
  );
}

export default Category;

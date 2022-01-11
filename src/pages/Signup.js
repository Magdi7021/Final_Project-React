import React, { useEffect, useContext } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { signup } = useContext(PoemsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.tokenPoems)
      navigate(-1);
  });

  return (
    <div className="bg-light d-flex justify-content-center align-items-center" >
      <div className="bg-white px-5 my-5  border  rounded" style={{width: "40%"}}>
        <h1 className="font-bold pt-5 text-center">Sign Up</h1>
        <Form className="pt-2" onSubmit={signup}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="text-muted" row>
              First Name
            {/* <Col md="6"> */}
              <Form.Control placeholder="John" className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" type="text" name="firstName" required />
            {/* </Col> */}
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="text-muted" row>
              Last Name
            {/* <Col md="6"> */}
              <Form.Control placeholder="Doe" className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" type="text" name="lastName" required />
            {/* </Col> */}
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="text-muted" row>
              Email
            {/* <Col md="6"> */}
              <Form.Control placeholder="me@example.com" className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" type="email" name="email" required />
            {/* </Col> */}
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="text-muted" row>
              Password
            {/* <Col md="6"> */}
              <Form.Control placeholder="••••••••••" className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" type="password" name="password" required />
            {/* </Col> */}
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="text-muted" row>
              Image
            {/* <Col md="6"> */}
              <Form.Control placeholder="www.image.com/my-image.jpg" className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" type="url" name="avatar" required />
            {/* </Col> */}
            </Form.Label>
          </Form.Group>
          <Row>
            <Form.Group as={Row} className="my-4">
              <Col className="d-grid gap-5">
                <Button variant="primary" size="lg" type="submit">Sign Up</Button>
              </Col>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );

  // return (
  //   <div className="ms-4 mt-5">
  //     <h1>Sign Up</h1>
  //     <Form className="mt-5" onSubmit={signup}>
  //       <Form.Group as={Row} className="mb-3">
  //         <Form.Label column md="2">
  //           First Name
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control name="firstName" type="text" required />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group as={Row} className="mb-3">
  //         <Form.Label column md="2">
  //           Last Name
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control name="lastName" type="text" required />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group as={Row} className="mb-3">
  //         <Form.Label column md="2">
  //           Email
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control name="email" type="email" required />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group as={Row} className="mb-3">
  //         <Form.Label column md="2">
  //           Password
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control name="password" type="password" required />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group as={Row} className="mt-3">
  //         <Form.Label column md="2">
  //           Image
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control name="avatar" type="url" required />
  //         </Col>
  //       </Form.Group>
  //       <Row></Row>
  //       <Form.Group as={Row} className="my-4">
  //         <Col md={{ span: 10, offset: 2 }}>
  //           <Button type="submit">Sign Up</Button>
  //         </Col>
  //       </Form.Group>
  //     </Form>
  //   </div>
  // );
}

export default Signup;

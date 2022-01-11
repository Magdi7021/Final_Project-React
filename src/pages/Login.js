import React, {useEffect, useContext} from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useContext(PoemsContext);
  const navigate = useNavigate();

  if (localStorage.response) {
    toast.success(localStorage.response);
    localStorage.removeItem('response');
  }

  useEffect(() => {
    if (localStorage.tokenPoems)
      navigate(-1);
  });
  // return (
  //   <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
  //     <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
  //       <h1 className="font-bold text-center block text-2xl">Log In</h1>
  //       <form>
  //       <Input type="email" id="email" name="email" label="Email Address" placeholder="me@example.com" autofocus={true}/>
  //       <Input type="password" id="password" name="password" label="Password" placeholder="••••••••••" />
  //       <Button value="Submit" />
          
  //       </form>
  //     </div>
  //   </div>
  // )

  return (
    <div className="bg-light d-flex justify-content-center align-items-center" >
      <div className="bg-white px-5 my-5  border  rounded" style={{width: "40%"}}>
        <h1 className="font-bold pt-5 text-center">Login</h1>
        <Form className="pt-2" onSubmit={login}>
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
          <Row>
            <Form.Group as={Row} className="my-4">
              <Col className="d-grid gap-5">
                <Button variant="primary" size="lg" type="submit">Login</Button>
              </Col>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );

  // return (
  //   <div className="ms-4">
  //     <h1>Login</h1>
  //     <Form className="mt-5" onSubmit={login}>
  //       <Form.Group as={Row} className="mb-3">
  //         <Form.Label column md="2">
  //           Email
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control type="email" name="email" required />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group as={Row} className="mb-3">
  //         <Form.Label column md="2">
  //           Password
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control type="password" name="password" required />
  //         </Col>
  //       </Form.Group>
  //       <Row>
  //         <Form.Group as={Row} className="my-4">
  //           <Col md={{ span: 10, offset: 2 }}>
  //             <Button type="submit">Login</Button>
  //           </Col>
  //         </Form.Group>
  //       </Row>
  //     </Form>
      
  //   </div>
  // );
}

export default Login;

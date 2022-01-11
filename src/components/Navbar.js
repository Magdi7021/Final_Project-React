import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PoemsContext from '../utils/PoemsContext';
import logo2 from '../assets/logo2.png'

const NavbarItem = () => {
  const { logout, poets, categories } = useContext(PoemsContext);
  const poemsLink = <Link className="nav-link" to="/poems" style={{display: 'inline'}}>Poems</Link>;
  const poetsLink = <Link className="nav-link" to="/poets" style={{display: 'inline'}}>Poets</Link>;
  const navigate = useNavigate();

  return (
    
    <Navbar style={{backgroundColor : "rgb(234, 234, 234)"}} variant="light">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src={ logo2 }
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span>My Poems</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={poemsLink} id="">
              {categories.map(category => (
                <Link className="dropdown-item" key={category._id} to={`/category/${category._id}`}>
                  {category.name}
                </Link>
              ))}
            </NavDropdown>
            <NavDropdown title={poetsLink} id="basic-nav-dropdown">
              {poets.map(poet => (
                <Link className="dropdown-item" key={poet._id} to={`/poet/${poet._id}`}>
                {poet.firstName} {poet.lastName}
              </Link>  
              ))}
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => { 
            e.preventDefault();
            const form = e.target;
            const key = form.elements.search.value;
            navigate(`/search/${key}`);
          } }>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
            />
            <Button type="submit" variant="outline-primary">Search</Button>
          </Form>
          {localStorage.tokenPoems ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;

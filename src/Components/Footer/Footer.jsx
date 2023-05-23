import { NavLink } from 'react-router-dom';

import { Container, Navbar } from 'react-bootstrap';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="d-flex align-items-center link-info">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h1 className="h4 px-2 m-0">Mira soft</h1>
          </NavLink>
        </Container>
      </Navbar>
    </footer>
  );
};
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import Link from 'next/link';

// components
import UserOptions from './userOptions';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HamburgerButton = () => (
    <div onClick={() => setIsOpen(!isOpen)} className="hamburgerButton px-2">
      { !isOpen ? <h1 className="open">&#9776;</h1> : <h1 className="closeNav">&times;</h1> }
    </div>
  );

  return (
    <Container className={`sideNav p-0 vh-100 ${(isOpen && 'isOpen') || ''}`} fluid="true">
      <HamburgerButton />
      <Row className="my-5">
        <Col xs="12">
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/start">Summoners</Link></li>
            <li><Link href="/home">Champions</Link></li>
            <li><Link href="/home">Compositions</Link></li>
            <li><Link href="/home">Pro's</Link></li>
          </ul>
        </Col>
      </Row>
      <UserOptions/>
    </Container>
  );
}

SideNav.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default SideNav;

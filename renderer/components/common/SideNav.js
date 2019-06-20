import { useState } from 'react';
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
    <Container className={`shadow-depth-2 sideNav h-100 p-0 ${(isOpen && 'isOpen') || ''}`} fluid>
      <HamburgerButton />
      <Row className="py-5">
        <Col xs="12">
          <ul>
            <li><h4><Link href="/home">Home</Link></h4></li>
            <li><h4><Link href="/start">Summoners</Link></h4></li>
            <li><h4><Link href="/home">Champions</Link></h4></li>
            <li><h4><Link href="/home">Compositions</Link></h4></li>
            <li><h4><Link href="/home">Pro's</Link></h4></li>
          </ul>
        </Col>
      </Row>
      <UserOptions/>
    </Container>
  );
};

export default SideNav;

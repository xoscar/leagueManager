// dependencies
import { useState } from 'react';
import { Row, Col, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import Link from 'next/link';

// providers
import { useSummoner } from '../../providers/Summoner';

const UserOptions = () => {
  const [isOpen, setOpen] = useState(false);
  const [{ name, region }] = useSummoner();

  return (
    <Row className="my-5 userOptions justify-content-center">
      <Col xs="12">
        <Dropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
          <DropdownToggle caret>{name} ({region.toUpperCase()})</DropdownToggle>
          <DropdownMenu>
            <Link href="/profile"><DropdownItem>Profile</DropdownItem></Link>
            <Link href="/start"><DropdownItem>Log out</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default UserOptions;

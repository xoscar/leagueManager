import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

// components
import SideNav from '../components/common/SideNav';

const Main = ({ children }) => (
  <Container fluid={true}>
    <Row>
      <Col sm="4" md="3" xs="auto" lg="2" className="shadow-depth-2 primary-background vh-100 p-0">
        <SideNav/>
      </Col>
      <Col xs="12" sm="8" md="9" lg="10">
        {children}
      </Col>
    </Row>
  </Container>
);

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Main;

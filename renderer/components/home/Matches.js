import { Col, Row, Container } from 'reactstrap';

// components
import Match from './Match';

const Matches = () => {
  return (
    <Col xs="12" md="7" lg="5">
      <Container className="p-0">
        <Row>
          <Col xs="12">
            <h5>Match history</h5>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs="12">
            {
              [0].map(match => (
                <Match match={match} key={match}/>
              ))
            }
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Matches;

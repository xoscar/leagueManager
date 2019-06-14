import PropTypes from 'prop-types';
import { Row, Col, Form, Label, Input, FormGroup } from 'reactstrap';

const Title = ({ text = '' }) => (
  <Row className="justify-content-around align-items-center">
    <Col xs="4">
      <h3>{text}</h3>
    </Col>
    <Col xs="4">
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input id="icon_prefix" type="text" className="mr-sm-2" />
          <Label htmlFor="icon_prefix">Summoner</Label>
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;

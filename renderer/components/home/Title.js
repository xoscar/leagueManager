import PropTypes from 'prop-types';
import { Row, Col, Form, Label, Input, FormGroup } from 'reactstrap';

const Title = ({ text = '' }) => (
  <Row className="justify-content-around justify-content-sm-between my-2 align-items-center titleWrapper">
    <Col xs="3">
      <h2>{text}</h2>
    </Col>
    <Col xs="5" sm="8" md="auto">
      <Form inline>
        <FormGroup>
          <Label htmlFor="icon_prefix" className="summonerLabel">Summoner</Label>
          <Input id="icon_prefix" type="text" />
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;

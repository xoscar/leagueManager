import { Form, Row, Col, InputGroup, Input, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';

// config
import regions from '../../../main/config/regions.json';

// hooks
import { useInputHandler, useHandleSubmit } from '../../hooks/handlers';
import Summoner from '../../models/summoner';

const LoginForm = ({ onLogin }) => {
  const [{ name, region }, inputHandler] = useInputHandler({ region: regions[0].code, name: null });
  const [, handleSubmit] = useHandleSubmit();

  const addSummoner = async () => {
    const { info } = Summoner();
    const summonerInfo = await info({ summonerId: name, region });
    return onLogin({ ...summonerInfo, region, summonerName: name });
  };

  return (
    <Row className="mt-5 justify-content-center">
      <Col xs="12" md="10">
        <Form onSubmit={() => handleSubmit(addSummoner)} className="loginForm">
          <Row className="justify-content-between">
            <Col md="6" sm="7" xs="12">
              <InputGroup className="align-items-center justify-content-around">
                <Label for="summoner" className="col-4">Summoner</Label>
                <Input id="summoner" onChange={event => inputHandler('name', event)} type="text" className="validate text-lighten-5 grey-text col-8 col-sm-7"/>
              </InputGroup>
            </Col>
            <Col md="6" sm="5" xs="12">
              <InputGroup className="align-items-center justify-content-around">
                <Label for="region" className="col-4">Region</Label>
                <Input type="select" className="col-8 col-sm-7" onChange={event => inputHandler('region', event)} name="region" defaultValue={region} id="region">
                  {
                    regions.map(({ code }, index) => (
                      <option value={code} defaultValue={!index} key={code}>{code}</option>
                    ))
                  }
                </Input>
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-4 justify-content-end">
            <Col xs="auto">
              <Button color="primary">Go!</Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;

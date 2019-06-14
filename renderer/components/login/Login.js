// dependencies
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';

// components
import LoginForm from './Form';
import LoginTitle from './Title';

// libs
import Store from '../../lib/store';

const Login = () => {
  const onLogin = async (summonerInfo) => {
    await Store({ name: 'userConfig' }).save(summonerInfo);
    Router.push('/home');
  };

  return (
    <Container className="primary-background" fluid={true}>
      <Row className="align-items-center vh-100">
        <Col xs="12">
          <Container>
            <LoginTitle/>
            <LoginForm onLogin={onLogin}/>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

// libs
import Store from '../lib/store';

// layout
import Page from '../layouts/page';
import Main from '../layouts/main';

// components
import Matches from '../components/home/Matches';
import Ranking from '../components/home/Ranking';
import Masteries from '../components/home/Masteries';
import Title from '../components/home/Title';

// providers
import { ConfigProvider } from '../providers/Config';

const Home = ({ userConfig }) => (
  <Page>
    <ConfigProvider userConfig={userConfig}>
      <Main>
        <Title text="Home"/>
        <Row>
          <Matches userConfig={userConfig} />
          <Col xs="12">
            <Ranking userConfig={userConfig} />
            <Masteries userConfig={userConfig} />
          </Col>
        </Row>
      </Main>
    </ConfigProvider>
  </Page>
);

Home.getInitialProps = () => {
  const store = Store({ name: 'userConfig' });
  store.get();

  return new Promise(resolve => (
    store.listen('get', (userConfig) => {
      resolve({
        userConfig,
      });
    })
  ));
};

Home.propTypes = {
  userConfig: PropTypes.object.isRequired,
};

export default Home;

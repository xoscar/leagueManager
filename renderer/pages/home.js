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
import Title from '../components/home/Title';

// providers
import { SummonerProvider } from '../providers/Summoner';

const Home = ({ userConfig }) => (
  <Page>
    <SummonerProvider userConfig={userConfig}>
      <Main>
        <Title text="Home"/>
        <Row className="justify-content-sm-around mt-sm-4">
          <Matches />
          <Col xs="12" md="5">
            <Ranking />
          </Col>
        </Row>
      </Main>
    </SummonerProvider>
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

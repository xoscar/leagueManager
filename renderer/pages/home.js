// libs
import Store from '../lib/store';

// layout
import Page from '../layouts/page';
import Main from '../layouts/main';

// components
import Matches from '../components/matches';
import Ranking from '../components/ranking';
import Masteries from '../components/masteries';

const home = ({ userConfig }) => (
  <Page>
    <Main>
      <div className="row z-depth-1">
        <div className="col s4">
          <h3>Home</h3>
        </div>
        <div className="input-field col s4 offset-s3">
          <form>
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">Summoner</label>
          </form>
        </div>
      </div>
      <div className="row">
        <Matches userConfig={userConfig} />
        <div className="col m5 s12">
          <Ranking userConfig={userConfig} />
          <Masteries userConfig={userConfig} />
        </div>
      </div>
    </Main>
  </Page>
);

home.getInitialProps = async () => {
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

export default home;

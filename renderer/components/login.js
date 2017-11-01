// dependencies
import Router from 'next/router';

// components
import Base from './base';

// config
import regions from '../lib/config/regions.json';

// libs
import Store from '../lib/store';

export default class Login extends Base {
  state = {
    region: regions[0].code,
    name: null,
  };

  componentDidMount() {
    $('select').material_select();
    $('select').on('change', () => {
      this.setState({
        region: $('select').find(':selected')[0].value,
      });
    });
  }

  addSummoner() {
    const summoner = this.integrations.riot({ defaultRegion: this.state.region }).summoner;
    return summoner.info({ summonerId: this.state.name })

    .then(async (summonerInfo) => {
      await Store({ name: 'userConfig' }).save(summonerInfo);
      Router.push('/home');
    });
  }

  render() {
    return (
    <div className="primary-background">
      <style jsx>{`
          .center {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
      `}</style>
      <div className="center">
        <div>
          <div className="row">
            <h1 className="grey-text text-lighten-5">League of Legends Manager</h1>
          </div>

          <form onSubmit={this.handleEvent.bind(this, this.addSummoner.bind(this))}>
            <div className="row">
              <div className="col m4 offset-m3 s12">
                <div className="input-field">
                  <input id="summoner" onChange={this.handleChange.bind(this, 'name')} required type="text" className="validate text-lighten-5 grey-text"/>
                  <label htmlFor="summoner">Summoner</label>
                </div>
              </div>
              <div className="col m2 s12">
                <div className="input-field">
                  <select className="text-lighten-5 grey-text">
                    {
                      regions.map((region, index) => (
                        <option value={region.code} defaultValue={!index} key={region.code}>{region.code}</option>
                      ))
                    }
                  </select>
                  <label>Region</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col m3 s12 offset-m6">
                <button className="btn right waves-effect waves-light">Go!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

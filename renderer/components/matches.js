// components
import Base from './base';

const Match = ({ match }) => (
  <div>
    <style jsx>{`
      div.col { padding: 0px }
      div.summoner-wrapper {
        height: 32px;
        width: 31.72px !important;
      }

      div.items-wrapper {
        height: 30px;
        width: 27px !important;
      }

      div.champion-wrapper { 
        height: 59px;
        width: 64px !important; 
      }

      div.card { height: 67px }
      label { color: #212121 }
      .lost { border-bottom: solid 3px #e53935 }
      .win { border-bottom: solid 3px #4caf50 }
    `}</style>
    <div className="row card win">
      <div className="col s2 no-padding champion-wrapper">
        <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Karma.png" className="responsive-img"/>
      </div>
      <div className="col s1 ">
        <div className="summoner-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png" className="responsive-img"/>
        </div>
        <div className="summoner-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerExhaust.png" className="responsive-img"/>
        </div>
      </div>
      <div className="col s3">
        <div className="col s12">
          <label>Karma</label>
        </div>
        <div className="col s12">
          <label>A+ / +232 IP</label>
        </div>
        <div className="col s12">
          <label>Ranked (Draft Mode)</label>
        </div>
      </div>
      <div className="col s4 center" style={{ paddingTop: '2px' }}>
        <div className="col s2 items-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2302.png" className="responsive-img"/>
        </div>
        <div className="col s2 items-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3107.png" className="responsive-img"/>
        </div>
        <div className="col s2 items-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2032.png" className="responsive-img"/>
        </div>
        <div className="col s2 items-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3117.png" className="responsive-img"/>
        </div>
        <div className="col s2 items-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3504.png" className="responsive-img"/>
        </div>
        <div className="col s2 items-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2031.png" className="responsive-img"/>
        </div>
        <div className="col s2 items-wrapper">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3364.png" className="responsive-img"/>
        </div>
        <div className="col s12 center">
          <div className="col s4">
            <label>1/2/20</label>
          </div>
          <div className="col s4">
            <label>10.6k</label>
            <img src="https://matchhistory.na.leagueoflegends.com/assets/1.0.31/css/resources/images/scoreboardicon_gold.png" style={{ width: '15px' }}/>
          </div>
          <div className="col s4">
            <label>20</label>
            <img src="https://matchhistory.na.leagueoflegends.com/assets/1.0.31/css/resources/images/scoreboardicon_minion.png" style={{ width: '10px' }}/>
          </div>
        </div>
      </div>
      <div className="col s2 center" style={{ padding: '10px' }}>
        <div className="col s12">
          <label>28:30</label>
        </div>
        <div className="col s12">
          <label>10/15/2017</label>
        </div>
      </div>
    </div>
  </div>
);

export default class Matches extends Base {
  render() {
    return (
      <div>
        <div className="col m7 s12">
          <div className="row">
            <h5>Match history</h5>
          </div>
          <div>
            {
              [0, 1, 2, 3, 4, 5].map(match => (
                <Match match={match} key={match}/>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

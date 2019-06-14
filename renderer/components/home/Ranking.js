import { Component } from 'react';

export default class Ranking extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h5>Ranking</h5>
        </div>
        <div className="row center">
          <div className="col s10 offset-s1">
            <div className="carousel carousel-slider center" data-indicators="true">
              <div className="carousel-item white-text">
                <label>Diamond V (RANKED_SOLO_5x5)</label>
                <div className="rank-wrapper">
                  <img src="/static/riot/base-icons/diamond.png" className="responsive-img"/>
                </div>
              </div>
              <div className="carousel-item white-text">
                <label>Diamond V (RANKED_FLEX_SR)</label>
                <div className="rank-wrapper">
                  <img src="/static/riot/base-icons/diamond.png" className="responsive-img"/>
                </div>
              </div>
              <div className="carousel-item white-text">
                <label>Diamond V (RANKED_FLEX_TT)</label>
                <div className="rank-wrapper">
                  <img src="/static/riot/base-icons/diamond.png" className="responsive-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

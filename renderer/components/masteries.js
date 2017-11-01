import { Component } from 'react';

export default class Masteries extends Component {
  render() {
    return (
      <div>
        <style jsx>{`
          .rank-wrapper { width: 300px, margin: auto }
        `}</style>
        <div className="row">
          <h5>Masteries</h5>
        </div>
        <div className="row center">
          <div className="col s10 offset-s1">
            <div className="carousel carousel-slider center" data-indicators="true">
              <div className="carousel-item white-text">
                <label>Diamond V</label>
                <div className="rank-wrapper">
                  <img src="/static/riot/base-icons/diamond.png" className="responsive-img"/>
                </div>
              </div>
              <div className="carousel-item white-text">
                <label>Diamond V</label>
                <div className="rank-wrapper">
                  <img src="/static/riot/base-icons/diamond.png" className="responsive-img"/>
                </div>
              </div>
              <div className="carousel-item white-text">
                <label>Diamond V</label>
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

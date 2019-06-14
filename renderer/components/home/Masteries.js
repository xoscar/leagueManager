import { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

const Masteries = () => {
  return (
    <>
      <Row>
        <h5>Masteries</h5>
      </Row>
      <Row className="justify-content-center">
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
      </Row>
    </>
  );
}

export default Masteries;

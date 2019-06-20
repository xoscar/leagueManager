import { useState, useEffect } from 'react';
import { Container, Col, Row, CarouselControl, Carousel, CarouselItem } from 'reactstrap';
import PropTypes from 'prop-types';

// providers
import { useSummoner } from '../../providers/Summoner';

const Ranking = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [rankingInfo, setRanking] = useState([]);
  const [summoner] = useSummoner();

  useEffect(() => {
    setRanking(summoner.ranking());
  }, []);

  const next = () => (
    !animating && setActiveIndex(activeIndex === rankingInfo.length - 1 ? 0 : activeIndex + 1)
  );

  const previous = () => (
    !animating && setActiveIndex(activeIndex === 0 ? rankingInfo.length - 1 : activeIndex - 1)
  );

  const RankingCarouselItem = ({ queueType, rank, tier, active = false }) => (
    <CarouselItem className={`custom-tag ${(active && 'active') || ''}`} tag="div" onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <img src={`/static/riot/tier-icons/${tier.toLowerCase()}_${rank.toLowerCase()}.png`} alt={queueType} />
        <div className="carousel-caption p-1">
          <h5 className="my-0 text-capitalize">{`${tier} ${rank}`}</h5>
          <p className="my-0">{queueType}</p>
        </div>
      </div>
    </CarouselItem>
  );

  RankingCarouselItem.propTypes = {
    queueType: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    tier: PropTypes.string.isRequired,
    active: PropTypes.bool,
  };

  return (
    <Container fluid className="ranking my-4 my-md-0">
      <Row><h4>Ranking</h4></Row>
      <Row>
        <Col xs="12" className="p-0">
          <Carousel next={() => null} previous={() => null} activeIndex={activeIndex}>
            {
              rankingInfo.map((rank, index) => (
                <RankingCarouselItem key={rank.queueType} {...rank} active={activeIndex === index} />
              ))
            }
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Ranking;

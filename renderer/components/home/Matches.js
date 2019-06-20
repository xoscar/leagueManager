import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'reactstrap';

// components
import Match from './Match';

// providers
import { useSummoner } from '../../providers/Summoner';

const Matches = () => {
  const [summoner] = useSummoner();
  const [matches, setMatches] = useState([]);
  const [filters] = useState({ endIndex: 10, beginIndex: 0 });

  useEffect(() => {
    const { matches: matchList } = summoner.matches(filters);
    console.log(matchList);
    setMatches(matchList);
  }, []);

  return (
    <Col xs="12" md="7" lg="5">
      <Container className="p-0">
        <Row>
          <Col xs="12">
            <h4>Match history</h4>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs="12">
            {
              matches.map(match => (
                <Match match={match} key={match.id}/>
              ))
            }
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Matches;

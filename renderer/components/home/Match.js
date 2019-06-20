import PropTypes from 'prop-types';
import { Container, Row, Col, Label } from 'reactstrap';

const items = ['http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2302.png', 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3107.png', 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2032.png', 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3117.png', 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3504.png', 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2031.png', 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3364.png'];

const Match = ({ match: { champion, details: { participant } } }) => {
  const { spells } = participant;

  const ChampionImage = () => (
    <Col xs="auto" className="champion">
      <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.name}.png`} className="img-fluid championImg"/>
    </Col>
  );

  const SpellsImages = () => (
    <Col xs="auto" className="spells">
      <div className="summoner-wrapper"><img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${spells.spell1Id}.png`} className="responsive-img"/></div>
      <div className="summoner-wrapper"><img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${spells.spell2Id}.png`} className="responsive-img"/></div>
    </Col>
  );

  const Stats = () => (
    <Col xs="4" className="stats">
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col xs="12">
            <Label>{champion.name}</Label>
          </Col>
          <Col xs="12">
            <Label>A+ / +232 IP</Label>
          </Col>
          <Col xs="12">
            <Label>Ranked (Draft Mode)</Label>
          </Col>
        </Row>
      </Container>
    </Col>
  );

  const Summary = () => (
    <Col xs="2">
      <Container className="h-100 p-0">
        <Row className="align-items-center h-100">
          <Col xs="12">
            <Label>1/2/20</Label>
          </Col>
          <Col xs="12">
            <Label>1022.6k</Label>
            <img src="https://matchhistory.na.leagueoflegends.com/assets/1.0.31/css/resources/images/scoreboardicon_gold.png" style={{ width: '15px' }}/>
          </Col>
          <Col xs="12">
            <Label>120</Label>
            <img src="https://matchhistory.na.leagueoflegends.com/assets/1.0.31/css/resources/images/scoreboardicon_minion.png" style={{ width: '10px' }}/>
          </Col>
        </Row>
      </Container>
    </Col>
  );

  const Items = () => (
    <Col xs="12">
      <Container className="p-0" fluid={true}>
        <Row className="flex-row flex-nowrap no-gutters overflow-auto no-scrollbar">
          { items.map((src, index) => <Col xs="auto" key={`item-${index}`}><img src={src} className="responsive-img"/></Col>) }
        </Row>
      </Container>
    </Col>
  );

  const Info = () => (
    <Col xs="12" className="info">
      <Container>
        <Row className="justify-content-end py-1">
          <Col xs="auto">
            <Label>10/15/2017</Label>
          </Col>
          <Col xs="auto">
            <Label>28:30</Label>
          </Col>
        </Row>
      </Container>
    </Col>
  );

  return (
    <Container className="matchCard shadow-depth-1 p-0">
      <Row className="no-gutters matchContent my-3">
        <ChampionImage/>
        <SpellsImages/>
        <Stats/>
        <Summary/>
        <Items/>
        <Info/>
      </Row>
    </Container>
  );
};

Match.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Match;

import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

// models
import Summoner from '../models/summoner';

const SummonerContext = createContext();

const reducer = (state = null, action) => {
  switch (action) {
    case 'save': return state;
    case 'remove': return null;
    default: throw new Error(`Unexpected action: ${action}`);
  }
};

const SummonerProvider = ({ children, userConfig = {} }) => {
  const contextValue = useReducer(reducer, Summoner(userConfig));
  return (
    <SummonerContext.Provider value={contextValue}>
      {children}
    </SummonerContext.Provider>
  );
};

SummonerProvider.propTypes = {
  children: PropTypes.any.isRequired,
  userConfig: PropTypes.object.isRequired,
};

const useSummoner = () => (
  useContext(SummonerContext)
);

export {
  useSummoner,
  SummonerProvider,
};

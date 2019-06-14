import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const ConfigContext = createContext();

const reducer = (state = null, action) => {
  switch (action) {
    case 'save': return state;
    case 'remove': return null;
    default: throw new Error(`Unexpected action: ${action}`);
  }
};

const ConfigProvider = ({ children, userConfig = null }) => {
  const contextValue = useReducer(reducer, userConfig);
  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

ConfigProvider.propTypes = {
  children: PropTypes.any.isRequired,
  userConfig: PropTypes.object.isRequired,
};

const useConfig = () => (
  useContext(ConfigContext)
);

export {
  useConfig,
  ConfigProvider,
};

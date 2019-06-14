// dependencies
import Router from 'next/router';
import PropTypes from 'prop-types';

// components
import Meta from '../components/common/Meta';

// libs
import Settings from '../models/settings';

const Page = ({ children }) => (
  <>
    <Meta/>
    {children}
  </>
);

Page.getInitialProps = ({ pathname }) => {
  if (pathname !== '/start') {
    Settings('userConfig')

    .then(userConfig => (
      Promise.resolve({
        userConfig,
      })
    ), () => (
      Router.push('/start')
    ));
  }

  return Promise.resolve({});
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;

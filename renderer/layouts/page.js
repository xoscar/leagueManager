// dependencies
import Router from 'next/router';

// components
import Meta from '../components/meta';
import Footer from '../components/footer';

// libs
import configLoader from '../lib/config/loader';

const page = ({ children }) => (
  <div>
    <Meta/>
    { children }
    <Footer/>
  </div>
);

page.getInitialProps = ({ pathname }) => {
  if (pathname !== '/start') {
    configLoader('userConfig')

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

export default page;

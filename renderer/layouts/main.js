// components
import UserOptions from '../components/userOptions';
import SideNav from '../components/sideNav';

export default ({ children }) => (
  <div className="row" style={{ marginBottom: '0px' }}>
    <style jsx>{`
      .full-height { height: 100vh }
    `}</style>
    <div className="col m2 primary-background full-height" style={{ padding: '0px' }}>
      <SideNav />
      <UserOptions />
    </div>
    <div className="col m10" style={{ padding: '0px' }}>
     { children }
    </div>
  </div>
);

// dependencies
import { Component } from 'react';
import Link from 'next/link';

export default class UserOptions extends Component {
  componentDidMount() {
    $('.dropdown-button').dropdown({
      alignment: true,
      belowOrigin: true,
    });
  }

  render() {
    return (
      <div className="dropdown-button primary-dark-background row valign-wrapper" data-activates='dropdown1' style={{ height: '7%', cursor: 'pointer', marginBottom: '0px' }}>
        <div className="col s12">
          <a>Node (LAN)<i className="right material-icons">arrow_drop_down</i></a>
          <ul id='dropdown1' className='dropdown-content'>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/start">Log out</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

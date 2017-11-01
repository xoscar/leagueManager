// dependencies
import Link from 'next/link';

export default () => (
  <div className="valign-wrapper" style={{ height: '93%' }}>
    <div className="row">
      <style jsx>{`
        ul li { margin: 5px 0px }
      `}</style>
      <ul className="col s11 offset-s1">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/start">Summoners</Link></li>
        <li><Link href="/home">Champions</Link></li>
        <li><Link href="/home">Compositions</Link></li>
        <li><Link href="/home">Pro's</Link></li>
      </ul>
    </div>
  </div>
);

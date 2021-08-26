import React from 'react';

const Header = (props) => (
  <header className="top">
    <h1>
      Seoulju Korean Kitchen and Bar
    </h1>
    <h5 className="tagline">
      <span>{props.tagline}</span>
    </h5>
  </header>
);

export default Header;
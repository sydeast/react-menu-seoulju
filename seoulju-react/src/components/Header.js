import React from 'react';

const Header = (props) => (
  <header className="top">
    <h1>
      Seoulju Korean Kitchen and Bar
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
import React from 'react';
import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div className="container">
      <Navigation/>
      <div className="content-container">
        { props.children }
      </div>
    </div>
  );
}

module.exports = Main;

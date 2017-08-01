import React from 'react';
import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div>
        { props.children }
      </div>
    </div>
  );
}

module.exports = Main;

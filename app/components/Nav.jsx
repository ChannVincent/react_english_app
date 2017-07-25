import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

/*
Documentation :
http://foundation.zurb.com/sites/docs/top-bar.html#top-bar-container
*/
class Nav extends Component {

  render() {
    return (
      <div className="top-bar">

            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">
                  Learning English
                </li>
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
                </li>
                <li>
                  <Link to="/pricing" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Pricing</Link>
                </li>
                <li>
                  <Link to="/blog" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Blog</Link>
                </li>
              </ul>
            </div>

      </div>
    )
  }

}

export default Nav;

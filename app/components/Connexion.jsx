import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Connexion extends Component {
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="home-landing-picture">
        <br/>
        <br/>
        <div className="medium-6 large-4 small-10 small-offset-1 medium-offset-3 large-offset-4 connexion card">

          <h1><b>Inscription à la Newsletter</b></h1>
          <form ref="form" onSubmit={this.onSubmit}>
            <p>Email</p>
            <input type="email" ref="email" placeholder="exemple@gmail.com"/>

            <p>Password</p>
            <input type="password" ref="password" placeholder="password"/>

            <br/>
            <Link to="/">
              <button className="button expanded"><strong>Connexion</strong></button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Connexion;

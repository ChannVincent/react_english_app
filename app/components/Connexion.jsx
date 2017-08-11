import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Connexion extends Component {
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="connexion-landing-picture">
        <div className="medium-6 large-4 small-10 small-offset-1 medium-offset-3 large-offset-4 connexion">
          <div className="card connexion-form">
            <h1><b>Connexion</b></h1>
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
      </div>
    )
  }
}

export default Connexion;

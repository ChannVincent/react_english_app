import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Connexion extends Component {
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="medium-6 large-4 small-12 small-offset-0 medium-offset-3 large-offset-4 connexion">
          <br/>
          <br/>
          <h3>Connexion</h3>
          <form ref="form" onSubmit={this.onSubmit}>
            <p>Email</p>
            <input type="email" ref="seconds" placeholder="exemple@gmail.com"/>

            <p>Password</p>
            <input type="password" ref="seconds" placeholder="password"/>

            <br/>
            <Link to="/newsletter">
              <button className="button expanded">Connexion</button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Connexion;

import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter home-landing-picture">
        <div className="row">
          <div className="centered small-offset-0 medium-offset-2 large-offset-2 small-12 medium-8 large-8 card">
            <h1><b>Inscription à la Newsletter</b></h1>
            <br/>
            <form ref="form" onSubmit={this.onSubmit}>
              <div className="input-group">
                <input className="input-group-field" type="email" ref="email" placeholder="exemple@gmail.com"/>
                <div className="input-group-button">
                  <Link to="/">
                    <button className="button expanded">Inscription</button>
                  </Link>
                </div>
              </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsletter;

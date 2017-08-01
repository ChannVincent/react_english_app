import React, {Component} from 'react';

// http://dhiglobal.com/wp-content/uploads/2016/07/placeholder.jpg
// https://www.youtube.com/watch?v=hExwnLlj2xk
class Home extends Component {
  render() {
    return (
      <div className="home">
        <p>Home</p>
        <img className="home-landing-picture" alt="Landing picture."/>
      </div>
    )
  }
}

export default Home;

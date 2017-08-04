var React = require('react');
var ReactDOM = require('react-dom');
var {
  Route,
  Router,
  IndexRoute,
  hashHistory
} = require('react-router');
import Main from 'Main';
import Home from 'Home';
import Blog from 'Blog';
import Connexion from 'Connexion';
import Newsletter from 'Newsletter';

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/newsletter" component={Newsletter}/>
      <Route path="/connexion" component={Connexion}/>
      <Route path="/blog" component={Blog}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById("app")
);

var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HashHistory = require('react-router').hashHistory,
    Cloudinary = require('cloudinary');

var Explore = require('./components/explore');
var NavBar = require('./components/nav_bar');
var Modal = require("react-modal");
var UserClientActions = require('./actions/user_client_actions');
var ErrorStore = require('./stores/error_store');
window.SessionStore = require('./stores/session_store');

Cloudinary.config({
  cloud_name: 'kasperkuo',
  api_key: '713655594176822',
  api_secret: 'pe241ogoxxnOv8FPf2UQhuZXJpw'
});

var App = React.createClass({
  componentDidMount: function() {
    UserClientActions.fetchCurrentUser();
  },


  render: function() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router history={HashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Explore} />

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  Modal.setAppElement(document.body);
  var root = document.getElementById("root");
  ReactDOM.render(routes, root);
});

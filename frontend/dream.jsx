var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    HashHistory = require('react-router').hashHistory;

var LoginForm = require('./components/login_form');
var SignUpForm = require('./components/signup_form');
var Modal = require("react-modal");

var CurrentUserState = require('./mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function() {
    return (
      <div>
        <header><h1>Dream</h1></header>
        <SignUpForm />
        <LoginForm />
      </div>
    );
  }
});

var routes = (
  <Router history={HashHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  Modal.setAppElement(document.body);
  var root = document.getElementById("root");
  ReactDOM.render(routes, root);
});

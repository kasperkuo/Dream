var React = require('react');
var UserClientActions = require('../actions/user_client_actions');
var SessionStore = require("../stores/session_store");
var LoginForm = require('./login_form');
var SignUpForm = require('./signup_form');

var NavBar = React.createClass({
  getInitialState: function() {
    return { loggedUser: {} };
  },

  logoutUser: function() {
    UserClientActions.logout();
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onChange);
    UserClientActions.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _onChange: function() {
    this.setState({ loggedUser: SessionStore.currentUser() });
  },

  render: function() {
    var button;
    if (this.state.loggedUser) {
      button = <button className="navbar-logout"
        onClick={this.logoutUser}>Logout</button>;
    } else {
      button = <LoginForm />;
    }

    return (
      <div className="navbar">
        <ul>
          <li id="nav-session">{button}</li>
          <li id="nav-session"><SignUpForm /></li>
        </ul>
      </div>
    );
  }

});

module.exports = NavBar;

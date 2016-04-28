var React = require('react');
var UserClientActions = require('../actions/user_client_actions');
var SessionStore = require("../stores/session_store");
var LoginForm = require('./user_forms/login_form');
var SignUpForm = require('./user_forms/signup_form');
var HashHistory = require('react-router').hashHistory;

var NavBar = React.createClass({
  getInitialState: function() {
    return { isLogged: false };
  },

  logoutUser: function(e) {
    UserClientActions.logout();
    this.setState({ isLogged: false });
    HashHistory.push("/");
  },

  // closeModal: function(){
  //   this.setState({ modalOpen: false });
  // },
  //
  // openModal: function(){
  //   this.setState({ modalOpen: true });
  // },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _onChange: function() {
    this.setState({ isLogged: SessionStore.isLogged() });
  },

  redirectHome: function(e){
    e.preventDefault();
    HashHistory.push('/');
  },

  render: function() {
    var button;
    if (this.state.isLogged) {
      button = <a className="navbar-logout"
        onClick={this.logoutUser}>Logout</a>;
    } else {
      button = <LoginForm />;
    }

    return (

      <div className="nav">
        <a className="home-button" onClick={this.redirectHome}>Home</a>
        <ul>
          <li id="nav-session">{button}</li>
          <li id="nav-session"><SignUpForm /></li>
        </ul>
      </div>
    );
  }

});

module.exports = NavBar;

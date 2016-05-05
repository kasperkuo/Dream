var React = require('react');
var UserClientActions = require('../actions/user_client_actions');
var SessionStore = require("../stores/session_store");
var LoginForm = require('./user_forms/login_form');
var SignUpForm = require('./user_forms/signup_form');
var ImageForm = require('./images/image_form');
var HashHistory = require('react-router').hashHistory;
var UploadButton = require('./navbar_items/upload_button');
var UserStore = require('../stores/user_store');

var NavBar = React.createClass({
  getInitialState: function() {
    return { currentUser: SessionStore.currentUser() };
  },

  logoutUser: function(e) {
    UserClientActions.logout();
    this.setState({ currentUser: SessionStore.currentUser() });
    HashHistory.push("/");
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onChange);
    // UserClientActions.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _onChange: function() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  contextTypes: {
      router: React.PropTypes.object.isRequired
  },

  redirectHome: function(e){
    e.preventDefault();
    HashHistory.push("/");
  },



  redirectProfile: function(e){
    e.preventDefault();
    var currentUser = SessionStore.currentUser();
    HashHistory.push("/users/" + currentUser.id);
  },

  render: function() {
    var button;
    var signupButton;
    if (this.state.currentUser) {
      button = <a className="navbar-logout"
        onClick={this.logoutUser}>LOGOUT</a>;
      signupButton = <a className="userButton" onClick={this.redirectProfile}>YOU</a>;
    } else {
      button = <LoginForm />;
      signupButton = <SignUpForm />;
    }

    return (

      <div className="nav">
        <a className="home-button" onClick={this.redirectHome}>Dream</a>
        <ul>
          <li id="nav-session"><ImageForm /></li>
          <li id="nav-session">{button}</li>
          <li id="nav-session">{signupButton}</li>
        </ul>
      </div>
    );
  }

});

module.exports = NavBar;

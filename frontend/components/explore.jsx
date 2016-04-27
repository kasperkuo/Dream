var React = require('react');
var SessionStore = require('../stores/session_store');
var UserClientActions = require('../actions/user_client_actions');
var LoginForm = require('./user_forms/login_form');
var Splash = require('./images/splash');
var ImageIndex = require('./images/image_index');

var Explore = React.createClass({

  getInitialState: function() {
    return { isLogged: false };
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _onChange: function() {
    this.setState({ isLogged: SessionStore.isLogged() });
  },

  render: function(){
    if (this.state.isLogged === true) {
      console.log("entering logged state in explore");
      var loginMessage = "You are currently logged in!";
    }

    return (
      <div className="explore">
        <h3>explore</h3>
        {loginMessage}
        <Splash />
      </div>
    );
  }
});

module.exports = Explore;

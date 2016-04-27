var React = require('react');
var SessionStore = require('../stores/session_store');
var UserClientActions = require('../actions/user_client_actions');
var LoginForm = require('./login_form');

var Explore = React.createClass({
  render: function(){
    return (
      <div>
        <h3>explore</h3>
      </div>
    );
  }
});

module.exports = Explore;

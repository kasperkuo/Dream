var React = require('react');
var SessionStore = require('../stores/session_store');
var UserClientActions = require('../actions/user_client_actions');
var LoginForm = require('./user_forms/login_form');
var Splash = require('./images/splash');
var ImageIndex = require('./images/image_index');

var Explore = React.createClass({

  getInitialState: function() {
    return { currentUser: SessionStore.currentUser() };
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _onChange: function() {
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  render: function(){
    var feed;
    if (this.state.currentUser) {
      feed = <ImageIndex />;
    } else {
      feed = <Splash />;
    }

    return (
      <div className="explore">
        {feed}
      </div>
    );
  }
});

module.exports = Explore;

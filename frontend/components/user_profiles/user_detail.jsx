var React = require('react');

var SessionStore = require('../../stores/session_store'),
    UserStore = require('../../stores/user_store');

var UserDetail = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
      // userProfile: UserStore.user()
    };
  },

  _onUserChange: function() {

  },

  _onSessionChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  componentDidMount: function() {
    this.userProfileListener = UserStore.addListener(this._onUserChange);
    this.currentUserListener = SessionStore.addListener(this._onSessionChange);
  },

  componentWillUnmount: function() {
    this.userProfileListener.remove();
    this.currentUserListener.remove();
  },

  render: function() {
    return (
      <div></div>
    );
  }

});

module.exports = UserDetail;

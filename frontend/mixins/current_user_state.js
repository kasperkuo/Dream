var SessionStore = require('../stores/session_store');
var UserClientActions = require('../actions/user_client_actions');

var CurrentUserState = {
  getInitialState: function () {
    return ({
      currentUser: SessionStore.currentUser(),
      userErrors: SessionStore.errors()
    });
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.updateUser);
    if (typeof SessionStore.currentUser() === undefined) {
      UserClientActions.fetchCurrentUser();
    }
  },

  updateUser: function() {
    this.setState({
      currentUser: SessionStore.currentUser(),
      userErrors: SessionStore.errors()
    });
  }
};

module.exports = CurrentUserState;

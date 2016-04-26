var UserStore = require('../stores/user_store');
var UserClientActions = require('../actions/user_client_actions');

var CurrentUserState = {
  getInitialState: function () {
    return ({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateUser);
    if (typeof UserStore.currentUser() === undefined) {
      UserClientActions.fetchCurrentUser();
    }
  },

  updateUser: function() {
    this.setState({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  }
};

module.exports = CurrentUserState;

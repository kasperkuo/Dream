var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants'),
    ErrorConstants = require('../constants/error_constants');

var UserServerActions = {
  receiveCurrentUser: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error) {
    Dispatcher.dispatch({
      actionType: ErrorConstants.ERROR,
      errors: error.responseJSON.errors
    });
  },

  removeCurrentUser: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT,
    });
  },

  receiveUserProfile: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    });
  }
};

module.exports = UserServerActions;

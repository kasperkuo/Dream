var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserServerActions = {
  receiveCurrentUser: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error) {
    Dispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  },

  removeCurrentUser: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT,
    });
  }
};

module.exports = UserServerActions;

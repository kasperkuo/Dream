var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var SessionStore = new Store(Dispatcher);

var _currentUser = {};
var _authErrors;

//double check this currentUser function
SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.errors = function(){
  if (_authErrors){
    return [].slice.call(_authErrors);
  }
};

var addCurrentUser = function(user) {
  _currentUser = user;
};

var removeCurrentUser = function() {
  _currentUser = {};
};

SessionStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.LOGIN:
      addCurrentUser(payload.user);
      this.__emitChange();
      break;
    case UserConstants.LOGOUT:
      removeCurrentUser();
      this.__emitChange();
      break;
    case UserConstants.ERROR:
      break;

  }
};

module.exports = SessionStore;

var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var SessionStore = new Store(Dispatcher);

var _currentUser;

//double check this currentUser function
SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.isLogged = function(){
  if (_currentUser) {
    return true;
  } else {
    return false;
  }
};

var addCurrentUser = function(user) {
  _currentUser = undefined;
  _currentUser = user;
  SessionStore.__emitChange();
};

var removeCurrentUser = function() {
  _currentUser = undefined;
  SessionStore.__emitChange();
};

SessionStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.LOGIN:
      addCurrentUser(payload.user);
      break;
    case UserConstants.LOGOUT:
      removeCurrentUser();
      break;
  }
};

module.exports = SessionStore;

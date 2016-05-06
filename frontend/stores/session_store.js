var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var SessionStore = new Store(Dispatcher);

var myStorage = window.localStorage;
var _currentUser = JSON.parse(myStorage.getItem("currentUser"));


SessionStore.currentUser = function() {
  if (myStorage.getItem("currentUser") === "false") {
    return null;
  } else {
    return _currentUser;
  }
};


SessionStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.LOGIN:
      _currentUser = payload.user;
      myStorage.setItem("currentUser", JSON.stringify(payload.user));
      break;
    case UserConstants.LOGOUT:

      myStorage.setItem("currentUser", "false");
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
